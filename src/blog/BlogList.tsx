import { BlogCard } from "./BlogCard";
import type { BlogPostMeta } from "./blogConfig";

interface BlogListProps {
  posts: BlogPostMeta[];
}

export function BlogList({ posts }: BlogListProps) {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div>
      {sorted.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
