export const meta = {
  title: "To Know To Act",
  description:
    "Notes from building a site entirely with AI. On programming languages, judgment, taste, and Wang Yangming.",
  date: "2026-06-08",
  category: "ai-practice" as const,
  tags: ["ai-development", "claude-code", "web-development", "future-of-coding"],
  lang: "en" as const,
};

export const sections = [
  {
    type: "heading" as const,
    content: "What the Logo Taught Me",
  },
  {
    type: "paragraph" as const,
    content:
      "The AI gave me five logo options. I rejected every one.",
  },
  {
    type: "paragraph" as const,
    content:
      "A cartoon ape. Too childish. A line-drawing ape. Like an old man. The oracle bone character for 'ape.' Too rigid. One version I couldn't even say what was wrong. It just wasn't right.",
  },
  {
    type: "paragraph" as const,
    content:
      "Technically, none of them had a flaw. Proportions correct. Spacing correct. Geometric relations correct. The AI did nothing wrong. But I knew none of them could represent this site.",
  },
  {
    type: "paragraph" as const,
    content:
      "I found an oracle bone character — 探 (explore). A hand reaching into a cave. I fed it to the AI and had it iterate, round after round, to my direction. The result: white lines on a dark background. Stark. Minimal. It supports two completely different readings — a hand grasping into darkness, or a beam of light entering a cave.",
  },
  {
    type: "paragraph" as const,
    content:
      "I didn't expect two interpretations. Neither did the AI. This taught me something more important than the logo itself: AI can execute to a level you haven't imagined, but only if you tell it what you want first. You provide the direction. Not every layer of the result is something you predicted.",
  },
  {
    type: "diagram" as const,
    caption: "Logo: 探 in oracle bone script style",
  },
  {
    type: "heading" as const,
    content: "I Didn't Write Code",
  },
  {
    type: "paragraph" as const,
    content:
      "Last weekend, I built apey.co with Claude Code. A bilingual blog site, deployed on Cloudflare. I didn't write a single line of code.",
  },
  {
    type: "paragraph" as const,
    content:
      "Three hours. ¥5.85 — that's RMB, not USD. The model was mimo-v2.5-pro on a Lite plan, ¥39 a month. This project used 15% of the monthly allowance.",
  },
  {
    type: "paragraph" as const,
    content:
      "But the numbers aren't the point. The point is what the process confirmed.",
  },
  {
    type: "heading" as const,
    content: "Who Are Languages For",
  },
  {
    type: "paragraph" as const,
    content:
      "We used to think programming languages were for humans. Clean syntax. Good documentation. Active community. Those were the criteria.",
  },
  {
    type: "paragraph" as const,
    content:
      "Not anymore.",
  },
  {
    type: "paragraph" as const,
    content:
      "AI is now the primary producer of code. Humans have moved to the requirements side — you describe what you want, it writes. You point out what's wrong, it fixes. You make judgments, it executes. The act of writing code is no longer in human hands.",
  },
  {
    type: "paragraph" as const,
    content:
      "If that's true, the selection criteria flip: don't pick what humans find comfortable. Pick what AI is most accurate with.",
  },
  {
    type: "paragraph" as const,
    content:
      "Here's how the major languages rank on AI accuracy:",
  },
  {
    type: "list" as const,
    items: [
      { strong: "TypeScript / JavaScript: ", text: "The language AI writes best. Largest public code corpus on GitHub. React, Tailwind, and Node.js are the ecosystems AI knows most intimately. Covers both browser and CLI — currently the only language that spans both AI application surfaces." },
      { strong: "Python: ", text: "Second best. Default for data science and AI toolchains. Rich training data. But zero browser presence, and the CLI ecosystem trails JavaScript. Good for backend and data work." },
      { strong: "Go: ", text: "Middle of the pack. Its hidden advantage is syntactic simplicity — the simpler the grammar, the fewer mistakes AI makes. No browser side. Suited for systems-level work." },
      { strong: "Rust: ", text: "Weak. Thin training data, complex syntax. AI frequently generates code that won't compile. High correction cost. Only worth it when performance and safety guarantees are mandatory." },
      { strong: "Java / C#: ", text: "A curious case. Massive but dated corpus. AI output skews conservative and boilerplate-heavy. Verbosity was never a problem when humans were the readers — but now every extra token is billable. Verbosity has become a cost center." },
    ],
  },
  {
    type: "paragraph" as const,
    content:
      "TypeScript won. Not because it's the best language. Because AI writes it best. Choosing a language is no longer about aesthetics, ecosystems, or hiring. It's a data problem — whichever language has the largest public training corpus wins.",
  },
  {
    type: "heading" as const,
    content: "Product Forms",
  },
  {
    type: "paragraph" as const,
    content:
      "After building this, one thing came into focus: AI products will land in two places. The browser, and the terminal.",
  },
  {
    type: "paragraph" as const,
    content:
      "The browser's value is obvious. The terminal? It's light, fast, needs no UI. Perfect for AI. Think about it — if an AI agent needs to operate your machine, the fastest path isn't opening a web page. It's running a command.",
  },
  {
    type: "paragraph" as const,
    content:
      "TypeScript happens to sit exactly at this intersection. One language, one ecosystem. React pages for the browser, CLI tools for the terminal. No other language does both right now. Not because TypeScript was designed well — just because Node.js dragged JavaScript onto the server. Historical luck.",
  },
  {
    type: "paragraph" as const,
    content:
      "But there's a deeper thesis behind this observation, which I'll save for another piece — the terminal is ultimately for AI. The browser is the last software interface left for humans. If human-AI collaboration converges on two channels, voice and text, then most of what we've accumulated in UX and UI design becomes irrelevant. More on that later.",
  },
  {
    type: "heading" as const,
    content: "Not the Best",
  },
  {
    type: "paragraph" as const,
    content:
      "I compared Vercel and several other platforms. Vercel has the better developer experience — preview deployments, Git integration, edge functions. All smoother.",
  },
  {
    type: "paragraph" as const,
    content:
      "I chose Cloudflare.",
  },
  {
    type: "paragraph" as const,
    content:
      "Not because it's technically superior. Because: (1) everything lives in one console — Pages, Workers, storage, analytics, no stitching across vendors; (2) aside from the $100 domain, everything was free, and I modeled the pricing at scale — it works from zero to mid-scale; (3) the CLI tools integrate well with AI workflows, manual steps are minimal.",
  },
  {
    type: "paragraph" as const,
    content:
      "Same logic as choosing TypeScript: it's not about which technology is better on paper, but which option aligns more tightly with the AI workflow. And when a project has no revenue expectations, zero cost is everything.",
  },
  {
    type: "heading" as const,
    content: "A Name",
  },
  {
    type: "paragraph" as const,
    content:
      "My handle is Ape. As in the hominid.",
  },
  {
    type: "paragraph" as const,
    content:
      "I didn't pick it because I like monkeys. Apes hold two clues to intelligence. The first is language — apes developed language, then abstract thought, then civilization. Today's large language models follow the same path. The second is upright walking. Standing up freed the hands. Freed hands meant tools.",
  },
  {
    type: "paragraph" as const,
    content:
      "The parallel has been in my head for a while. AI got language, so it started to think. AI got tools — Claude Code, Cursor — and now those tools are freeing human hands from code. Language and tools. Same story as the apes walking out of the forest.",
  },
  {
    type: "paragraph" as const,
    content:
      "So the domain had to include ape. From apehub.io to apey.co. Took longer than expected — not just checking availability, but having AI run search tools across combinations, spellings, and TLDs to find the right fit. When the moment came to decide, AI could only list options on a screen. apey.co — short, brandable, .co with a hint of commercial weight without being corporate — that judgment was mine. AI can do the legwork. It doesn't know which name fits. It doesn't know who you are.",
  },
  {
    type: "heading" as const,
    content: "To Know To Act",
  },
  {
    type: "paragraph" as const,
    content:
      "Some of the best moments came from places I hadn't anticipated.",
  },
  {
    type: "paragraph" as const,
    content:
      "I told the AI this site does two things: turn the unknown into the known through thinking and writing, and turn the known into reality through building. It distilled four characters — 知行合一. The unity of knowing and acting.",
  },
  {
    type: "paragraph" as const,
    content:
      "The English phrasing came from a follow-up. My translation, 'To Know Is To Act,' felt slightly off. So I asked: would 'To Know To Act' be better? Its response made me see something I hadn't articulated — dropping 'is' transforms a statement into a cycle. Know, act, know again, act again. One word fewer, and it became more complete.",
  },
  {
    type: "paragraph" as const,
    content:
      "Those four characters belong to Wang Yangming, a Ming-dynasty philosopher and my favorite thinker. His argument was radical for the 16th century: knowing and acting are not two separate steps. They are the same thing. To know without acting is not to know at all. Five hundred years.",
  },
  {
    type: "paragraph" as const,
    content:
      "I thought of Wang Yangming for a reason. Until recently, AI only knew without acting. It could answer questions but couldn't do anything. That has changed. You tell it what you want, it writes the code. It deploys. It searches for domains. The gap between knowing and acting is closing for the first time.",
  },
  {
    type: "paragraph" as const,
    content:
      "Five centuries later, something else is approaching the unity of knowing and acting. How far it still has to go — that's the next question.",
  },
  {
    type: "heading" as const,
    content: "The Onion",
  },
  {
    type: "paragraph" as const,
    content:
      "Working with AI feels like peeling an onion. You offer a vague idea. It returns possibilities. You reject most. It goes deeper on the survivors. You spot new angles. After enough rounds, what was blurry starts to hold its shape.",
  },
  {
    type: "paragraph" as const,
    content:
      "But there's a condition: you need to know whether you want an onion or an apple. AI can't decide what you want. It can only help you figure it out faster. You have to be willing to peel.",
  },
  {
    type: "paragraph" as const,
    content:
      "The AI handled all the technical work — scaffolding, components, responsive design, i18n, SEO, deployment. My job came down to three things: requirements, corrections, judgment. I corrected it often. Sometimes it wrapped simple things in three layers of abstraction. Sometimes it wrote the wrong file path. But point at the problem, and it fixed it immediately.",
  },
  {
    type: "heading" as const,
    content: "What It Cost",
  },
  {
    type: "list" as const,
    items: [
      { strong: "Model:", text: " mimo-v2.5-pro" },
      { strong: "Plan:", text: " Lite, ¥39/month, 4.1B credits" },
      { strong: "Usage:", text: " 615M tokens, 15% of monthly allowance" },
      { strong: "Cost:", text: " ¥5.85" },
      { strong: "Requests:", text: " 1,000+" },
      { strong: "Time:", text: " 3 hours" },
      { strong: "Domain:", text: " $100 (only additional cost)" },
    ],
  },
  {
    type: "heading" as const,
    content: "What's Left",
  },
  {
    type: "paragraph" as const,
    content:
      "The act of writing code is moving from human hands to AI hands. Not later. Now.",
  },
  {
    type: "paragraph" as const,
    content:
      "When code is no longer the output, what does a programmer have left?",
  },
  {
    type: "paragraph" as const,
    content:
      "Three things. Judgment — what to build and what to skip. Taste — knowing when something is right, even if you can't articulate why. Direction — where to point next. These have one thing in common: AI can't do any of them. Not because it isn't smart enough. Because they require you to care. AI doesn't care. It's just running.",
  },
  {
    type: "paragraph" as const,
    content:
      "I'll keep building this site. Not because it will become a remarkable product, but because the act of building is how I figure out what I think. AI writes the code. The direction is mine. The judgments are mine. What qualifies as good — that's mine too.",
  },
  {
    type: "paragraph" as const,
    content:
      "Code can be outsourced. Judgment cannot.",
  },
  {
    type: "heading" as const,
    content: "How This Was Written",
  },
  {
    type: "paragraph" as const,
    content:
      "Some honesty. This article was also written with AI.",
  },
  {
    type: "paragraph" as const,
    content:
      "I tried MiMo first. Xiaomi's model. Writing isn't its strength. Switched to DeepSeek V4 Pro — also RMB-priced — and had it write in Kevin Kelly's style. What you just read is the result.",
  },
  {
    type: "paragraph" as const,
    content:
      "But let me be clear on one thing. The content, the structure, the logic of every section — I dictated that word by word. AI enriched the wording, adjusted the style, checked the grammar. The direction was mine. The judgment was mine. What to include and what to cut — mine.",
  },
  {
    type: "image" as const,
    src: "/cost.png",
    caption: "What this piece actually cost",
  },
];
