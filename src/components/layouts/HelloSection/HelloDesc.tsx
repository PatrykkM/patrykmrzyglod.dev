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
    <div className="flex flex-grow flex-col ">
      <div className="mt-5 flex flex-col text-text-light-mode dark:text-text-dark-mode">
        <motion.div
          {...motionProps}
          className="flex items-center text-5xl font-bold sm:text-7xl lg:text-8xl"
        >
          <h1>{t("helloSection.greeting")}</h1>
          <h1 className="mb-1 ml-1">👋</h1>
        </motion.div>
        <motion.h1
          {...motionProps}
          className="gradient-text mt-2 text-4xl font-bold sm:my-5 sm:text-6xl lg:text-8xl"
        >
          {t("helloSection.name")}
        </motion.h1>
        <motion.div
          {...motionProps}
          className={`my-2 text-4xl font-bold outline-text-light dark:outline-text-dark-mode italic sm:text-6xl lg:text-8xl`}
        >
          <h1>{t("helloSection.role.line1")}</h1>
          <h1 className="mt-2 sm:mt-5">{t("helloSection.role.line2")}</h1>
        </motion.div>
      </div>
      <div className="mt-10 font-medium dark:text-text-dark-mode text-text-light-mode">
        <p className="leading-8 sm:text-lg lg:w-96">
          {t("helloSection.description")}
        </p>
        <div className="mt-10 flex items-center">
          <div className="text-2xl font-extrabold">
            <LuMouse />
          </div>
          <p className="ml-2">{t("helloSection.scrollHint")}</p>
        </div>
      </div>
    </div>
  );
};

export default HelloDesc;
