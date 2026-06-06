import { Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function Blog() {
  return (
    <section className="py-10 max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight mb-4">blog</h1>
      <hr className="border-slate-200 mb-8" />

      <ul className="space-y-5">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              to={`/blog/${post.slug}`}
              className="group flex items-center justify-between gap-4 transition-transform duration-200 hover:translate-x-1"
            >
              <div className="flex items-center gap-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F4978E] shrink-0 transition-colors duration-200 group-hover:bg-[#6D5AE6]" />
                <span className="text-[#2D2D2D] text-lg transition-colors duration-200 group-hover:text-[#6D5AE6]">
                  {post.title}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400 text-sm whitespace-nowrap">{post.date}</span>
                <span className="text-[#6D5AE6] opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm">→</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
