import type { BlogPostMeta } from "./blogConfig";
import { CATEGORIES } from "./blogConfig";

interface BlogCardProps {
  post: BlogPostMeta;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <a
      href={`/blog/${post.slug}/`}
      className="block p-6 border border-border rounded-lg hover:border-primary hover:shadow-md transition-all"
    >
      <div className="flex items-center gap-2 mb-2 text-xs text-text-secondary">
        <span className="px-2 py-0.5 bg-bg-secondary rounded">
          {CATEGORIES[post.category]?.label || post.category}
        </span>
        <span>{post.date}</span>
      </div>
      <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
      <p className="text-sm text-text-secondary">{post.description}</p>
      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-3">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 border border-border rounded">
              {tag}
            </span>
          ))}
        </div>
      )}
    </a>
  );
}
