import { createRoot } from "react-dom/client";
import { Layout } from "../../shared/Layout";
import { initAnalytics } from "../../shared/analytics";
import { SKILLS, CATEGORIES } from "../../skills/skillsConfig";
import type { SkillCategory } from "../../skills/skillsConfig";
import "../../styles/global.css";

initAnalytics();

function SkillsIndexZh() {
  const grouped = new Map<SkillCategory, typeof SKILLS>();
  for (const skill of SKILLS) {
    const list = grouped.get(skill.category) || [];
    list.push(skill);
    grouped.set(skill.category, list);
  }

  return (
    <Layout>
      <h1 className="text-xl font-bold mb-2">技能</h1>
      <p className="text-sm text-text-secondary mb-8">
        Claude Code 技能集 — 可复用的 AI 能力。安装到项目后，Claude 即可学习新的工作流。
      </p>

      {Array.from(grouped.entries()).map(([category, skills]) => {
        const cat = CATEGORIES[category];
        return (
          <section key={category} className="mb-8">
            <h2 className="text-base font-semibold mb-1">{cat.zh}</h2>
            <p className="text-xs text-text-secondary mb-3">{cat.description}</p>
            <div className="space-y-3">
              {skills.map((skill) => (
                <a
                  key={skill.slug}
                  href={`/zh/skills/${skill.slug}/`}
                  className="block p-4 border border-border rounded-lg hover:border-primary transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 text-xs bg-bg-secondary rounded">{cat.zh}</span>
                    <span className="text-sm font-semibold">{skill.name}</span>
                  </div>
                  <p className="text-xs text-text-secondary">{skill.description}</p>
                </a>
              ))}
            </div>
          </section>
        );
      })}
    </Layout>
  );
}

createRoot(document.getElementById("root")!).render(<SkillsIndexZh />);
