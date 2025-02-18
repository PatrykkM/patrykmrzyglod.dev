import { helloSectionTitleVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { LuMouse } from "react-icons/lu";

const HelloDesc = () => {
  const { t } = useTranslation();
  const motionProps = {
    initial: "offscreen",
    whileInView: "onscreen",
    viewport: { once: true, amount: 0.5 },
    variants: helloSectionTitleVariants,
  };

  return (
    <div className="flex flex-grow flex-col gap-12 text-text-light-mode dark:text-text-dark-mode">
      <div className="flex flex-col lg:items-center  lg:gap-6 text-5xl font-bold sm:text-[78px]">
        <motion.div
          {...motionProps}
          className="flex lg:items-center flex-col lg:flex-row gap-4"
        >
          <h1>{t("helloSection.greeting")}! 👋</h1>
          <h1 className="gradient-text">{t("helloSection.name")}</h1>
        </motion.div>
        <motion.h1
          {...motionProps}
          className={`text-5xl sm:text-7xl font-bold outline-text-light italic lg:text-center leading-snug`}
        >
          {t("helloSection.softwareEngineer")}
        </motion.h1>
      </div>
      <div className="w-full">
        <p className="leading-8 sm:text-lg font-medium  lg:text-center">
          {t("helloSection.description")}
        </p>
      </div>
      <div className="flex items-center">
        <div className="text-2xl font-extrabold">
          <LuMouse />
        </div>
        <p className="ml-2">{t("helloSection.scrollHint")}</p>
      </div>
    </div>
  );
};

export default HelloDesc;
