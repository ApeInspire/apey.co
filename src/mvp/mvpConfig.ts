export interface MvpItem {
  title: string;
  slug: string;
  description: string;
  status: "idea" | "building" | "live" | "archived";
  date: string;
  tags: string[];
}

export const MVPS: MvpItem[] = [
  {
    title: "AI Prompt Optimizer",
    slug: "prompt-optimizer",
    description: "Describe what you want and get back a structured, executable System Prompt — powered by Workers AI.",
    status: "live",
    date: "2026-06-13",
    tags: ["ai", "prompt-engineering", "workers-ai", "mvp"],
  },
];
