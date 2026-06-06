import { useState, useCallback } from "react";
import { ToolPageHeader } from "../../shared/ToolPageHeader";
import { TextArea } from "../../shared/TextArea";
import { CopyButton } from "../../shared/CopyButton";
import { AdSlot } from "../../shared/AdSlot";
import { AD_SLOTS } from "../../shared/adConfig";
import { trackToolUse } from "../../shared/analytics";
import { formatParagraphs, DEFAULT_OPTIONS, type FormatOptions } from "./helpers";

const TOOL = "paragraph-formatter";

export function ParagraphFormatter() {
  const [input, setInput] = useState("");
  const [options, setOptions] = useState<FormatOptions>(DEFAULT_OPTIONS);

  const output = input ? formatParagraphs(input, options) : "";

  const handleInput = useCallback((value: string) => {
    setInput(value);
    if (value.length > 0 && value.length < 100) {
      trackToolUse(TOOL, "input", { length: value.length });
    }
  }, []);

  const handleCopy = useCallback(() => {
    trackToolUse(TOOL, "copy", { outputLength: output.length });
  }, [output.length]);

  const toggleOption = (key: keyof FormatOptions) => {
    setOptions((prev) => {
      const next = !prev[key];
      trackToolUse(TOOL, "option", { option: key, value: String(next) });
      return { ...prev, [key]: next };
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <ToolPageHeader
        title="Paragraph Formatter"
        description="Format, clean, and transform paragraphs instantly in your browser. No upload needed."
      />

      <AdSlot slot={AD_SLOTS.toolBanner} className="mb-4" />

      <div className="flex flex-wrap gap-3 mb-6">
        {(Object.keys(DEFAULT_OPTIONS) as (keyof FormatOptions)[]).map((key) => (
          <label key={key} className="flex items-center gap-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={options[key]}
              onChange={() => toggleOption(key)}
              className="rounded border-border"
            />
            {formatLabel(key)}
          </label>
        ))}
      </div>

      <div className="flex gap-6">
        <div className="flex-1 min-w-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <TextArea
              value={input}
              onChange={handleInput}
              placeholder="Paste your text here..."
              label="Input"
            />
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-text-secondary">Output</span>
                {output && <CopyButton text={output} onCopy={handleCopy} />}
              </div>
              <textarea
                className="w-full h-48 p-3 border border-border rounded-lg bg-bg-secondary text-text text-sm font-mono resize-y"
                value={output}
                readOnly
                placeholder="Formatted text will appear here..."
              />
            </div>
          </div>
        </div>

        <aside className="hidden lg:block flex-shrink-0">
          <AdSlot slot={AD_SLOTS.toolSidebar} />
        </aside>
      </div>

      <AdSlot slot={AD_SLOTS.toolFooter} className="mt-8" />
    </div>
  );
}

function formatLabel(key: keyof FormatOptions): string {
  const labels: Record<keyof FormatOptions, string> = {
    trimLines: "Trim lines",
    collapseSpaces: "Collapse spaces",
    removeEmptyLines: "Remove empty lines",
    normalizeLineEndings: "Normalize line endings",
  };
  return labels[key];
}
