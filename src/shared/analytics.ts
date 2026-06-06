import { ANALYTICS_CONFIG } from "./analyticsConfig";

const CONSENT_KEY = "apey_analytics_consent";

type EventProps = Record<string, string | number | boolean>;

let consented = false;
let initialized = false;

export function hasConsent(): boolean {
  if (!ANALYTICS_CONFIG.requireConsent) return true;
  return localStorage.getItem(CONSENT_KEY) === "accepted";
}

export function setConsent(accepted: boolean) {
  localStorage.setItem(CONSENT_KEY, accepted ? "accepted" : "denied");
  consented = accepted;
  if (accepted && !initialized) {
    initProvider();
  }
}

export function initAnalytics() {
  if (!ANALYTICS_CONFIG.enabled || ANALYTICS_CONFIG.provider === "disabled") return;

  consented = hasConsent();
  if (consented) {
    initProvider();
  }
}

function initProvider() {
  if (initialized) return;
  initialized = true;

  const { provider } = ANALYTICS_CONFIG;
  if (provider === "cloudflare") initCloudflare();
  else if (provider === "plausible") initPlausible();
  else if (provider === "umami") initUmami();
  else if (provider === "ga4") initGA4();
}

function initCloudflare() {
  const { cloudflare } = ANALYTICS_CONFIG;
  if (!cloudflare) return;
  const script = document.createElement("script");
  script.defer = true;
  script.src = "https://static.cloudflareinsights.com/beacon.min.js";
  script.dataset.cfBeacon = `{"token": "${cloudflare.token}"}`;
  document.head.appendChild(script);
}

function initPlausible() {
  const { plausible } = ANALYTICS_CONFIG;
  if (!plausible) return;
  const script = document.createElement("script");
  script.defer = true;
  script.dataset.domain = plausible.domain;
  if (plausible.apiHost) script.dataset.api = plausible.apiHost;
  script.src = plausible.apiHost
    ? `${plausible.apiHost}/js/script.js`
    : "https://plausible.io/js/script.js";
  document.head.appendChild(script);
}

function initUmami() {
  const { umami } = ANALYTICS_CONFIG;
  if (!umami) return;
  const script = document.createElement("script");
  script.defer = true;
  script.src = umami.src;
  script.dataset.websiteId = umami.websiteId;
  document.head.appendChild(script);
}

function initGA4() {
  const { ga4 } = ANALYTICS_CONFIG;
  if (!ga4) return;
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ga4.measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(["js", new Date()]);
  window.dataLayer.push(["config", ga4.measurementId, { anonymize_ip: true }]);
}

export function trackEvent(name: string, props?: EventProps) {
  if (!ANALYTICS_CONFIG.enabled) return;
  if (ANALYTICS_CONFIG.requireConsent && !consented) return;

  const { provider } = ANALYTICS_CONFIG;

  if (provider === "plausible") {
    window.plausible = window.plausible || (() => {});
    if (props) {
      window.plausible(name, { props });
    } else {
      window.plausible(name);
    }
  } else if (provider === "ga4") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(["event", name, props]);
  } else if (provider === "custom") {
    const { custom } = ANALYTICS_CONFIG;
    if (custom) {
      navigator.sendBeacon(
        custom.endpoint,
        JSON.stringify({ event: name, props, url: location.href, ts: Date.now() })
      );
    }
  }
  // Cloudflare Web Analytics tracks page views automatically.
  // Custom events are tracked via URL params or Cloudflare dashboard filters.
}

export function trackToolUse(toolName: string, action: string, props?: EventProps) {
  trackEvent("tool_use", { tool: toolName, action, ...props });
}
