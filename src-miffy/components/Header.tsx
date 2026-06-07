import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  if (location.pathname === "/") return null;

  const linkStyle = (path: string) =>
    `transition-colors ${
      location.pathname === path
        ? "text-[#5C6B2C] font-bold"
        : "text-gray-500 hover:text-[#5C6B2C]"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-[#FDE4EC]/80 backdrop-blur-sm border-b border-pink-200/50">
      <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="w-9 h-9 rounded-full bg-[#5C6B2C] flex items-center justify-center text-white text-xs font-bold hover:scale-105 transition"
        >
          en.
        </Link>

        <div className="flex items-center gap-8 text-sm font-medium">
          <Link to="/" className={linkStyle("/")}>home</Link>
          <Link to="/experience" className={linkStyle("/experience")}>experience</Link>
          <Link to="/about" className={linkStyle("/about")}>about</Link>
          <Link to="/projects" className={linkStyle("/projects")}>projects</Link>
          <Link to="/blog" className={linkStyle("/blog")}>blog</Link>

          <a
            href="/Elizabeth_Nguyen_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-1.5 rounded-full bg-[#5C6B2C] text-white text-xs font-semibold tracking-wide hover:scale-105 transition"
          >
            resume
          </a>
        </div>
      </div>
    </nav>
  );
}
