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
      description: `Creating RWD that adapt and look well on various
      screen sizes and devices, such as desktops, tablets, and
      smartphones.
      Implementing JavaScript to add interactivity, dynamic
      behavior, and animations to web page
      Identifying and fixing front-end bugs, issues, and
      inconsistencies through testing and debugging`,
    },
    {
      name: "Frontend Developer",
      time: "Jan 2022 - Feb 2022",
      img: biotiq,
      company: "Biotiq Beauty Salon",
      description: `I personally crafted the website design from scratch,
      working independently.
      I developed the company's website on my own,
      utilizing front-end technologies
      I created the UI/UX design for the website starting from
      the ground up.
`,
    },
    {
      name: "Network Administrator",
      time: "Oct 2021 - Nov 2021",
      img: ignatium,
      company: "Ignatianum Academy",
      description: `Installing, configuring, and maintaining network
      hardware such as routers, switches, firewalls, and
      wireless access points
      Assisting users with network-related issues,
      troubleshooting connectivity problems, and providing
      technical support for network-related inquiries
      Maintaining accurate and detailed documentation of
      the network topology, configurations, and procedures.
`,
    },
  ];
  return (
    <section className="bg-light-blue -mt-px sm:px-10">
      <div className="mt-20 px-5 flex flex-col text-slate-50">
        <div className="text-base">What i have done so far</div>
        <div className="mt-2 text-3xl font-extrabold mb-18">
          Work Experience
        </div>
        {JobPositions.map((position) => (
          <div
            className="flex w-full   rounded-md  justify-center "
            key={position.company}
          >
            <div className="w-1/5 flex justify-center">
              <div className="bg-white w-1 relative">
                <div
                  className="w-12 h-12   absolute"
                  style={{
                    left: "50%",
                    top: "25px",
                    transform: "translateX(-50%)",
                  }}
                >
                  <img
                    src={position.img}
                    alt=""
                    className="w-full h-full rounded-3xl"
                  />
                </div>
              </div>
            </div>

            <div className="bg-Jobs-blue w-4/5    my-7 mx-3 text-sm p-4 rounded-md relative z-10 border-b-2 border-white">
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

export default WorkExperience;
