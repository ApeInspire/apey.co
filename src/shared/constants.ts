export interface Tool {
  name: string;
  slug: string;
  description: string;
  icon: string;
  keywords: string[];
}

export const TOOLS: Tool[] = [
  {
    name: "AI Prompt Optimizer",
    slug: "prompt-optimizer",
    description: "Describe what you want and get back a structured, executable System Prompt.",
    icon: "sparkles",
    keywords: ["prompt", "AI", "system prompt", "prompt engineering", "optimizer"],
  },
];

export const SITE_NAME = "apey.co";
export const SITE_DESCRIPTION = "To know to act";

export const SITE_KEYWORDS = [
  "AI",
  "technology",
  "industry",
  "products",
  "development",
  "systems",
  "engineering",
  "impact",
];

export const SITE_KEYWORDS_ZH = [
  "AI",
  "科技",
  "行业",
  "产品",
  "开发",
  "系统",
  "工程",
  "影响",
];
