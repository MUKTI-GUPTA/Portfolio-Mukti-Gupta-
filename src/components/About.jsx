import aboutImg from "../assets/Mukti.png";
// import { ABOUT_TEXT1, ABOUT_TEXT2 } from "../constants";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  return (
    <div className="pb-32">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl text-white nunito font-normal tracking-normal"
      >
        <p className="text-4xl text-white font-bold tracking-tight">About Me</p>   
        <p className="text-2xl text-gray-100 font-light tracking-tight">Get to know me better</p>
        </motion.h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-7/12 lg:py-8 lg:pr-10"
        >
          <div className="flex items-center justify-center">
            <img className="" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-5/12 flex items-center justify-start"
        >
          <div className="flex flex-col lg:p-8 text-xl justify-center lg:justify-start">
          <p className="my-2 max-w-xl py-0.5 text-white font-medium text-2xl">
            <TypeAnimation
              sequence={[
                '👋🏻Hello',
                1000, 
                '👋🏻Namaste',
                1000,
                '👋🏻Bonjour',
                1000,
                '👋🏻Hola',
                1000,
                '👋🏻Nǐ hǎo',
                1000
              ]}
              wrapper="span"
              speed={100}
              style={{display: 'inline-block' }}
              repeat={Infinity}/>
          </p> 
          
          <p className="my-4 max-w-xxl text-gray-100 font-extralight">
          This is me, Mukti Gupta! </p>
          <p className="my-2 max-w-xl text-gray-100 font-extralight">
          I’m a <span className="text-gray-100"> Web Developer </span> & a <span className="text-gray-100"> Cyber Security Enthusiast </span>
          who loves designing and coding.
          </p>
          <p className="my-2 max-w-xl text-gray-100 font-extralight">
          I am student of 3rd year Information Technology student from IGDTUW  I have a strong foundation in Development and Cyber Security.
          </p>
        
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
