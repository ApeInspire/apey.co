import type { ReactNode } from "react";
import { Header } from "../shared/Header";
import { Footer } from "../shared/Footer";
import { CookieConsent } from "../shared/CookieConsent";

interface BlogLayoutProps {
  children: ReactNode;
}

export function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-text font-sans">
      <Header />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 py-8">
          {children}
        </div>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
