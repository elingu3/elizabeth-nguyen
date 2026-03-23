

export default function Footer() {
return(
<nav className="mt-32 pt-10 border-t border-slate-100 text-sm text-slate-500 px-80 py-8">
  <div className="flex flex-col md:flex-row justify-between items-center gap-6">
    
    {/* Left: Name / message */}
    <p className="text-center md:text-left">
      © {new Date().getFullYear()} Elizabeth Nguyen ✨
    </p>

    {/* Right: Links */}
    <div className="flex gap-6 text-xs uppercase tracking-[0.2em] font-medium">
      <a
        href="https://www.linkedin.com/in/elizabethsnguyen/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#6D5AE6] transition-all hover:-translate-y-[1px]"
      >
        LinkedIn
      </a>

      <a
        href="https://github.com/elingu3"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#6D5AE6] transition-all hover:-translate-y-[1px]"
      >
        GitHub
      </a>

      <a
        href="mailto:enguyen@caltech.edu"
        className="hover:text-[#6D5AE6] transition-all hover:-translate-y-[1px]"
      >
        Email
      </a>
    </div>
  </div>

  {/* Bottom micro-detail */}
  <div className="mt-8 flex flex-col items-center gap-3">
    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
      Built with
    </p>
    <div className="flex flex-wrap justify-center gap-2">
      {["React", "TypeScript", "Tailwind CSS", "Vite"].map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500 bg-white"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
</nav>
)
}