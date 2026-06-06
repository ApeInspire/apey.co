import { TOOLS } from "../shared/constants";

interface RelatedToolsProps {
  tools?: string[];
}

export function RelatedTools({ tools }: RelatedToolsProps) {
  if (!tools || tools.length === 0) return null;

  const matched = tools
    .map((slug) => TOOLS.find((t) => t.slug === slug))
    .filter(Boolean);

  if (matched.length === 0) return null;

  return (
    <div className="py-6 border-t border-border">
      <h3 className="text-sm font-semibold text-text-secondary mb-3">Related Tools</h3>
      <div className="flex flex-wrap gap-3">
        {matched.map((tool) => (
          <a
            key={tool!.slug}
            href={`/tools/${tool!.slug}/`}
            className="px-4 py-2 border border-border rounded-lg hover:border-primary hover:shadow-sm transition-all text-sm"
          >
            {tool!.name}
          </a>
        ))}
      </div>
    </div>
  );
}
