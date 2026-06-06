import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { posts } from "../data/posts";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="py-20 max-w-2xl animate-fade-in">
        <p className="text-slate-500">Post not found.</p>
        <Link to="/blog" className="text-[#6D5AE6] text-sm mt-4 inline-block hover:underline">
          ← back to blog
        </Link>
      </section>
    );
  }

  return (
    <section className="py-10 max-w-2xl animate-fade-in">
      <Link
        to="/blog"
        className="text-slate-400 text-sm hover:text-[#6D5AE6] transition-colors duration-200 inline-block mb-10"
      >
        ← back to blog
      </Link>

      <p className="text-slate-400 text-sm mb-2">{post.date}</p>
      <h1 className="text-3xl font-bold tracking-tight mb-10">{post.title}</h1>

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({ children }) => (
            <p className="text-[#2D2D2D] text-lg leading-relaxed mb-5">{children}</p>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl font-bold mt-10 mb-4 text-[#2D2D2D]">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg font-semibold mt-8 mb-3 text-[#2D2D2D]">{children}</h3>
          ),
          ul: ({ children }) => (
            <ul className="list-disc ml-6 mb-5 space-y-1 text-lg text-[#2D2D2D]">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal ml-6 mb-5 space-y-1 text-lg text-[#2D2D2D]">{children}</ol>
          ),
          li: ({ children }) => <li className="leading-relaxed">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-[#E0D7FF] pl-5 italic text-slate-500 my-6">
              {children}
            </blockquote>
          ),
          a: ({ href, children }) => (
            <a href={href} className="text-[#6D5AE6] underline underline-offset-2 hover:opacity-70 transition-opacity">
              {children}
            </a>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-[#2D2D2D]">{children}</strong>
          ),
          em: ({ children }) => <em className="italic">{children}</em>,
          hr: () => <hr className="border-slate-200 my-8" />,
          code: ({ children }) => (
            <code className="bg-slate-100 text-[#6D5AE6] text-sm px-1.5 py-0.5 rounded font-mono">
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre className="bg-slate-50 rounded-xl p-5 overflow-x-auto my-6 text-sm font-mono text-slate-700">
              {children}
            </pre>
          ),
        }}
      >
        {post.content}
      </ReactMarkdown>
    </section>
  );
}
