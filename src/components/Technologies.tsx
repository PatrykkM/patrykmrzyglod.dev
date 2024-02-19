import { motion } from "framer-motion";
import { FaSass, FaHtml5, FaReact, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiTypescript,
  SiThreedotjs,
  SiFramer,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { GrDocker } from "react-icons/gr";
import {} from "react-icons/si";

const Technologies = () => {
  const MyTechnologies = [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
      color: "text-orange-600",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS3",
      color: " text-sky-500",
    },
    {
      icon: <FaReact />,
      name: "React",
      color: "text-cyan-400",
    },
    {
      icon: <SiTypescript />,
      name: "Typescript",
      color: "text-blue-900",
    },
    {
      icon: <SiRedux />,
      name: "Redux Toolkit",
      color: "text-purple-600",
    },
    {
      icon: <FaSass />,
      name: "Sass",
      color: "text-pink-400",
    },
    {
      icon: <IoLogoJavascript />,
      name: "Javascript",
      color: "text-yellow-300",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwindcss",
      color: "text-cyan-600",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
      color: "text-orange-700",
    },
    {
      icon: <GrDocker />,
      name: "Docker",
      color: "text-sky-600",
    },
    {
      icon: <SiThreedotjs />,
      name: "Three.js",
      color: "text-black",
    },
    {
      icon: <SiFramer />,
      name: "Framer",
      color: "text-sky-400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section
      className="flex flex-col text-white px-5 mt-17 sm:px-10 lg:max-w-7xl lg:m-auto lg:px-16 dark:text-light-blue font-semibold "
      id="Technologies"
    >
      <div className="uppercase text-sm text-gray-400">My knowledge of</div>
      <div className="text-3xl font-extrabold mt-2 lg:text-6xl dark:text-mian-text-light">
        Technologies
      </div>
      <motion.div
        className="sm:flex sm:flex-wrap"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {MyTechnologies.map((tech, index) => (
          <motion.div
            key={index}
            className="bg-dynamic-menu flex flex-col justify-center items-center h-36 rounded-xl mt-10 sm:w-52 sm:h-52 sm:flex sm:flex-wrap sm:mr-5 dark:bg-light-mode-items shadow-md"
            variants={itemVariants}
          >
            <div className={`text-4xl mb-1 ${tech.color} sm:text-5xl`}>
              {tech.icon}
            </div>
            <div className="mt-2">{tech.name}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Technologies;
