import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import StickyButton from "./components/StickyButton";
import { motion, useScroll, useSpring } from "framer-motion"; // Import useSpring

const App = () => {
  const { scrollYProgress } = useScroll(); // Track scroll progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100, // Control the spring stiffness
    damping: 30, // Control the spring damping
    mass: 1, // Adjust the mass for spring
  });

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      
     
      {/* Background & Main Content */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_17%,#000_55%,#000_110%)]"></div>
      </div>

      {/* Main Content */}
     

     {/* IMPORTED NAVBAR */}

     
      <Navbar />



       {/* Scroll Progress Bar with useSpring SECTION code  */}
       <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-white origin-left z-50 rounded-full"
        style={{ scaleX }} 
      />

        <div className="container mx-auto px-8">
    
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Experience />
        <Contact />
      </div>
      <StickyButton />
    </div>
  );
};

export default App;
