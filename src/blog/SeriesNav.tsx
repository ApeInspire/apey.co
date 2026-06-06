import type { BlogPostMeta } from "./blogConfig";

interface SeriesNavProps {
  series: string;
  currentOrder: number;
  allPosts: BlogPostMeta[];
}

export function SeriesNav({ series, currentOrder, allPosts }: SeriesNavProps) {
  const seriesPosts = allPosts
    .filter((p) => p.series === series)
    .sort((a, b) => (a.seriesOrder || 0) - (b.seriesOrder || 0));

  if (seriesPosts.length <= 1) return null;

  const prev = seriesPosts.find((p) => p.seriesOrder === currentOrder - 1);
  const next = seriesPosts.find((p) => p.seriesOrder === currentOrder + 1);

  return (
    <div className="py-4 border-t border-border">
      <h3 className="text-sm font-semibold text-text-secondary mb-2">{series}</h3>
      <div className="flex justify-between text-sm">
        {prev ? (
          <a href={`/blog/${prev.slug}/`} className="text-primary hover:underline">
            &larr; {prev.title}
          </a>
        ) : (
          <span />
        )}
        {next ? (
          <a href={`/blog/${next.slug}/`} className="text-primary hover:underline">
            {next.title} &rarr;
          </a>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}
