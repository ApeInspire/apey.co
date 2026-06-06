export interface Tool {
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export const TOOLS: Tool[] = [
  {
    name: "Paragraph Formatter",
    slug: "paragraph-formatter",
    description: "Format, clean, and transform paragraphs instantly in your browser.",
    icon: "",
  },
];

export const SITE_NAME = "apey.co";
export const SITE_DESCRIPTION = "Free online tools that run entirely in your browser. No uploads, no tracking.";
