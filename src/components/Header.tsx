import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="flex justify-between items-center mb-12 h-20 px-8">
      <div className="w-20 h-20 rounded-full bg-[#E0D7FF] flex items-center justify-center font-bold text-[#6D5AE6]">
        en.
      </div>

      <div className="flex gap-8 text-sm font-medium">
        <Link to="/" className="hover:text-[#6D5AE6] transition-colors">
          Home
        </Link>
        <Link to="/experience" className="hover:text-[#6D5AE6] transition-colors">
          Experience
        </Link>
        <Link to="/about" className="hover:text-[#6D5AE6] transition-colors">
          About
        </Link>
        <a
          href="/Resume_enguyen.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#6D5AE6] transition"
        >
          Resume/CV
        </a>
      </div>
    </nav>
  );
}