import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaReact } from "react-icons/fa";
import { MdOutlineWebAsset, MdPhoneIphone } from "react-icons/md";

interface Item {
  name: string;
  src: JSX.Element;
}

const Introduction: React.FC = () => {
  const KnowledgeItems: Item[] = [
    {
      name: "React Developer",
      src: <FaReact />,
    },
    {
      name: "Web Developer",
      src: <MdOutlineWebAsset />,
    },
    {
      name: "Responsive Web Designer",
      src: <MdPhoneIphone />,
    },
  ];

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

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="flex flex-col text-white lg:max-w-7xl lg:m-auto lg:px-16"
    >
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={combinedVariants}
        className="text-gray-500 uppercase"
      >
        Introduction
      </motion.div>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={combinedVariants}
        className="font-bold text-3xl my-2 sm:text-5xl lg:text-6xl dark:text-mian-text-light"
      >
        Overview
      </motion.div>
      <p className="text-gray-500 leading-7">
        I am an experienced software engineer with strong skills in JavaScript
        and TypeScript, focusing on front-end development using frameworks like
        React. My expertise includes creating efficient, scalable, and
        user-friendly solutions that address real-world problems. I am known for
        my quick learning abilities and my commitment to closely collaborating
        with clients to deliver impactful applications.
      </p>
      <div className="z-10 sm:flex sm:flex-wrap">
        {KnowledgeItems.map((item, index) => {
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });

          return (
            <motion.div
              className="flex flex-col w-full bg-dynamic-menu rounded-xl justify-center items-center h-40 text-xl mt-10 text-center sm:h-64 sm:w-56 mr-6 dark:bg-light-mode-items"
              key={index}
              ref={ref}
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <div className="text-4xl text-blue-300 pb-1 dark:text-main-dark">
                {item.src}
              </div>
              <div className="text-blue-600 font-semibold pt-1 dark:text-light-blue">
                {item.name}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Introduction;
