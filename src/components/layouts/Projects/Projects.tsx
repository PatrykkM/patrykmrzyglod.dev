import { motion } from "framer-motion";
import { MyProjects } from "@/constans";
import { titleOfSectionVariants } from "@/utils/motion";
import Project from "./components/Project";

const Projects = () => {
  const titleMotionProps = {
    initial: "offscreen",
    whileInView: "onscreen",
    viewport: { once: true, amount: 0.5 },
    variants: titleOfSectionVariants,
  };
  return (
    <section className="mt-18 flex flex-col px-5 font-medium text-text-light-mode dark:text-text-dark-mode sm:px-10  lg:mt-18 lg:max-w-7xl lg:px-16">
      <motion.div {...titleMotionProps}>
        <p className="text-sm uppercase text-gray-500 sm:text-base">My work</p>
        <h2 className="mt-2 text-3xl font-extrabold dark:text-mian-text-light sm:text-5xl">
          Projects
        </h2>
        <p className="mt-4 text-gray-500">
          The purpose of the projects presented here was to demonstrate my
          abilities and background while seeking my initial employment. Every
          project is succinctly summarized, including links to their respective
          code repositories. These works were developed earlier, and I am
          currently working on more sophisticated and polished projects. Keep an
          eye out for updates!
        </p>
      </motion.div>
      <div className="flex-wrap justify-center sm:flex sm:justify-start">
        {MyProjects.map((project, index) => (
          <Project key={index} index={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
