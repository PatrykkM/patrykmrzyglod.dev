import { helloSectionTitleVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const HelloDesc = () => {
  const { t } = useTranslation();
  const motionProps = {
    initial: "offscreen",
    whileInView: "onscreen",
    viewport: { once: true, amount: 0.5 },
    variants: helloSectionTitleVariants,
  };

  return (
    <div className="text-primary-900 dark:text-primary-100 flex flex-grow flex-col gap-10">
      <div className="flex flex-col text-5xl font-bold sm:text-[78px] lg:items-center lg:gap-6">
        <motion.div
          {...motionProps}
          className="flex flex-col gap-4 lg:flex-row lg:items-center"
        >
          <h1>{t("helloSection.greeting")}! 👋</h1>
          <h1 className="gradient-text">{t("helloSection.name")}</h1>
        </motion.div>
        <motion.h1
          {...motionProps}
          className={`outline-text-light text-5xl font-bold italic leading-snug sm:text-7xl lg:text-center`}
        >
          {t("helloSection.softwareEngineer")}
        </motion.h1>
      </div>
      <div className="w-full">
        <p className="font-medium leading-8 sm:text-lg lg:text-center">
          {t("helloSection.description")}
        </p>
      </div>
    </div>
  );
};

export default HelloDesc;
