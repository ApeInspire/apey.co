import { SITE_NAME } from "./constants";
import type { Lang } from "../i18n";

interface FooterProps {
  lang?: Lang;
}

export function Footer({ lang = "en" }: FooterProps) {
  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 text-center text-sm text-text-secondary">
        &copy; {new Date().getFullYear()} {SITE_NAME} &mdash; {lang === "zh" ? "知行合一" : "To know to act"}
      </div>
    </footer>
  );
}
