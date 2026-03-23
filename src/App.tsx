import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";

import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      {/* 🌸 background wrapper */}
      <div className="min-h-screen relative overflow-hidden bg-white">

        {/* BLOBS */}
        <div className="absolute top-[-80px] left-[-60px] w-500 h-500 rounded-full bg-[#E0D7FF] blur-3xl opacity-30" />
        <div className="absolute top-[30%] right-[-80px] w-500 h-500 rounded-full bg-[#BDE0FE] blur-3xl opacity-30" />
        <div className="absolute bottom-[-100px] left-[35%] w-500 h-500 rounded-full bg-[#FFC8DD] blur-3xl opacity-30" />

        {/* CONTENT */}
        <Header />

        <div className="relative max-w-6xl mx-auto px-8 py-14 font-sans text-[#2D2D2D] selection:bg-purple-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>

          <Analytics />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}