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
}

export type BlogCategory = "ai-practice" | "tool-review" | "industry" | "efficiency";

export const CATEGORIES: Record<BlogCategory, { label: string; description: string }> = {
  "ai-practice": {
    label: "AI Work Practice",
    description: "Real experiences using AI for daily work",
  },
  "tool-review": {
    label: "Tool Reviews",
    description: "Honest reviews of AI and software tools",
  },
  industry: {
    label: "Industry Insights",
    description: "Analysis of the AI tools industry",
  },
  efficiency: {
    label: "Efficiency Tips",
    description: "Tips and tricks for better productivity",
  },
};

export const BLOG_TITLE = "apey.co/blog";
export const BLOG_DESCRIPTION = "AI tools, industry insights, and efficiency tips from a working IT professional.";
