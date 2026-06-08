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
          <a href="/blog/" className="text-text-secondary hover:text-text">
            Blog
          </a>
          <a href={isZh ? "/blog/how-i-built-a-website-with-ai/" : "/zh/blog/how-i-built-a-website-with-ai/"} className="text-text-secondary hover:text-text">
            {isZh ? "English" : "中文"}
          </a>
        </nav>
      </div>
    </header>
  );
}
