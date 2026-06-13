#!/usr/bin/env zsh
set -euo pipefail

RED='\e[31m'
GREEN='\e[32m'
YELLOW='\e[33m'
DIM='\e[38;2;88;91;112m'
RST='\e[0m'

PASS=0
FAIL=0
TOTAL=0

check() {
  local name="$1" url="$2" method="${3:-GET}" expected="${4:-200}" body="${5:-}"
  TOTAL=$((TOTAL + 1))

  local http
  if [[ -n "$body" ]]; then
    http=$(curl -s -o /dev/null -w "%{http_code}" -X "$method" "$url" \
      -H "Content-Type: application/json" -d "$body" --max-time 30)
  else
    http=$(curl -s -o /dev/null -w "%{http_code}" -X "$method" "$url" --max-time 10)
  fi

  if [[ "$http" == "$expected" ]]; then
    echo "  ${GREEN}PASS${RST} ${DIM}($http)${RST} $name"
    PASS=$((PASS + 1))
    return 0
  else
    echo "  ${RED}FAIL${RST} ${DIM}(got $http, expected $expected)${RST} $name"
    FAIL=$((FAIL + 1))
    return 1
  fi
}

BASE="https://apey-co.pages.dev"
DOMAIN="https://apey.co"

echo ""
echo "━━━ AI Prompt Optimizer — Automated Test ━━━"
echo "  $(date '+%Y-%m-%d %H:%M:%S')"
echo ""

# ── Pages Production ──────────────────────────
echo "${YELLOW}[Pages]${RST} Production URL"
check "MVP page loads"        "$BASE/mvp/prompt-optimizer/" GET 200
check "Old URL redirects"     "$BASE/tools/prompt-optimizer/" GET 301

# ── API ───────────────────────────────────────
echo ""
echo "${YELLOW}[API]${RST} Workers AI endpoint"

# English
BODY_EN='{"goal":"Write a SQL query assistant system prompt. Be concise."}'
HTTP=$(curl -s -o /tmp/apey-test-en.json -w "%{http_code}" -X POST "$DOMAIN/api/optimize" \
  -H "Content-Type: application/json" -d "$BODY_EN" --max-time 30)
if [[ "$HTTP" == "200" ]]; then
  PROMPT=$(python3 -c "import json; print(json.load(open('/tmp/apey-test-en.json')).get('prompt','')[:80])" 2>/dev/null)
  if [[ -n "$PROMPT" ]]; then
    echo "  ${GREEN}PASS${RST} ${DIM}(200, ${(C)PROMPT}...)${RST} English prompt"
    PASS=$((PASS + 1))
  else
    echo "  ${RED}FAIL${RST} ${DIM}(empty response)${RST} English prompt"
    FAIL=$((FAIL + 1))
  fi
else
  echo "  ${RED}FAIL${RST} ${DIM}($HTTP)${RST} English prompt"
  FAIL=$((FAIL + 1))
fi
TOTAL=$((TOTAL + 1))

# Chinese
BODY_ZH='{"goal":"帮我写SQL查询","lang":"zh"}'
HTTP=$(curl -s -o /tmp/apey-test-zh.json -w "%{http_code}" -X POST "$DOMAIN/api/optimize" \
  -H "Content-Type: application/json" -d "$BODY_ZH" --max-time 30)
if [[ "$HTTP" == "200" ]]; then
  PROMPT=$(python3 -c "import json; print(json.load(open('/tmp/apey-test-zh.json')).get('prompt','')[:60])" 2>/dev/null)
  if [[ -n "$PROMPT" ]]; then
    echo "  ${GREEN}PASS${RST} ${DIM}(200, ${(C)PROMPT}...)${RST} Chinese prompt"
    PASS=$((PASS + 1))
  else
    echo "  ${RED}FAIL${RST} ${DIM}(empty response)${RST} Chinese prompt"
    FAIL=$((FAIL + 1))
  fi
else
  echo "  ${RED}FAIL${RST} ${DIM}($HTTP)${RST} Chinese prompt"
  FAIL=$((FAIL + 1))
fi
TOTAL=$((TOTAL + 1))

# ── Custom Domain ─────────────────────────────
echo ""
echo "${YELLOW}[Domain]${RST} apey.co custom domain"
check "API proxy works"   "$DOMAIN/api/optimize" POST 200 "$BODY_EN"

# ── Error Handling ────────────────────────────
echo ""
echo "${YELLOW}[Errors]${RST} Edge cases"
check "Empty goal 400"    "$DOMAIN/api/optimize" POST 400 '{"goal":""}'
check "Missing field 400" "$DOMAIN/api/optimize" POST 400 '{}'

# ── Summary ───────────────────────────────────
echo ""
echo "━━━ Results ━━━"
printf "  ${GREEN}Pass: %d${RST}  ${RED}Fail: %d${RST}  Total: %d\n" $PASS $FAIL $TOTAL
echo ""

if [[ $FAIL -gt 0 ]]; then
  exit 1
fi
