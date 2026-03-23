import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const linkStyle = (path: string) =>
    `relative transition-colors ${
      location.pathname === path
        ? "text-[#6D5AE6]"
        : "text-slate-500 hover:text-[#6D5AE6]"
    }`;

  return (
    <nav className="w-full border-b border-slate-100 bg-white/70 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="w-10 h-10 rounded-full bg-[#E0D7FF] flex items-center justify-center font-bold text-[#6D5AE6] hover:scale-105 transition"
        >
          en.
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-8 text-sm font-medium">
          <Link to="/" className={linkStyle("/")}>
            Home
          </Link>

          <Link to="/experience" className={linkStyle("/experience")}>
            Experience
          </Link>

          <Link to="/about" className={linkStyle("/about")}>
            About
          </Link>

          {/* Resume button */}
          <a
            href="/Resume_enguyen.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 rounded-full bg-[#6D5AE6] text-white text-xs font-semibold tracking-wide hover:scale-105 hover:bg-[#5a4bd1] transition"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}