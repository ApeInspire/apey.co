export interface BlogPostMeta {
  title: string;
  description: string;
  date: string;
  category: BlogCategory;
  tags: string[];
  series?: string;
  seriesOrder?: number;
  relatedTools?: string[];
  author: string;
  slug: string;
  lang?: "en" | "zh";
}

export type BlogCategory = "ai-practice" | "tool-review" | "industry" | "efficiency";

export const CATEGORIES: Record<BlogCategory, { en: string; zh: string }> = {
  "ai-practice": { en: "AI Practice", zh: "AI 实践" },
  "tool-review": { en: "Tool Reviews", zh: "工具评测" },
  industry: { en: "Industry", zh: "行业见解" },
  efficiency: { en: "Efficiency", zh: "效率技巧" },
};
