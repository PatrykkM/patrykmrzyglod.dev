import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { KnowledgeItems } from "@/constans";
import { useTranslation } from "react-i18next";
const Introduction = () => {
  const combinedVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
      },
    },
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
        className="flex flex-col dark:text-text-dark-mode text-text-light-mode lg:m-auto lg:max-w-7xl lg:px-16"
      >
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
          className="my-2 text-3xl font-bold dark:text-mian-text-light sm:text-5xl lg:text-6xl"
        >
          {t("introduction.overview")}
        </motion.h2>
        <p className="leading-7 text-gray-500">
          {t("introduction.description")}
        </p>
        <div className="z-10 sm:flex sm:flex-wrap" ref={itemsRef}>
          {KnowledgeItems.map((item, index) => (
            <motion.div
              className="mr-6 mt-10 flex h-40 w-full flex-col items-center justify-center rounded-xl dark:bg-dynamic-menu text-center text-xl bg-light-mode-items sm:h-64 sm:w-56"
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate={itemsInView ? "visible" : "hidden"}
            >
              <div className="pb-1 text-4xl dark:text-blue-300 text-main-dark">
                <item.src />
              </div>
              <p className="pt-1 font-semibold dark:text-blue-600 text-light-blue">
                {t(`introduction.${item.name}`)}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Introduction;
