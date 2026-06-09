export const meta = {
  title: "Claude Code Skill: From First Principles",
  description:
    "Claude Code Skill is not a plug-in. It is a prompt fragment loaded at runtime. Here is the five-layer architecture that makes it work.",
  date: "2026-06-09",
  category: "ai-practice" as const,
  tags: ["claude-code", "skill", "ai-architecture", "prompt-engineering"],
  lang: "en" as const,
};

export const sections = [
  {
    type: "heading" as const,
    content: "The Conclusion First",
  },
  {
    type: "paragraph" as const,
    content:
      "Claude Code Skill is a loadable Agent definition file written in natural language and interpreted by an LLM at runtime. It replaces plug-in architecture with prompt injection — no sandbox, no process, no binary. Just a Markdown file and a slash command.",
  },
  {
    type: "paragraph" as const,
    content:
      "Sounds simple. But the simplicity comes from solving two architectural constraints simultaneously. To see why it works, we go layer by layer.",
  },
  {
    type: "heading" as const,
    content: "Layer 1: Claude Code Is an Agent Loop",
  },
  {
    type: "paragraph" as const,
    content:
      "Claude Code is not ChatGPT in a terminal. It is an Agent Loop:",
  },
  {
    type: "list" as const,
    items: [
      { strong: "Observe.", text: " Read the output of the last action." },
      { strong: "Think.", text: " Decide what to do next." },
      { strong: "Act.", text: " Call a tool — read a file, write code, run a command." },
      { strong: "Repeat.", text: " Feed the result back into the loop." },
    ],
  },
  {
    type: "paragraph" as const,
    content:
      "This loop is driven by a System Prompt — the \"operating system\" that defines Claude's behavior boundaries, tool-use rules, output format, and safety constraints. Everything Claude Code does flows from this prompt.",
  },
  {
    type: "paragraph" as const,
    content:
      "The question then becomes: how do you extend a prompt-driven system?",
  },
  {
    type: "heading" as const,
    content: "Layer 2: Skill Is Runtime Prompt Patching",
  },
  {
    type: "paragraph" as const,
    content:
      "Traditional software extension: write code → compile → load shared library → new functionality available.",
  },
  {
    type: "paragraph" as const,
    content:
      "Prompt-driven system extension: write a Markdown file → Claude Code scans it at startup → when user types /command, inject it into the conversation context.",
  },
  {
    type: "paragraph" as const,
    content:
      "The mechanism is a single runtime operation:",
  },
  {
    type: "list" as const,
    items: [
      { strong: "", text: "base_system_prompt + skill_body → effective_system_prompt" },
    ],
  },
  {
    type: "paragraph" as const,
    content:
      "This concatenation happens at the moment of trigger — not at startup, not at install time. The skill body sits on disk as dead text until a user invokes it. Then it becomes part of the active prompt.",
  },
  {
    type: "paragraph" as const,
    content:
      "This design resolves a fundamental tension: the system prompt must remain stable because changing it risks breaking global behavior. But you need to extend it because new use cases demand new capabilities.",
  },
  {
    type: "paragraph" as const,
    content:
      "Skill splits these two concerns. The base system prompt stays untouched — preserving the Agent's core behavior. Skills inject on demand — temporarily reshaping behavior for a specific task. Stable core, pluggable extensions. Same principle as a microkernel, except the modules are natural language instructions, not binaries.",
  },
  {
    type: "heading" as const,
    content: "Layer 3: The Runtime and the Definition",
  },
  {
    type: "paragraph" as const,
    content:
      "Claude Code and Skill have a clean division of labor:",
  },
  {
    type: "list" as const,
    items: [
      { strong: "Claude Code provides:", text: " the execution loop, the tool set (read/write/search/run), conversation context management. These are the runtime." },
      { strong: "Skill provides:", text: " domain instructions, structured workflow, output constraints. These are the Agent definition." },
    ],
  },
  {
    type: "paragraph" as const,
    content:
      "A Skill doesn't need to implement tool calling, state management, or error handling. It inherits all of that from the runtime. It only needs to specify what the Agent should do differently in this context.",
  },
  {
    type: "paragraph" as const,
    content:
      "Take publish-article as an example. Its five-step workflow — Gather, Outline, Write, Polish, Publish — spans reading files, generating text, and writing to disk. Three different tools. But the Skill never calls them. It describes the workflow. Claude Code's Agent Loop executes it, calling tools as needed.",
  },
  {
    type: "paragraph" as const,
    content:
      "General-purpose Agent runtime + loadable domain-specific Agent definitions = a composable Agent system. Skill is what a browser extension is to a browser — the browser provides rendering, networking, DOM. The extension provides domain logic.",
  },
  {
    type: "heading" as const,
    content: "Layer 4: Why This Design Is First-Principles Correct",
  },
  {
    type: "paragraph" as const,
    content:
      "Every LLM Agent system faces two hard constraints:",
  },
  {
    type: "list" as const,
    items: [
      { strong: "Constraint 1 — Context window is finite.", text: " You cannot keep all Skills permanently loaded in the system prompt. Each token spent on unused Skills is a token taken from reasoning and conversation. Skills must load on demand. This is the space constraint." },
      { strong: "Constraint 2 — Prompt stability determines behavior predictability.", text: " Every edit to the system prompt risks breaking global Agent behavior. Extensions must not directly modify the core. This is the safety constraint." },
    ],
  },
  {
    type: "paragraph" as const,
    content:
      "Skill solves both simultaneously.",
  },
  {
    type: "paragraph" as const,
    content:
      "On-demand injection means a Skill only enters context when invoked. Install 50 Skills — the context cost is zero until you use one. This solves the space constraint.",
  },
  {
    type: "paragraph" as const,
    content:
      "Never modifying the core system prompt means the Agent's baseline behavior is always predictable. A broken Skill only affects its own invocation — it cannot crash the Agent. This solves the safety constraint.",
  },
  {
    type: "paragraph" as const,
    content:
      "The design is correct not because it is clever, but because it acknowledges and works within the fundamental constraints of the medium. It doesn't fight the context window — it obeys it. It doesn't bypass the prompt — it composes with it.",
  },
  {
    type: "heading" as const,
    content: "Layer 5: Instructions Are Code Now",
  },
  {
    type: "paragraph" as const,
    content:
      "Here is the deepest layer. A SKILL.md file is a Markdown document. No import statements. No type annotations. No error handling. How does it execute?",
  },
  {
    type: "paragraph" as const,
    content:
      "Because in the LLM era, natural language instructions are code — and the LLM is the interpreter.",
  },
  {
    type: "list" as const,
    items: [
      { strong: "Traditional:", text: " code (text) → compiler → machine instructions → CPU executes." },
      { strong: "Skill:", text: " prompt (text) → context injection → LLM interprets → Agent executes." },
    ],
  },
  {
    type: "paragraph" as const,
    content:
      "The compiler is replaced by semantic understanding. The CPU is replaced by the Agent Loop. The instruction set is not ARM or x86 — it is the tool catalog Claude Code exposes.",
  },
  {
    type: "paragraph" as const,
    content:
      "A Skill describes intent — what to do, in what order, under what constraints. The LLM translates intent into tool calls. Instructions operate at the intent layer. Tools operate at the execution layer. The LLM bridges them.",
  },
  {
    type: "paragraph" as const,
    content:
      "This is why Skill files need no code. They are instructions for an interpreter that already understands natural language. Adding code would be redundant — it would add a second execution path alongside the one that already works.",
  },
  {
    type: "heading" as const,
    content: "One Caveat",
  },
  {
    type: "paragraph" as const,
    content:
      "A Skill is only as precise as the LLM's understanding of its instructions. There is no compiler to catch errors. No type system to reject contradictions. A poorly written Skill produces poor Agent behavior, and the failure mode is silent — the Agent just does the wrong thing. The quality ceiling is the clarity of the prompt.",
  },
  {
    type: "heading" as const,
    content: "The Takeaway",
  },
  {
    type: "paragraph" as const,
    content:
      "Claude Code Skill is not a feature. It is the correct architectural answer to the question \"how do you extend a prompt-driven system?\" It works because it doesn't fight the medium — it uses the LLM's own capabilities as infrastructure. Prompt is program. Context is memory. Injection is loading. The LLM is the interpreter. The rest is just Markdown.",
  },
];
