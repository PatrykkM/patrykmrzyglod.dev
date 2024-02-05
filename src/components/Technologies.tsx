import { FaSass } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

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
      name: "React ",
      color: "text-cyan-400",
    },
    {
      icon: <SiTypescript />,
      name: "Typescript",
      color: "text-blue-900",
    },

    {
      icon: <SiRedux />,
      name: "Redux",
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
  ];
  return (
    <section className="flex flex-col text-white px-5 mt-17 ">
      <div className="uppercase text-sm text-gray-400">My knowlage of</div>
      <div className="text-3xl font-extrabold mt-2">Technologies</div>
      <div className="">
        {MyTechnologies.map((tech) => (
          <div className="bg-dynamic-menu flex flex-col justify-center items-center h-36  rounded-xl mt-10 ">
            <div className={`text-4xl mb-1 ${tech.color}`}>{tech.icon}</div>
            <div className={`mt-2 `}>{tech.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
