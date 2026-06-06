import type { Tool } from "./constants";

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <a
      href={`/tools/${tool.slug}/`}
      className="block p-6 border border-border rounded-lg hover:border-primary hover:shadow-md transition-all"
    >
      <h3 className="text-lg font-semibold mb-2">{tool.name}</h3>
      <p className="text-sm text-text-secondary">{tool.description}</p>
    </a>
  );
}
