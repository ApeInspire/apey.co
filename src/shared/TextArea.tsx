interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  readOnly?: boolean;
  label?: string;
}

export function TextArea({
  value,
  onChange,
  placeholder,
  readOnly = false,
  label,
}: TextAreaProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-text-secondary">
          {label}
        </label>
      )}
      <textarea
        className="w-full h-48 p-3 border border-border rounded-lg bg-bg text-text text-sm font-mono resize-y focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        readOnly={readOnly}
      />
    </div>
  );
}
