import { BlogCard } from "./BlogCard";
import { BLOG_TITLE, BLOG_DESCRIPTION, type BlogPostMeta } from "./blogConfig";

interface BlogListProps {
  posts: BlogPostMeta[];
}

export function BlogList({ posts }: BlogListProps) {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">{BLOG_TITLE}</h1>
        <p className="text-text-secondary">{BLOG_DESCRIPTION}</p>
      </div>
      <div className="flex flex-col gap-4">
        {sorted.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
