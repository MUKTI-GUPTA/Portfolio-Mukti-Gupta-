import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";


const Contact = () => {
  return (
    <div className="mb-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 mb-7 text-center text-3xl text-white nunito font-normal tracking-normal"

      >
      Liked My Work? Let’s Connect!      
      </motion.h2>
      <div className="text-center text-neutral-300 text-base">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
        <div className="m-8 flex flex-col min-[320px]:flex-row min-[320px]:my-1 items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/mukti-gupta/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white hover:text-neutral-400 transition duration-150" />
          </a>
          <a href="https://github.com/MUKTI-GUPTA" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white hover:text-neutral-400 transition duration-150" />
          </a>
          {/* Email Icon with mailto link */}
          <a href={`mailto:${CONTACT.email}`} className="text-white hover:text-neutral-400 transition duration-150">
            <FaEnvelope />
          </a>          
        </div>
        </motion.p>

        <div className="w-full mt-10 text-center text-sm text-neutral-500">
          <p>
          Mukti Gupta  © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
