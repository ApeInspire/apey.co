import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CookieConsent } from "./CookieConsent";
import type { Lang } from "../i18n";

interface LayoutProps {
  children: ReactNode;
  lang?: Lang;
}

export function Layout({ children, lang = "en" }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-text font-sans">
      <Header lang={lang} />
      <main className="flex-1">{children}</main>
      <Footer lang={lang} />
      <CookieConsent />
    </div>
  );
}
