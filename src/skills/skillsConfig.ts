export type SkillCategory = "development" | "writing" | "workflow" | "learning";

export const CATEGORIES: Record<SkillCategory, { en: string; zh: string; description: string }> = {
  development: {
    en: "Development",
    zh: "开发",
    description: "Coding, testing, deployment, and code review skills.",
  },
  writing: {
    en: "Writing",
    zh: "写作",
    description: "Article generation, documentation, and content skills.",
  },
  workflow: {
    en: "Workflow",
    zh: "工作流",
    description: "Automation, hooks, and process orchestration skills.",
  },
  learning: {
    en: "Learning",
    zh: "学习",
    description: "Tutorial, explanation, and knowledge-building skills.",
  },
};

export interface SkillMeta {
  slug: string;
  name: string;
  description: string;
  category: SkillCategory;
  tags: string[];
  author: string;
  date: string;
  sourceUrl: string;
  installPath: string;
}

export const SKILLS: SkillMeta[] = [
  {
    slug: "publish-article",
    name: "/publish-article",
    description: "Transform an AI conversation into a structured article ready for apey.co publication.",
    category: "writing",
    tags: ["writing", "blog", "conversation"],
    author: "Ape",
    date: "2026-06-09",
    sourceUrl: "https://github.com/ApeInspire/Scout/tree/master/.claude/skills/publish-article",
    installPath: ".claude/skills/publish-article/SKILL.md",
  },
];
