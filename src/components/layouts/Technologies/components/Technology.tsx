import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { singleTechnologyVariants } from "@/utils/motion";
import { IconType } from "react-icons/lib";

const Technology = ({
  tech,
  index,
}: {
  index: number;
  tech: {
    id?: string;
    icon: IconType;
    name: string;
    color: string;
  };
}) => {
  const { t } = useTranslation();
  return (
    <motion.div
      key={index}
      className="mt-10 flex   h-36 flex-col items-center justify-center rounded-xl dark:bg-dynamic-menu shadow-md bg-light-mode-items sm:mr-5 sm:flex sm:h-52 sm:w-52 sm:flex-wrap"
      variants={singleTechnologyVariants}
    >
      <div className={`mb-1 text-4xl ${tech.color} sm:text-5xl`}>
        <tech.icon />
      </div>
      <p className="mt-2 text-light-blue dark:text-text-dark-mode">
        {tech.id ? `${t(`technologies.${tech.id}`)}` : tech.name}
      </p>
    </motion.div>
  );
};

export default Technology;
