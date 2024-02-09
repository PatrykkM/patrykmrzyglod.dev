import { motion } from "framer-motion";
import { WorkExperienceProps } from "./WorkExperience";

const WorkExperienceMobile: React.FC<WorkExperienceProps> = ({
  JobPositions,
}) => {
  const infoVariants = {
    offscreen: {
      x: 100,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5,
      },
    },
  };

  return (
    <section className="bg-light-blue -mt-px p-5 sm:px-10 lg:max-w-7xl m-auto lg:px-16 lg:hidden dark:bg-light-mode-items">
      <div className="mt-20 flex flex-col text-slate-50">
        <div className="text-base">What I have done so far</div>
        <div className="mt-2 text-3xl font-extrabold mb-18 lg:text-6xl">
          Work Experience
        </div>
        {JobPositions.map((position) => (
          <div
            key={position.company}
            className="flex w-full rounded-md justify-center"
          >
            <div className="w-1/5 flex justify-center">
              <div className="bg-white w-1 relative">
                <div
                  className="w-12 h-12 absolute lg:w-16 lg:h-16"
                  style={{
                    left: "50%",
                    top: "25px",
                    transform: "translateX(-50%)",
                  }}
                >
                  <img
                    src={position.img}
                    alt=""
                    className="w-full h-full rounded-full"
                  />
                </div>
              </div>
            </div>
            <motion.div
              className="bg-Jobs-blue w-4/5 my-7 mx-3 text-sm p-4 rounded-md relative z-10 border-b-2 border-white "
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              variants={infoVariants}
            >
              <div className="w-3 h-3 bg-Jobs-blue absolute -left-1 rotate-45"></div>
              <div className="text-2xl font-bold">{position.name}</div>
              <div>{position.company}</div>
              <div className="p-4 leading-6">{position.description}</div>
              <div>{position.time}</div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperienceMobile;
