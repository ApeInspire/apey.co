interface ToolPageHeaderProps {
  title: string;
  description: string;
}

export function ToolPageHeader({ title, description }: ToolPageHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p className="text-text-secondary">{description}</p>
    </div>
  );
}
