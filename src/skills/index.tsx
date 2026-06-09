import { createRoot } from "react-dom/client";
import { SkillsLayout } from "./SkillsLayout";
import { initAnalytics } from "../shared/analytics";
import { SKILLS, CATEGORIES } from "./skillsConfig";
import type { SkillCategory } from "./skillsConfig";
import type { Lang } from "../i18n";
import "../styles/global.css";

initAnalytics();

function detectLang(): Lang {
  return window.location.pathname.startsWith("/zh/") ? "zh" : "en";
}

const T = {
  title: { en: "Skills", zh: "技能" },
  description: {
    en: "Claude Code skills — reusable AI capabilities. Install them in your project and Claude learns new workflows.",
    zh: "Claude Code 技能集 — 可复用的 AI 能力。安装到项目后，Claude 即可学习新的工作流。",
  },
};

function SkillsIndex() {
  const lang = detectLang();
  const t = (field: { en: string; zh: string }) => field[lang];
  const prefix = lang === "zh" ? "/zh/skills" : "/skills";

  const grouped = new Map<SkillCategory, typeof SKILLS>();
  for (const skill of SKILLS) {
    const list = grouped.get(skill.category) || [];
    list.push(skill);
    grouped.set(skill.category, list);
  }

  return (
    <SkillsLayout lang={lang}>
      <h1 className="text-xl font-bold mb-2">{t(T.title)}</h1>
      <p className="text-sm text-text-secondary mb-8">{t(T.description)}</p>

      {Array.from(grouped.entries()).map(([category, skills]) => {
        const cat = CATEGORIES[category];
        const categoryLabel = lang === "zh" ? cat.zh : cat.en;
        return (
          <section key={category} className="mb-8">
            <h2 className="text-base font-semibold mb-1">{categoryLabel}</h2>
            <p className="text-xs text-text-secondary mb-3">{cat.description}</p>
            <div className="space-y-3">
              {skills.map((skill) => (
                <a
                  key={skill.slug}
                  href={`${prefix}/${skill.slug}/`}
                  className="block p-4 border border-border rounded-lg hover:border-primary transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 text-xs bg-bg-secondary rounded">{categoryLabel}</span>
                    <span className="text-sm font-semibold">{skill.name}</span>
                  </div>
                  <p className="text-xs text-text-secondary">{skill.description}</p>
                </a>
              ))}
            </div>
          </section>
        );
      })}
    </SkillsLayout>
  );
}

createRoot(document.getElementById("root")!).render(<SkillsIndex />);
