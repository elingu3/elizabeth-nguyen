export default function About() {
  return (
    <section id="about" className="py-14 border-t border-slate-100">
  <h2 className="text-3xl font-bold tracking-tight mb-10">about</h2>

  <div className="max-w-3xl text-lg text-slate-600 leading-relaxed space-y-6">
    <p>
  i’m a computer science student at caltech, interested in machine learning and building systems that help make sense of complex data. i enjoy working on problems that connect theory with real-world applications, especially when i can turn an idea into something practical and easy to use.
</p>

<p>
  recently, i’ve been applying machine learning to exoplanet data through research @ NASA JPL, and building interactive tools for exploring and understanding data. overall, i’m drawn to projects where both the technical side and the design really matter. some of my other tech-related interests include data science, UI/UX design, and game development! i also dabbled in product management during summer '25 @ microsoft, where i developed copilot AI integrations for viva glint. 
</p>

<p>
  outside of class, you can probably find me at the pottery studio, checking out cafés, or exploring LA! 
</p>

    {/* Current Favorites */}
    <div className="pt-6">
      <h3 className="text-sm uppercase tracking-widest text-slate-600 mb-3">
        Currently:
      </h3>
      
      <ul className="space-y-2 text-base text-slate-700">

        <li>🎵 <span className="text-sm uppercase tracking-widest text-slate-400 mb-3">listening to: </span>3:15 by Bazzi </li>
        <li>📚 <span className="text-sm uppercase tracking-widest text-slate-400 mb-3">reading: </span>The Silent Patient by Alex Michaelides</li>
        <li>🎬 <span className="text-sm uppercase tracking-widest text-slate-400 mb-3">watching: </span>Parasite</li>
        <li>🧠 <span className="text-sm uppercase tracking-widest text-slate-400 mb-3">learning: </span>PyTorch</li>
      </ul>
    </div>
  </div>
</section>
  )
}