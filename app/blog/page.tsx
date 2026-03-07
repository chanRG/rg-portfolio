import Link from "next/link";
import Image from "next/image";
import { formatDate, getBlogPosts } from "app/lib/posts";
import { InView } from "../components/in-view";

export const metadata = {
  title: "Adventures",
  description: "Travel adventures and experiences by Roger Gonzalez Sedano",
};

export default function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <section>
      <InView
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        viewOptions={{ amount: 0.3 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h1
          className="mb-12 text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Adventures
        </h1>
      </InView>
      <div>
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post, index) => (
            <InView
              key={post.slug}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              viewOptions={{ amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
            >
              <Link
                className="group block"
                href={`/blog/${post.slug}`}
              >
                <article className="border-b border-[var(--border-subtle)] py-8 first:pt-0 last:border-b-0 hover:border-[var(--accent)] transition-colors duration-300 flex flex-col md:flex-row gap-6">
                  {/* Cover image */}
                  <div className="relative w-full md:w-64 h-48 md:h-auto overflow-hidden flex-shrink-0">
                    {post.metadata.image ? (
                      <Image
                        src={post.metadata.image}
                        alt={post.metadata.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-[var(--bg-elevated)] flex items-center justify-center">
                        <div className="text-[var(--accent)] text-4xl font-bold opacity-50">
                          {post.metadata.title.charAt(0)}
                        </div>
                      </div>
                    )}
                    <div className="absolute top-3 right-3 bg-[var(--accent)] text-[var(--bg-primary)] text-xs font-mono px-2 py-1">
                      {formatDate(post.metadata.publishedAt, false)}
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h2
                        className="text-xl font-semibold text-[var(--text-primary)] mb-3 line-clamp-2 group-hover:text-[var(--accent)] transition-colors"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {post.metadata.title}
                      </h2>

                      {post.metadata.summary && (
                        <p className="text-sm text-[var(--text-secondary)] line-clamp-3 mb-4">
                          {post.metadata.summary}
                        </p>
                      )}
                    </div>

                    {post.metadata.tags && (
                      <div className="flex flex-wrap gap-2">
                        {post.metadata.tags.split(", ").slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs font-mono text-[var(--text-tertiary)] border border-[var(--border-subtle)] px-2 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              </Link>
            </InView>
          ))}
      </div>
    </section>
  );
}
