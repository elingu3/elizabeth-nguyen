import microsoftLogo from "../assets/logos/microsoft_logo.png";
import nasaLogo from "../assets/logos/nasa.png";
import caltechLogo from "../assets/logos/caltech.png";

const experiences = [
{
    company: "NASA JPL",
    role: "Machine Learning Researcher",
    date: "Summer 2026",
    logo: nasaLogo,
    bullets: [
      "Applied ML techniques to exoplanet datasets",
      "Worked with researchers to analyze astronomical data",
    ],
  },
  {
    company: "Microsoft",
    role: "Discovery Intern",
    date: "Summer 2025",
    logo: microsoftLogo,
    bullets: [
        "Proposed Copilot AI integration for Viva Glint, app serving 1.63M active users & generating $100M annual revenue",
        "Led proposal to increase user engagement & comment quality; accepted to product team backlog for FY26",
        "Conducted competitive analysis, user research, and prototyping to inform product development",
        "Collaborated with designers, engineers, and product managers to improve UX flows, aligning with Microsoft accessibility guidelines",
    ],
    skills: ["Figma", "User Research", "Prototyping", "Product Management"],
  },
  {
    company: "Caltech",
    role: "Undergraduate Researcher",
    date: "2025–Present",
    logo: caltechLogo,
    bullets: [
      "Redesigned and implemented interactive SQL-based instructional datasets and tooling for an upper-level databases curriculum, emphasizing applied data exploration and visualization",
      "Conducted quantitative benchmarking across three peer institutions to inform curriculum modernization",
    ],
  },
];

export default function Experience() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold mb-12">Experience</h1>

      <div className="relative border-l border-slate-200 ml-4 space-y-12">
        {experiences.map((exp, i) => (
          <div key={i} className="relative pl-8">
            {/* timeline dot */}
            <div className="absolute -left-[9px] top-2 w-4 h-4 bg-[#6D5AE6] rounded-full" />

            {/* card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-4 mb-3">
                <img src={exp.logo} alt={exp.company} className="w-10 h-10 object-contain" />
                <div>
                  <h2 className="font-semibold text-lg">{exp.role}</h2>
                  <p className="text-slate-500 text-sm">
                    {exp.company} • {exp.date}
                  </p>
                </div>
              </div>
              

              <ul className="list-disc ml-6 text-slate-600 space-y-1">
                {exp.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
              
            </div>
          </div>
        ))}
      </div>

        
    </div>


  );
}