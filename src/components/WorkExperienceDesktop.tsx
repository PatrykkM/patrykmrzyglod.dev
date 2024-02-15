import { WorkExperienceProps } from "./WorkExperience";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const WorkExperienceDesktop: React.FC<WorkExperienceProps> = ({
  JobPositions,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };
  return (
    <section className="bg-light-blue -mt-px p-5 sm:px-10 lg:max-w-7xl m-auto lg:px-16 hidden lg:block dark:bg-light-blue">
      <div className="mt-20  flex flex-col text-slate-50">
        <div className="text-base">What i have done so far</div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={titleVariants}
          className="mt-2 text-3xl font-extrabold mb-18 lg:text-6xl"
        >
          Work Experience
        </motion.div>
        {JobPositions.map((position, id) => (
          <div
            className="flex w-full   rounded-md  justify-center z-50"
            key={position.company}
          >
            <div
              className={`${
                id % 2 === 0 ? `invisible` : `flex`
              }  bg-Jobs-blue w-4/5    my-7 mx-3 text-sm p-4 rounded-md relative z-10 border-b-2 border-white flex flex-col`}
            >
              <div className="w-3 h-3 bg-Jobs-blue  absolute -right-1  rotate-45  "></div>
              <div className="text-2xl font-bold">{position.name}</div>
              <div>{position.company}</div>
              <div className="p-4 leading-6">{position.description}</div>
              <div>{position.time}</div>
            </div>
            <div className="w-1/5 flex justify-center">
              <div className="bg-white w-1 relative">
                <div className=" absolute w-16 h-16 left-1/2 top-6 -translate-x-1/2 rounded-full">
                  <img
                    src={position.img}
                    alt=""
                    className="w-full h-full rounded-full"
                  />
                </div>
              </div>
            </div>
            <div
              className={`${
                id % 2 !== 0 ? `invisible` : `flex`
              }  bg-Jobs-blue w-4/5    my-7 mx-3 text-sm p-4 rounded-md relative  border-b-2 border-white flex flex-col`}
            >
              <div className="w-3 h-3 bg-Jobs-blue  absolute -left-1 rotate-45  "></div>
              <div className="text-2xl font-bold">{position.name}</div>
              <div>{position.company}</div>
              <div className="p-4 leading-6">{position.description}</div>
              <div>{position.time}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperienceDesktop;
