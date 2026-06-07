import myPhoto from '../assets/my-notion-face-transparent.png';

export default function Home() {
  return (
    <section id="home" className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center mb-24 pt-6">
      <div className="md:col-span-7">
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-[0.9] mb-10">
          hi, i'm{" "}
          <span className="bg-gradient-to-r from-[#FFAFCC] via-[#A2D2FF] to-[#CDB4DB] bg-[length:200%_200%] bg-clip-text text-transparent transition-all duration-700 hover:bg-[position:100%_0]">
            elizabeth nguyen
          </span>
          !
        </h1>

        <div className="flex flex-col gap-4 text-xl md:text-2xl font-normal text-slate-600 max-w-lg leading-relaxed">
          <p>
            <span className="inline-block translate-y-0.5 mr-2 transition-transform hover:scale-130 duration-300">👩🏻‍💻</span>
            cs @ caltech, ml enthusiast, builder. i like creating things that make sense of complex data.
          </p>
          <p>
            fueled by curiosity <span className="inline-block translate-y-0.5 ml-1 transition-transform hover:scale-130 duration-300">🍵</span>
          </p>
        </div>

        <div className="mt-12 flex gap-6">
          <a href="https://www.linkedin.com/in/elizabethsnguyen/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#6D5AE6] text-xs font-bold uppercase tracking-[0.2em] transition-all hover:translate-y-[-2px]">LinkedIn</a>
          <a href="https://github.com/elingu3" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#6D5AE6] text-xs font-bold uppercase tracking-[0.2em] transition-all hover:translate-y-[-2px]">GitHub</a>
          <a href="mailto:enguyen@caltech.edu" className="text-slate-400 hover:text-[#6D5AE6] text-xs font-bold uppercase tracking-[0.2em] transition-all hover:translate-y-[-2px]">Email</a>
        </div>
      </div>

      <div className="md:col-span-5 flex justify-center md:justify-end">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-[#E0D7FF] flex items-center justify-center transition-transform hover:rotate-5 duration-200 md:translate-y-6">
          <img
            src={myPhoto}
            alt="Elizabeth"
            className="w-full h-full object-cover p-4"
          />
        </div>
      </div>
    </section>
  );
}
