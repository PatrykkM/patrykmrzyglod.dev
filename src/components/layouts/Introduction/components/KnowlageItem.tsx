import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";

const KnowlageItem = ({
  item,
  index,
  itemsInView,
}: {
  item: any;
  index: number;
  itemsInView: boolean;
}) => {
  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4, delay: index * 0.2 },
    },
  };

  const { t } = useTranslation();
  return (
    <motion.div
      className="flex h-40 w-full flex-col items-center justify-center rounded-xl bg-primary-300 text-center text-xl dark:bg-primary-500 sm:h-64 sm:w-56"
      key={index}
      variants={itemVariants}
      initial="hidden"
      animate={itemsInView ? "visible" : "hidden"}
    >
      <div className="pb-1 text-4xl text-primary-600 dark:text-blue-300">
        <item.src />
      </div>
      <p className="pt-1 font-semibold text-neutral-100 dark:text-blue-600">
        {t(`introduction.${item.name}`)}
      </p>
    </motion.div>
  );
};

export default KnowlageItem;
