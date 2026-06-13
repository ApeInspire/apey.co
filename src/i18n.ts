export type Lang = "en" | "zh";

export const SUPPORTED_LANGS: Lang[] = ["en", "zh"];
export const DEFAULT_LANG: Lang = "en";

export function getLangFromPath(pathname: string): Lang {
  if (pathname.startsWith("/zh/")) return "zh";
  return "en";
}

export function getAlternateUrl(currentPath: string, targetLang: Lang): string {
  const currentLang = getLangFromPath(currentPath);

  if (currentLang === targetLang) return currentPath;

  if (targetLang === "zh") {
    // en → zh: add /zh prefix
    return `/zh${currentPath}`;
  } else {
    // zh → en: remove /zh prefix
    return currentPath.replace(/^\/zh/, "") || "/";
  }
}

