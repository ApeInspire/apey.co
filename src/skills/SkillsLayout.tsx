import type { ReactNode } from "react";
import { Header } from "../shared/Header";
import { Footer } from "../shared/Footer";
import type { Lang } from "../i18n";

interface SkillsLayoutProps {
  children: ReactNode;
  lang?: Lang;
}

export function SkillsLayout({ children, lang = "en" }: SkillsLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-text font-sans">
      <Header lang={lang} />
      <main className="flex-1">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {children}
        </div>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
