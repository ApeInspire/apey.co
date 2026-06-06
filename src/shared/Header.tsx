import { TOOLS, SITE_NAME } from "./constants";

export function Header() {
  return (
    <header className="border-b border-border bg-bg">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="/" className="text-lg font-bold text-text hover:text-primary">
          {SITE_NAME}
        </a>
        <nav className="flex gap-4 text-sm">
          <a href="/blog/" className="text-text-secondary hover:text-text">
            Blog
          </a>
          {TOOLS.map((tool) => (
            <a
              key={tool.slug}
              href={`/tools/${tool.slug}/`}
              className="text-text-secondary hover:text-text"
            >
              {tool.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
