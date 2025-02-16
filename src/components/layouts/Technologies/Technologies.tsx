import { motion } from "framer-motion";
import { MyTechnologies } from "@/constans";
import { techsContainerVariants } from "@/utils/motion";
import { titleOfSectionVariants } from "@/utils/motion";
import Technology from "./components/Technology";

const Technologies = () => {
  const titleMotionProps = {
    initial: "offscreen",
    whileInView: "onscreen",
    viewport: { once: true, amount: 0.5 },
    variants: titleOfSectionVariants,
  };
  return (
    <section
      className="mt-17 flex flex-col px-5 font-semibold m:px-10 lg:m-auto lg:max-w-7xl lg:px-16"
      id="Technologies"
    >
      <motion.div {...titleMotionProps}>
        <p className="text-sm uppercase text-gray-400">My knowledge of</p>
        <h2 className="mt-2 text-3xl font-extrabold dark:text-mian-text-light lg:text-6xl">
          Technologies
        </h2>
        <p className="font-base mt-5 text-xs font-light dark:text-gray-500">
          *Technologies are listed in order of proficiency, from highest to
          lowest.
        </p>
      </motion.div>
      <motion.div
        className="sm:flex sm:flex-wrap"
        variants={techsContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {MyTechnologies.map((tech, index) => (
          <Technology tech={tech} index={index} key={index} />
        ))}
      </motion.div>
    </section>
  );
};

export default Technologies;
