import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="bg-black text-white h-screen flex flex-col lg:flex-row justify-center items-center p-4 lg:p-12">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-8">
        {/* Text Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-6/12">
          <motion.h1
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-2 lg:mb-4"
          >
            MUKTI GUPTA &lt;/&gt;
          </motion.h1>

          <motion.h2
            variants={container(0.7)}
            initial="hidden"
            animate="visible"
            className="text-xl lg:text-2xl font-semibold tracking-wide mb-4"
          >
            Creating <span className="text-slateblue">Responsive</span> Interfaces
            <br />
            Ensuring Digital <span className="text-slateblue">Safety</span>
            <br />
            Innovating <span className="text-slateblue">Smart</span> Systems
          </motion.h2>

          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="text-lg lg:text-xl font-light tracking-wide mb-6"
          >
            Web Developer | Cyber Security | IoT Enthusiast
          </motion.p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
          <motion.img
            variants={container(0.9)}
            initial="hidden"
            animate="visible"
            src="/src/assets/Mukti.png"
            alt="Mukti Gupta"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
