import type { Lang } from "../i18n";
import { SITE_NAME } from "./constants";

interface HeaderProps {
  lang?: Lang;
}

export function Header({ lang = "en" }: HeaderProps) {
  const isZh = lang === "zh";
  return (
    <header className="border-b border-border bg-bg">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href={isZh ? "/zh/" : "/"} className="text-lg font-bold text-text hover:text-primary">
          {SITE_NAME}
        </a>
        <nav className="flex gap-4 text-sm items-center">
          <a href={isZh ? "/zh/" : "/"} className="text-text-secondary hover:text-text">
            {isZh ? "见解" : "Insights"}
          </a>
          <a href={isZh ? "/zh/skills/" : "/skills/"} className="text-text-secondary hover:text-text">
            Skills
          </a>
          <a href={isZh ? "/zh/mvp/" : "/mvp/"} className="text-text-secondary hover:text-text">
            MVP
          </a>
          <a href={isZh ? "/" : "/zh/"} className="text-text-secondary hover:text-text">
            {isZh ? "English" : "中文"}
          </a>
        </nav>
      </div>
    </header>
  );
}
