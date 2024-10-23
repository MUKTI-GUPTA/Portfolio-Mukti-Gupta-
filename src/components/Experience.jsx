import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl text-white nunito font-normal tracking-normal"
      >
        My Career Timeline
        <p className="text-xl pt-3 text-neutral-400 font-medium tracking-tight"> Work Experience | Education</p>
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-base nunito text-white">{experience.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <p className="mb-2 text-base text-white">
                {experience.role} -{" "}
                <span className="text-base text-slateblue font-medium">
                  {experience.company}
                </span>
              </p>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              {experience.type.map((type, index) => (
                <span
                  key={index}
                  className="rounded-md bg-[#161616] px-3 py-[7.5px] cursor-pointer text-xs font-semibold nunito text-slateblue"
                  >
                  {type}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
