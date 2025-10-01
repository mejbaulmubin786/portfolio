import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1220] via-[#0f172a] to-[#071029] text-white">
      <Navbar />
      <main className="max-w-7xl mx-auto">
        <Home />
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;
