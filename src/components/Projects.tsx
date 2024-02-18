import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Collective from "../assets/img/Collective.jpg";
import Finance from "../assets/img/track.png";
import Bape from "../assets/img/In-ProggresBape.png";

const Projects = () => {
  const headerControls = useAnimation();
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (headerInView) {
      headerControls.start("visible");
    }
  }, [headerControls, headerInView]);

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const MyProjects = [
    {
      name: "Finance",
      img: Finance,
      desc: `FinanceApp is a finance application that allows users to simulate the buying and selling
        of stocks from top global companies. It aims to provide a brokerage-like experience, enabling
        users to monitor markets and invest in stocks virtually`,
      techs: "#React #Redux #Tailwindcss",
    },
    {
      name: "Collective",
      img: Collective,
      desc: `Collective is an innovative e-commerce platform that redefines online shopping with its groundbreaking design and exceptional user experience. At Collective, the focus is on an intuitive, user-friendly interface.`,
      techs: "#React #Tailwindcss",
    },
    {
      name: "BoredApe.com",
      img: Bape,
      desc: `in-progres`,
      techs: "#React #??? #???",
    },
  ];

  const projectVariants = {
    offscreen: {
      x: -100,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="mt-18 px-5 flex flex-col text-white font-medium sm:px-10 lg:max-w-7xl lg:m-auto lg:px-16 lg:mt-18">
      <motion.div
        ref={headerRef}
        initial="hidden"
        animate={headerControls}
        variants={headerVariants}
      >
        <p className="uppercase text-sm text-gray-500 sm:text-base">My work</p>
        <div className="text-3xl font-extrabold mt-2 sm:text-5xl dark:text-mian-text-light">
          Projects
        </div>
        <p className="mt-4 text-gray-500">
          The purpose of the projects presented here was to demonstrate my
          abilities and background while seeking my initial employment. Every
          project is succinctly summarized, including links to their respective
          code repositories. These works were developed earlier, and I am
          currently working on more sophisticated and polished projects. Keep an
          eye out for updates!
        </p>
      </motion.div>
      <div className="sm:flex flex-wrap justify-center sm:justify-start">
        {MyProjects.map((project, index) => {
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.3,
          });
          const controls = useAnimation();

          useEffect(() => {
            if (inView) {
              controls.start("onscreen");
            }
          }, [controls, inView]);

          return (
            <motion.div
              ref={ref}
              initial="offscreen"
              animate={controls}
              variants={projectVariants}
              key={index}
              className="bg-dynamic-menu mt-18 rounded-lg p-5 sm:mr-8 font-normal sm:w-96 mb-8 dark:bg-light-mode-items dark:text-blue-800"
            >
              <img
                src={project.img}
                alt={`Photo of my project named ${project.name}`}
                className="rounded-lg w-full object-cover h-52"
              />
              <div className="mt-3">
                <span className="text-2xl font-bold ">{project.name}</span>
                <p className="text-sm mt-3 text-gray-300 dark:text-gray-500 ">
                  {project.desc}
                </p>
                <div className="mt-3 text-sm text-orange-400">
                  {project.techs}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
