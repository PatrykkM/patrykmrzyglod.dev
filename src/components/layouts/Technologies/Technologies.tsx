import { motion } from "framer-motion";
import { MyTechnologies } from "@/constans";
import { techsContainerVariants } from "@/utils/motion";
import { titleOfSectionVariants } from "@/utils/motion";
import Technology from "./components/Technology";
import { useTranslation } from "react-i18next";
const Technologies = () => {
  const titleMotionProps = {
    initial: "offscreen",
    whileInView: "onscreen",
    viewport: { once: true, amount: 0.5 },
    variants: titleOfSectionVariants,
  };
  const { t } = useTranslation();
  return (
    <section
      className="flex flex-col px-5 font-semibold m:px-10  lg:max-w-7xl lg:px-16 pt-10"
      id="Technologies"
    >
      <motion.div {...titleMotionProps}>
        <p className="text-sm uppercase text-gray-400">
          {t("technologies.myKnowledgeOf")}
        </p>
        <h2 className="mt-2 text-3xl font-extrabold dark:text-text-dark-mode text-text-light-mode lg:text-6xl">
          {t("technologies.title")}
        </h2>
        <p className="font-base mt-5 text-xs font-normal text-gray-400">
          {t("technologies.hint")}
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
