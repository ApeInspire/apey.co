export interface MvpItem {
  title: string;
  slug: string;
  description: string;
  status: "idea" | "building" | "live" | "archived";
  date: string;
  tags: string[];
}

export const MVPS: MvpItem[] = [
  {
    title: "First Product",
    slug: "first-product",
    description: "An MVP born from blog analysis — a minimal, usable product.",
    status: "building",
    date: "2026-06-07",
    tags: ["mvp", "experiment"],
  },
];
