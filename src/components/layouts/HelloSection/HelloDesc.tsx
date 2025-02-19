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
    <div className="flex flex-col gap-10 text-primary-900 dark:text-primary-100">
      <div className="flex flex-col gap-2 text-5xl font-bold sm:text-[78px] lg:items-center lg:gap-5">
        <motion.div
          {...motionProps}
          className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4"
        >
          <h1>{t("helloSection.greeting")}! 👋</h1>
          <h1 className="gradient-text">{t("helloSection.name")}</h1>
        </motion.div>
        <motion.h1
          {...motionProps}
          className={`outline-text-light flex flex-col gap-2 text-5xl font-bold italic sm:text-7xl lg:flex-row lg:text-center`}
        >
          <p>Software</p>
          <p>{t("helloSection.engineer")}</p>
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
