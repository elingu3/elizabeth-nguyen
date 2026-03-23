import { useState } from "react";
import myPhoto from '../assets/my-notion-face-transparent.png';
import microsoftLogo from "../assets/logos/microsoft_logo.png";
import caltechLogo from "../assets/logos/caltech.png";
import codeNinjasLogo from "../assets/logos/codeninjas.png";
import nasaLogo from "../assets/logos/nasa.png";


  export default function Home() {
    const [hovered, setHovered] = useState<string | null>(null);
const [position, setPosition] = useState({ x: 0, y: 0 });

const handleMouseMove = (e: React.MouseEvent) => {
  setPosition({
    x: e.clientX,
    y: e.clientY,
  });
};

const logos: Record<string, string> = {
  microsoft: microsoftLogo,
  caltech: caltechLogo,
  codeNinjas: codeNinjasLogo,
  nasa: nasaLogo,
  // add more later
};



    return(
    
    <div className="max-w-6xl mx-auto px-8 py-14 font-sans text-[#2D2D2D] selection:bg-purple-100">
    
      
      {/* 1. Header/Nav - Spacing tightened to pull hero up */}
      

      {/* 2. Hero Section - Swapped layout with text on left */}
      
        <section id="home" className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center mb-40 pt-10">
        <div className="md:col-span-7">
        {/* Left Side: Name and Tagline */}
        <div className="md:col-span-7">
            {/* Tightened the tracking (letter spacing) for a high-end look */}
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-[0.9] mb-10">
            hi, i'm{" "}
            <span className="bg-gradient-to-r from-[#FFAFCC] via-[#A2D2FF] to-[#CDB4DB] bg-[length:200%_200%] bg-clip-text text-transparent transition-all duration-700 hover:bg-[position:100%_0]">
                elizabeth nguyen
            </span>
            !
            </h1>


            {/* Using flex-col here instead of flex-wrap creates a cleaner vertical block */}
            <div className="flex flex-col gap-4 text-xl md:text-2xl font-normal text-slate-600 max-w-lg leading-relaxed">
            <p>
                <span className="inline-block translate-y-0.5 mr-2 transition-transform hover:scale-130 duration-300">👩🏻‍💻</span> 
                cs @ caltech. interested in machine learning & building impactful systems.
            </p>
            <p>
                fueled by curiosity and matcha <span className="inline-block translate-y-0.5 ml-1 transition-transform hover:scale-130 duration-300">🍵</span>
            </p>
            </div>
            </div>

    {/* Social Links: Increased top margin to separate them from the bio */}
    <div className="mt-16 flex gap-4">
      <a href="https://www.linkedin.com/in/elizabethsnguyen/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#6D5AE6] text-xs font-bold uppercase tracking-[0.2em] transition-all hover:translate-y-[-2px]">LinkedIn</a>
      <a href="https://github.com/elingu3" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#6D5AE6] text-xs font-bold uppercase tracking-[0.2em] transition-all hover:translate-y-[-2px]">GitHub</a>
      <a href="mailto:enguyen@caltech.edu" className="text-slate-400 hover:text-[#6D5AE6] text-xs font-bold uppercase tracking-[0.2em] transition-all hover:translate-y-[-2px]">Email</a>
    </div>
  </div>

  {/* Right Side: Photo with a softer presence */}
  <div className="md:col-span-5 flex justify-center md:justify-end md:-mt-30">
    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-[#E0D7FF] flex items-center justify-center transition-transform hover:rotate-5 duration-200 md:translate-y-6">
      <img 
        src={myPhoto} 
        alt="Elizabeth" 
        className="w-full h-full object-cover p-4" 
      />
    </div>
  </div>
</section>


      {/* 3. Bento Grid Cards (Projects Section) */}
      <section id="experience" className="">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          {/* Caltech Card */}
          <div className="bg-[#BDE0FE] p-10 rounded-[45px] transition-all hover:scale-[1.02] duration-300"
          onMouseEnter={() => setHovered("caltech")}
              onMouseLeave={() => setHovered(null)}
              onMouseMove={handleMouseMove}>
            <div className="flex items-center gap-4 mb-4 text-slate-800">
              <span className="text-3xl">🎓</span>
              <h2 className="text-2xl font-bold tracking-tight"
              >Class of 2029 @ Caltech</h2>
            </div>
            <p className="text-slate-600 text-base leading-relaxed ml-12">
              Pursuing a BS in Computer Science & involved in the Society of Women Engineers and NCAA DIII Swim & Dive Team. 
            </p>
          </div>

          {/* NASA JPL Card */}
          <div className="bg-[#FFC8DD] p-10 rounded-[45px] transition-all hover:scale-[1.02] duration-300"
          onMouseEnter={() => setHovered("nasa")}
              onMouseLeave={() => setHovered(null)}
              onMouseMove={handleMouseMove}>
            <div className="flex items-center gap-4 mb-4 text-slate-800">
              <span className="text-3xl">🪐</span>
              <h2 className="text-2xl font-bold tracking-tight">ML Research @ NASA JPL</h2>
            </div>
            <p className="text-slate-600 text-base leading-relaxed ml-12">
              As part of the SURF@JPL program, applying machine learning methods to exoplanet sciences. 
            </p>
          </div>
    
        
        </div>
         <div className="bg-gray-100 p-10 md:p-20 rounded-[45px] transition-all hover:scale-[1.01] duration-300 w-full">
        <div className="flex items-center gap-4 mb-4 text-slate-800">
          <span className="text-3xl">💻</span>
          <h2 className="text-2xl font-bold tracking-tight">Other Experience</h2>
        </div>

        <div className="text-slate-600 text-lg leading-relaxed ml-12 max-w-4xl">
          <ul className="space-y-3 text-gray-700">
            <li
            onMouseEnter={() => setHovered("caltech")}
              onMouseLeave={() => setHovered(null)}
              onMouseMove={handleMouseMove}>
              <span className="font-medium">Undergraduate Researcher</span> @ Caltech
              <span className="text-gray-500"> — built SQL-based datasets & tools for database curriculum</span>
            </li>

            <li
              onMouseEnter={() => setHovered("microsoft")}
              onMouseLeave={() => setHovered(null)}
              onMouseMove={handleMouseMove}
              
            >
              <span>
                <span className="font-medium">Discovery Intern</span> @ Microsoft
              </span>
              <span className="text-gray-500"> — user research & prototyping for 1.6M+ users</span>
            </li>

            <li
            onMouseEnter={() => setHovered("codeNinjas")}
              onMouseLeave={() => setHovered(null)}
              onMouseMove={handleMouseMove}
              >
              <span className="font-medium">Coding Instructor</span> @ Code Ninjas
              <span className="text-gray-500"> — taught JavaScript, Unity, and robotics</span>
            </li>

            <li>
              <span className="font-medium">HackTech Organizer</span>
              <span className="text-gray-500"> — organizing Caltech hackathon</span>
            </li>
          </ul>
        </div>
      </div>
      </section>
      {hovered && (
        <img
          src={logos[hovered]}
          alt="logo"
          className="pointer-events-none fixed z-50 h-20 w-auto object-contain transition-all duration-100 ease-out scale-95 opacity-100"
          style={{
            left: position.x,
            top: position.y,
          }}
        />
      )}
      </div>
      
    
    )
}
