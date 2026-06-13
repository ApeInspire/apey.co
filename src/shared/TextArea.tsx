import type { ChangeEvent } from "react";

interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  readOnly?: boolean;
  rows?: number;
  label?: string;
}

export function TextArea({
  value,
  onChange,
  placeholder = "",
  readOnly = false,
  rows = 8,
  label,
}: TextAreaProps) {
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-text mb-2">
          {label}
        </label>
      )}
      <textarea
        value={value}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          onChange(e.target.value)
        }
        placeholder={placeholder}
        readOnly={readOnly}
        rows={rows}
        className="w-full px-3 py-2 border border-border rounded-lg bg-bg text-text text-sm
                   placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20
                   focus:border-primary resize-vertical"
      />
    </div>
  );
}
