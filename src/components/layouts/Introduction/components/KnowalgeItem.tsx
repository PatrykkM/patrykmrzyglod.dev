import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";

const KnowalgeItem = ({
  item,
  index,
  itemsInView,
}: {
  item: any;
  index: number;
  itemsInView: boolean;
}) => {
  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, duration: 0.5 },
    },
  };

  const { t } = useTranslation();
  return (
    <motion.div
      className="dark:bg-primary-500 bg-primary-300 flex h-40 w-full flex-col items-center justify-center rounded-xl text-center text-xl sm:h-64 sm:w-56"
      key={index}
      variants={itemVariants}
      initial="hidden"
      animate={itemsInView ? "visible" : "hidden"}
    >
      <div className="text-primary-600 pb-1 text-4xl dark:text-blue-300">
        <item.src />
      </div>
      <p className="pt-1 font-semibold text-neutral-100 dark:text-blue-600">
        {t(`introduction.${item.name}`)}
      </p>
    </motion.div>
  );
};

export default KnowalgeItem;
