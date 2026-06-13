import type { BlogPostMeta } from "./blogConfig";
import { CATEGORIES } from "./blogConfig";

interface BlogCardProps {
  post: BlogPostMeta;
}

export function BlogCard({ post }: BlogCardProps) {
  const cat = CATEGORIES[post.category];
  const postLang = post.lang || "en";
  const isZh = postLang === "zh";

  return (
    <a
      href={isZh ? `/zh/blog/${post.slug}/` : `/blog/${post.slug}/`}
      className="group block py-5 border-b border-border last:border-b-0 hover:bg-bg-secondary/50 transition-colors -mx-4 px-4 sm:-mx-6 sm:px-6 rounded-lg"
    >
      <div className="flex items-center gap-2 text-xs text-text-secondary mb-1.5">
        <span>{cat ? (isZh ? cat.zh : cat.en) : post.category}</span>
        <span>·</span>
        <time>{post.date}</time>
        {isZh && (
          <>
            <span>·</span>
            <span className="px-1.5 py-0.5 bg-bg-secondary rounded text-[10px]">中文</span>
          </>
        )}
      </div>
      <h3 className="text-base font-medium group-hover:text-primary transition-colors leading-relaxed">
        {post.title}
      </h3>
      <p className="text-sm text-text-secondary mt-1 leading-relaxed line-clamp-2">
        {post.description}
      </p>
    </a>
  );
}
