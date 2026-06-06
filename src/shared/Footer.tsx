import { SITE_NAME } from "./constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="max-w-5xl mx-auto px-4 py-6 text-center text-sm text-text-secondary">
        &copy; {new Date().getFullYear()} {SITE_NAME} &mdash; Tools run entirely in your browser.
      </div>
    </footer>
  );
}
