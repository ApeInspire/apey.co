interface DiagramProps {
  children: React.ReactNode;
  caption?: string;
}

export function Diagram({ children, caption }: DiagramProps) {
  return (
    <figure className="my-6">
      <div className="flex justify-center overflow-x-auto">
        {children}
      </div>
      {caption && (
        <figcaption className="text-xs text-text-secondary mt-2 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
