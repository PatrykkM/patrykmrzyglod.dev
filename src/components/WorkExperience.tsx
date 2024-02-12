import biotiq from "../assets/img/biotiq.jpeg";
import ignatium from "../assets/img/ignatium.png";
import nanovo from "../assets/img/nanovo.png";
import WorkExperienceDesktop from "./WorkExperienceDesktop";
import WorkExperienceMobile from "./WorkExperienceMobile";
export interface WorkExperienceProps {
  JobPositions: JobPosition[];
}
interface JobPosition {
  name: string;
  time: string;
  img: string;
  company: string;
  description: string;
}

const WorkExperience = () => {
  const JobPositions: JobPosition[] = [
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
    <div className="bg-light-blue" id="Experience">
      <WorkExperienceMobile JobPositions={JobPositions} />
      <WorkExperienceDesktop JobPositions={JobPositions} />
    </div>
  );
};

export default WorkExperience;
