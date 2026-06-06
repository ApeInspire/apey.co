export type AnalyticsProvider = "cloudflare" | "plausible" | "umami" | "ga4" | "custom" | "disabled";

export interface AnalyticsConfig {
  provider: AnalyticsProvider;
  enabled: boolean;
  requireConsent: boolean;
  cloudflare?: {
    token: string;
  };
  plausible?: {
    domain: string;
    apiHost?: string;
  };
  umami?: {
    websiteId: string;
    src: string;
  };
  ga4?: {
    measurementId: string;
  };
  custom?: {
    endpoint: string;
  };
}

export const ANALYTICS_CONFIG: AnalyticsConfig = {
  provider: "disabled",
  enabled: true,
  requireConsent: false,
  // Cloudflare Pages sites: enable Web Analytics in Cloudflare Dashboard.
  // Beacon is auto-injected. No code changes needed.
  //
  // To use other providers, change "provider" and fill in the config:
  // provider: "plausible",
  // plausible: { domain: "apey.co" },
  //
  // provider: "umami",
  // umami: { websiteId: "YOUR_ID", src: "https://cloud.umami.is/script.js" },
  //
  // provider: "ga4",
  // ga4: { measurementId: "G-XXXXXXXXXX" },
};
