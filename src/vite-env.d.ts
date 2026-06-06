/// <reference types="vite/client" />

interface Window {
  dataLayer?: unknown[];
  plausible?: (...args: unknown[]) => void;
  adsbygoogle?: unknown[];
}
