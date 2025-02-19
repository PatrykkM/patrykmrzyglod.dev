import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { singleTechnologyVariants } from "@/utils/motion";
import { IconType } from "react-icons/lib";

const Technology = ({
  tech,
  index,
}: {
  index: number;
  tech: { id?: string; icon: IconType; name: string; color: string };
}) => {
  const { t } = useTranslation();
  return (
    <motion.div
      key={index}
      className="dark:bg-primary-500 bg-primary-300 flex h-36 flex-col items-center justify-center rounded-xl shadow-md transition-colors duration-300  sm:flex sm:h-52 sm:w-52 sm:flex-wrap "
      variants={singleTechnologyVariants}
    >
      <div className={`mb-1 text-4xl ${tech.color} sm:text-5xl`}>
        <tech.icon />
      </div>
      <p className="dark:text-primary-100 mt-2 text-neutral-100">
        {tech.id ? `${t(`technologies.${tech.id}`)}` : tech.name}
      </p>
    </motion.div>
  );
};

export default Technology;
