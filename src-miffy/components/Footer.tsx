import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();

  if (location.pathname === "/") return null;

  return (
    <nav className="mt-20 pt-8 border-t border-pink-200 text-sm text-gray-500 px-8 py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Elizabeth Nguyen 🌸</p>
        <div className="flex gap-6 text-xs uppercase tracking-[0.2em] font-medium">
          <a href="https://www.linkedin.com/in/elizabethsnguyen/" target="_blank" rel="noopener noreferrer" className="hover:text-[#5C6B2C] transition-all">LinkedIn</a>
          <a href="https://github.com/elingu3" target="_blank" rel="noopener noreferrer" className="hover:text-[#5C6B2C] transition-all">GitHub</a>
          <a href="mailto:enguyen@caltech.edu" className="hover:text-[#5C6B2C] transition-all">Email</a>
        </div>
      </div>
    </nav>
  );
}
