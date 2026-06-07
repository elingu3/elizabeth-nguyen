import { Link } from "react-router-dom";

const navItems = [
  { label: "about me",   to: "/about",      emoji: "🐰" },
  { label: "experience", to: "/experience", emoji: "🐇" },
  { label: "my projects",to: "/projects",   emoji: "🐰" },
  { label: "contact me", to: "mailto:enguyen@caltech.edu", emoji: "🐇", external: true },
];

function MacWindow() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl w-72 flex-shrink-0">
      {/* title bar */}
      <div className="bg-[#7B8B5C] px-4 py-2.5 flex items-center">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
        </div>
        <span className="text-xs text-white/70 mx-auto pr-6">home.</span>
      </div>

      {/* content */}
      <div className="bg-[#8B9B6E] px-8 py-10 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">hi, i'm elizabeth</h1>
        <p className="text-sm text-gray-700 mb-8 leading-relaxed">
          cs @ caltech · ml researcher · builder.<br />
          i like working on creative problems.
        </p>
        <div className="flex gap-3 justify-center">
          <a
            href="/Elizabeth_Nguyen_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 border border-gray-800/50 text-sm rounded text-gray-800 hover:bg-gray-800 hover:text-white transition-colors"
          >
            Resume
          </a>
          <a
            href="mailto:enguyen@caltech.edu"
            className="px-4 py-1.5 border border-gray-800/50 text-sm rounded text-gray-800 hover:bg-gray-800 hover:text-white transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    /* break out of the App container's px-8 py-14 */
    <div className="-mx-8 -mt-14 flex flex-col" style={{ minHeight: "100vh" }}>

      {/* desktop area */}
      <div className="flex-1 flex items-center justify-center gap-16 px-12 py-16">

        {/* left: nav icon grid */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-10">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.to}
                className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-200 cursor-pointer"
              >
                <span className="text-6xl">{item.emoji}</span>
                <span className="text-sm font-semibold text-gray-700">{item.label}</span>
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-200"
              >
                <span className="text-6xl">{item.emoji}</span>
                <span className="text-sm font-semibold text-gray-700">{item.label}</span>
              </Link>
            )
          )}
        </div>

        {/* right: mac window */}
        <MacWindow />
      </div>

      {/* green grass strip */}
      <div className="relative h-24 bg-[#5C6B2C] flex-shrink-0">
        <span className="absolute bottom-0 left-14 text-[6.5rem] leading-none select-none" aria-hidden>
          🐰
        </span>
      </div>
    </div>
  );
}
