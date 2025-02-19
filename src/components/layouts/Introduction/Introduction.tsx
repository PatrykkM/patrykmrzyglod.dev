import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { KnowledgeItems } from "@/constans";
import { useTranslation } from "react-i18next";
import KnowlageItem from "./components/KnowlageItem";
const Introduction = () => {
  const combinedVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [itemsRef, itemsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { t } = useTranslation();

  return (
    <div className="mt-18 px-5 sm:px-10 lg:mt-0 lg:p-0">
      <section
        ref={sectionRef}
        className="flex flex-col gap-10 text-primary-900 dark:text-primary-100 lg:m-auto lg:max-w-7xl lg:px-16"
      >
        <div className="flex flex-col gap-2">
          <motion.p
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={combinedVariants}
            className="uppercase text-gray-500"
          >
            {t("introduction.title")}
          </motion.p>
          <motion.h2
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={combinedVariants}
            className="text-3xl font-bold sm:text-5xl lg:text-6xl"
          >
            {t("introduction.overview")}
          </motion.h2>
          <p className="leading-7 text-gray-500">
            {t("introduction.description")}
          </p>
        </div>
        <div className="z-10 flex flex-wrap gap-10" ref={itemsRef}>
          {KnowledgeItems.map((item, index) => (
            <KnowlageItem
              item={item}
              index={index}
              itemsInView={itemsInView}
              key={index}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Introduction;
