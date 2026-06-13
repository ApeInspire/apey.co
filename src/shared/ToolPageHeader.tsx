interface ToolPageHeaderProps {
  title: string;
  description: string;
}

export function ToolPageHeader({ title, description }: ToolPageHeaderProps) {
  return (
    <div className="mb-6">
      <h1 className="text-xl font-bold mb-2">{title}</h1>
      <p className="text-text-secondary text-sm">{description}</p>
    </div>
  );
}
