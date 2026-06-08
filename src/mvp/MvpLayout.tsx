import type { ReactNode } from "react";
import { Header } from "../shared/Header";
import { Footer } from "../shared/Footer";

interface MvpLayoutProps {
  children: ReactNode;
}

export function MvpLayout({ children }: MvpLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-text font-sans">
      <Header />
      <main className="flex-1">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
