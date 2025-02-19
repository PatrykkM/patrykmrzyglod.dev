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
      className="flex w-full flex-col gap-10 px-5 pt-10 font-semibold lg:max-w-7xl lg:px-16"
      id="Technologies"
    >
      <motion.div {...titleMotionProps} className="flex flex-col gap-2">
        <p className="text-sm uppercase text-gray-400">
          {t("technologies.myKnowledgeOf")}
        </p>
        <h2 className="text-3xl font-extrabold text-primary-900 dark:text-primary-100 lg:text-6xl">
          {t("technologies.title")}
        </h2>
        <p className="font-base mt-2 text-xs font-normal text-gray-400">
          {t("technologies.hint")}
        </p>
      </motion.div>
      <motion.div
        className="flex flex-col gap-10 sm:flex-row sm:flex-wrap lg:gap-7"
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
