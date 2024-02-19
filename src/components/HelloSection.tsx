import { motion } from "framer-motion";
import { LuMouse } from "react-icons/lu";
interface HelloSectionProps {
  darkMode: boolean;
}

const HelloSection: React.FC<HelloSectionProps> = ({ darkMode }) => {
  const textVariants = {
    offscreen: {
      y: -20,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        ease: "easeInOut",
        stiffness: 80,
        damping: 10,
        duration: 1,
      },
    },
  };

  return (
    <>
      <div className="lg:mt-36 flex flex-col flex-grow">
        <section className="flex flex-col text-white mt-5 dark:text-mian-text-light">
          <motion.h1
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariants}
            className="text-5xl font-bold flex items-center sm:text-7xl lg:text-8xl"
          >
            <div>Hello</div>
            <div className="ml-1 mb-1">👋</div>
          </motion.h1>
          <motion.h2
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariants}
            className="text-4xl font-bold mt-2 gradient-text sm:text-6xl sm:my-5 lg:text-8xl"
          >
            I'm Patryk
          </motion.h2>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariants}
            className={`text-4xl font-bold my-2 ${
              darkMode ? `outline-text-light` : `outline-text`
            } italic sm:text-6xl lg:text-8xl `}
          >
            <div className="">Frontend</div>
            <div className="mt-2 sm:mt-5 ">Developer</div>
          </motion.div>
        </section>
        <section className="text-slate-200 mt-10 font-medium dark:text-mian-text-light">
          <div className="leading-8 lg:w-96  sm:text-lg">
            I create user interfaces, develop web applications,
            <span className="gradient-text"> and much more!</span> As a college
            freshman, I have already accumulated almost half year of
            professional experience in the field and possess a strong passion
            for continuous development and growth. 📈
          </div>
          <div className="flex items-center mt-10">
            <div className="text-2xl font-extrabold">
              <LuMouse />
            </div>
            <div className="ml-2">scroll down to know me better</div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HelloSection;
