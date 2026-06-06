export interface FormatOptions {
  trimLines: boolean;
  collapseSpaces: boolean;
  removeEmptyLines: boolean;
  normalizeLineEndings: boolean;
}

export const DEFAULT_OPTIONS: FormatOptions = {
  trimLines: true,
  collapseSpaces: true,
  removeEmptyLines: true,
  normalizeLineEndings: true,
};

export function formatParagraphs(input: string, options: FormatOptions): string {
  let result = input;

  if (options.normalizeLineEndings) {
    result = result.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  }

  if (options.trimLines) {
    result = result
      .split("\n")
      .map((line) => line.trim())
      .join("\n");
  }

  if (options.collapseSpaces) {
    result = result.replace(/ {2,}/g, " ");
  }

  if (options.removeEmptyLines) {
    result = result.replace(/\n{3,}/g, "\n\n");
  }

  return result.trim();
}
