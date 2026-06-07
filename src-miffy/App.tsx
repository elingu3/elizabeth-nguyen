import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen relative overflow-hidden bg-[#FDE4EC]" style={{ fontFamily: "'Nunito', sans-serif" }}>
        <Header />

        <div className="relative max-w-6xl mx-auto px-8 py-14 text-[#2D2D2D] selection:bg-pink-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>

          <Analytics />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
