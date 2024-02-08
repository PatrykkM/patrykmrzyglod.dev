import { motion } from "framer-motion";
import biotiq from "../assets/img/biotiq.jpeg";
import ignatium from "../assets/img/ignatium.png";
import nanovo from "../assets/img/nanovo.png";

const WorkExperience = () => {
  const JobPositions = [
    {
      name: "Frontend Developer",
      time: "Apr 2022 - Jul 2022",
      img: nanovo,
      company: "Nanovo Warmijska 1 30-069",
      description: `Creating RWD that adapt and look well on various screen sizes and devices, such as desktops, tablets, and smartphones. Implementing JavaScript to add interactivity, dynamic behavior, and animations to web page. Identifying and fixing front-end bugs, issues, and inconsistencies through testing and debugging.`,
    },
    {
      name: "Frontend Developer",
      time: "Jan 2022 - Feb 2022",
      img: biotiq,
      company: "Biotiq Beauty Salon",
      description: `I personally crafted the website design from scratch, working independently. I developed the company's website on my own, utilizing front-end technologies. I created the UI/UX design for the website starting from the ground up.`,
    },
    {
      name: "Network Administrator",
      time: "Oct 2021 - Nov 2021",
      img: ignatium,
      company: "Ignatianum Academy",
      description: `Installing, configuring, and maintaining network hardware such as routers, switches, firewalls, and wireless access points. Assisting users with network-related issues, troubleshooting connectivity problems, and providing technical support for network-related inquiries. Maintaining accurate and detailed documentation of the network topology, configurations, and procedures.`,
    },
  ];

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
    <div className="bg-light-blue lg:hidden" id="Experience">
      <section className="bg-light-blue -mt-px p-5 sm:px-10 lg:max-w-7xl m-auto lg:px-16">
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
                className="bg-Jobs-blue w-4/5 my-7 mx-3 text-sm p-4 rounded-md relative z-10 border-b-2 border-white"
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
    </div>
  );
};

export default WorkExperience;
