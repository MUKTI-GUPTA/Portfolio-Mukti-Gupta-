import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
// import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 mb-28 text-center text-4xl text-white nunito font-normal tracking-normal"
      >
        My Recent Work
        <p className="text-xl pt-3 text-neutral-400 font-medium tracking-tight">A look at my Projects!</p>
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 mr-6"
            >
              <img
                src={project.image}
                width={350}
                height={150}
                alt={project.title}
                className="mb-6 rounded ml-[-30px] max-[500px]:ml-[-13px]"
              />
              {/* <div className="bg-purple-300 gray-circle rounded-full absolute mt-[-135px] ml-[-16px]"></div>
              <div className="bg-black black-circle rounded-full absolute mt-[-141px] ml-[-20px]"></div> */}
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4 pt-[5px]"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <h6 className="mb-2 font-semibold tracking-wide text-xl text-slateblue hover:text-white">
                  {project.title}
                </h6>
              </a>

              {/* Show sponsored message only for the first project (index === 0) */}
              {index === 0 && (
                <p className="text-gray-200 pb-3">
                  (Sponsored by{" "}
                  <a
                    href="https://www.metaworldx.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 decoration-[-0.2px] hover:text-slateblue"
                  >
                    MetaWorldX
                  </a>{" "}
                  in associate with Humber Cloud-Computing Degree)
                </p>
              )}              

              <p className="mb-4 text-neutral-400">{project.description}</p>
              {/* Flexbox for technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-md bg-[#161616] px-3 py-[7.5px] cursor-pointer text-xs font-semibold nunito text-neutral-300"
                  > 
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
