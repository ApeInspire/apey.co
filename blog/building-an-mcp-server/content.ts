export const meta = {
  title: "I Built an MCP Server: From Protocol to Production",
  description:
    "MCP is the fastest-growing AI dev skill in 2026. I spent two weeks building a developer-context MCP server for Claude Code. Here's the architecture, technical decisions, and what I learned along the way.",
  date: "2026-06-10",
  category: "ai-practice" as const,
  tags: ["mcp", "claude-code", "ai-development", "typescript", "open-source"],
  lang: "en" as const,
};

export const sections = [
  {
    type: "heading" as const,
    content: "Why Build an MCP Server",
  },
  {
    type: "paragraph" as const,
    content:
      "MCP — the Model Context Protocol — is Anthropic's open standard for connecting AI tools like Claude Code to external tools and data. Think of it as giving AI hands. Claude has a brain, but without MCP it can't touch your filesystem, your database, or your project. MCP gives it tools to reach out.",
  },
  {
    type: "paragraph" as const,
    content:
      "In 2026, demand for MCP developers surged 938%. Claude Code has become the #1 daily dev tool since late 2025, and some companies now list 'Claude Code experience' as non-negotiable on AI engineer job postings. But saying 'I use Claude Code every day' only proves you're a user. Showing someone 'I built and published an MCP server' — that proves you're an engineer.",
  },
  {
    type: "paragraph" as const,
    content:
      "Most MCP servers wrap external APIs — weather, maps, databases. I built something different: a project-context tool for Claude Code itself. Not for reaching the internet — for understanding the project it's working on.",
  },

  {
    type: "heading" as const,
    content: "Designing the Four Tools",
  },
  {
    type: "paragraph" as const,
    content:
      "When you develop with Claude Code, there's a recurring pattern: the AI needs to orient itself before it can be useful. It doesn't know the project structure, recent changes, or what's in a particular file. It has to explore — ls, git log, cat — one command at a time. Slow and token-expensive.",
  },
  {
    type: "paragraph" as const,
    content:
      "My goal: let the AI get with a single tool call what would otherwise take 5–10 shell commands. Four tools emerged:",
  },
  {
    type: "list" as const,
    items: [
      { strong: "get_project_structure — ", text: "Directory tree. For understanding layout." },
      { strong: "get_git_context — ", text: "Branch, recent commits, working tree status. For understanding state." },
      { strong: "find_files — ", text: "Glob-based file search. For locating files." },
      { strong: "get_file_summary — ", text: "Metadata, imports, exports, and preview. For quick scanning." },
    ],
  },
  {
    type: "paragraph" as const,
    content:
      "These four cover the cognitive loop: where am I → what's happening → find it → scan it. No more, no less. Every tool has strict output limits — max tree depth 3, max search results 50, max preview lines 20. Not to cripple functionality — to prevent token explosion. Too much context is more dangerous than too little.",
  },

  {
    type: "heading" as const,
    content: "Tech Choices: Why TypeScript, Why STDIO",
  },
  {
    type: "paragraph" as const,
    content:
      "TypeScript. The official MCP TypeScript SDK has the best support, and the AI industry's language stack is converging on TS. Zod for parameter validation — standard practice in the MCP ecosystem. Define tool parameters as Zod schemas and the SDK handles validation and type inference automatically.",
  },
  {
    type: "paragraph" as const,
    content:
      "Transport: STDIO over HTTP. Practical reason: this MCP server is for local Claude Code use, not a public API. STDIO is simplest — no networking, no auth, no port conflicts. Claude Code spawns a child process at startup and communicates through stdin/stdout. Deployment is a single npx command.",
  },
  {
    type: "paragraph" as const,
    content:
      "But I kept the architecture flexible. Tool handlers and MCP registration are decoupled — each tool lives in its own file with zero MCP protocol awareness. If I need HTTP transport later, only the entry point changes. Every tool handler stays the same.",
  },

  {
    type: "heading" as const,
    content: "Working With the MCP Protocol",
  },
  {
    type: "paragraph" as const,
    content:
      "Three things that work well, and one rough edge.",
  },
  {
    type: "paragraph" as const,
    content:
      "The good. First, Zod schemas are the tool contract. Define input types and descriptions, and the SDK auto-generates JSON Schema for the AI. No guesswork about parameter formats. Second, the MCP Inspector is genuinely useful — one command opens a web UI where you can call tools manually, inspect responses, and debug parameters. Much faster than debugging against a terminal. Third, the protocol layer is thin. Two core methods: tools/list and tools/call. No complex state machines.",
  },
  {
    type: "paragraph" as const,
    content:
      "The rough edge: SDK version incompatibility. The `server.tool()` API signature changed between 1.24 and 1.26. Normal for a fast-moving protocol, but it means your code may need adaptation in six months. The saving grace: the codebase is small, so the adaptation cost is low.",
  },

  {
    type: "heading" as const,
    content: "Three Key Engineering Decisions",
  },
  {
    type: "heading" as const,
    content: "1. Read-Only",
  },
  {
    type: "paragraph" as const,
    content:
      "All four tools are read-only — no file modification, no command execution, no network calls. This means one thing: users can run this in any project without worrying about side effects. For open-source tools, 'you can trust me' matters more than 'I can do many things.'",
  },
  {
    type: "heading" as const,
    content: "2. Graceful Degradation",
  },
  {
    type: "paragraph" as const,
    content:
      "Call get_git_context outside a git repo? You get a clear message, not a crash. File doesn't exist? Returns null. Repo with no commits? Empty commit list. Every failure mode has a defined degradation path. This isn't defensive programming — it's the baseline expectation for a tool. Users shouldn't be surprised by tool behavior.",
  },
  {
    type: "heading" as const,
    content: "3. Respect .gitignore",
  },
  {
    type: "paragraph" as const,
    content:
      "Directory traversal and file search read the project's .gitignore by default. You've already defined what counts as noise in your project — the tool should respect that definition. DEFAULT_IGNORE covers the usual suspects (node_modules, .git, dist, build), and .gitignore adds project-specific patterns. Two-layer filtering.",
  },

  {
    type: "heading" as const,
    content: "The Glob Matching Bug",
  },
  {
    type: "paragraph" as const,
    content:
      "The find_files tool supports glob pattern search. While implementing glob-to-regex conversion, I hit a classic problem: the difference between `**/` and `**`.",
  },
  {
    type: "paragraph" as const,
    content:
      "`src/**/*.ts` should match both src/index.ts (zero directory levels) and src/utils/helper.ts (one level). But if you naively map `**/` to `.*/`, the `/` between src/ and *.ts becomes mandatory, and src/index.ts gets skipped.",
  },
  {
    type: "paragraph" as const,
    content:
      "The fix: map `**/` to `(.*/)?` — the intermediate path segment is optional. `**` (not before a slash) maps to `.*`. The bug was caught by tests — findFiles('src/**/*.ts') only returned subdirectory files, missing root-level matches. Without tests, this bug would have lurked for a long time.",
  },

  {
    type: "heading" as const,
    content: "Testing: Filesystem Fixture Isolation",
  },
  {
    type: "paragraph" as const,
    content:
      "Most of this project's logic touches the filesystem and git. Can't mock that. My approach: each test suite creates a temporary filesystem fixture in setup — real directories, real .ts files, simulated node_modules and .git directories — and tears it down afterward.",
  },
  {
    type: "paragraph" as const,
    content:
      "Watch out: Vitest runs test files in parallel by default. If multiple test files share the same fixture directory, setup and teardown race. The fix is trivial — give each test suite a different fixture directory name. One line change.",
  },
  {
    type: "paragraph" as const,
    content:
      "Final coverage: 21 tests across 4 suites. Directory structure validation, hidden file filtering, git repo detection, empty commit history handling, glob pattern matching, import/export extraction, and edge cases for missing files and directories.",
  },

  {
    type: "heading" as const,
    content: "By the Numbers",
  },
  {
    type: "list" as const,
    items: [
      { strong: "GitHub: ", text: "github.com/ApeInspire/devcontext-mcp" },
      { strong: "npm: ", text: "npmjs.com/package/@apeinspire/devcontext-mcp" },
      { strong: "Language: ", text: "TypeScript, ES2022, Node 16+" },
      { strong: "Dependencies: ", text: "Only @modelcontextprotocol/sdk and zod" },
      { strong: "Tests: ", text: "21 tests, 4 suites, Vitest" },
      { strong: "Time: ", text: "~8 hours from zero to working, ~2 hours for tests" },
    ],
  },
  {
    type: "paragraph" as const,
    content:
      "Install: npx -y @apeinspire/devcontext-mcp, or npm install -g @apeinspire/devcontext-mcp. Source: github.com/ApeInspire/devcontext-mcp.",
  },

  {
    type: "heading" as const,
    content: "This Is More Than a Tool",
  },
  {
    type: "paragraph" as const,
    content:
      "An MCP server is just four pieces of code. But building it, testing it, and publishing it to npm — that act itself is a signal.",
  },
  {
    type: "paragraph" as const,
    content:
      "The hiring logic in the 2026 AI industry has shifted. Interviewers don't want to hear 'I understand AI' — everyone says that. They want to see your GitHub, your npm packages, your technical write-ups. They want proof you've actually done something. Publishing one MCP server is worth more than writing ten 'AI industry insight' articles.",
  },
  {
    type: "paragraph" as const,
    content:
      "And this article isn't just content. It's documentation for the MCP server, an architecture record, and a publicly verifiable node in my AI learning trajectory. Open-source code + technical breakdown = unfakeable proof of capability. That's why apey.co exists — not to produce content, but to produce evidence.",
  },
];
