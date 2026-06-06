export type AdProvider = "adsense" | "ethicalads" | "carbon" | "placeholder";

export interface AdConfig {
  provider: AdProvider;
  enabled: boolean;
  adsense?: {
    client: string;
    slot: string;
  };
  ethicalads?: {
    placement: string;
    prefix: string;
  };
  carbon?: {
    serve: string;
    placement: string;
  };
}

export const AD_CONFIG: AdConfig = {
  provider: "placeholder",
  enabled: false,
  // Uncomment and fill when ready to go live:
  // provider: "adsense",
  // adsense: {
  //   client: "ca-pub-XXXXXXXXXXXXXXXX",
  //   slot: "XXXXXXXXXX",
  // },
};

export const AD_SLOTS = {
  toolBanner: "tool-banner",
  toolSidebar: "tool-sidebar",
  toolFooter: "tool-footer",
} as const;

export type AdSlotId = (typeof AD_SLOTS)[keyof typeof AD_SLOTS];
