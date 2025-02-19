import {
  FaGitAlt,
  FaJava,
  FaLayerGroup,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { GrDocker } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import { MdPhoneIphone } from "react-icons/md";
import {
  SiDotnet,
  SiExpo,
  SiNextdotjs,
  SiPostgresql,
  SiRedux,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import Collective from "/public/img/collective.jpg";
import Finance from "/public/img/finance.png";
import AdminPanel from "/public/img/admin-panel.jpg";
import codenauts from "/public/img/codenauts.jpg";
import ignatium from "/public/img/ignatium.png";
import nanovo from "/public/img/nanovo.png";
import Bape from "/public/img/bape.png";

import { AiOutlineCluster } from "react-icons/ai";

export const nav = [
  {
    name: "Experience",
  },
  {
    name: "Technologies",
  },
  {
    name: "Contact",
  },
];

export const KnowledgeItems = [
  {
    name: "frontEnd",
    src: FaReact,
  },
  {
    name: "backEnd",
    src: FaJava,
  },
  {
    name: "mobile",
    src: MdPhoneIphone,
  },
  {
    name: "systemArchitecture",
    src: AiOutlineCluster,
  },
];

export const JobPositions = [
  {
    id: "Codenauts",
    img: codenauts,
  },
  {
    id: "Nanovo",
    img: nanovo,
  },
  {
    id: "Ignatianum",
    img: ignatium,
  },
];

export const MyTechnologies = [
  {
    icon: FaReact,
    name: "React",
    color: "text-cyan-400",
  },
  {
    icon: FaReact,
    name: "React Native",
    color: "text-cyan-700",
  },
  {
    icon: SiNextdotjs,
    name: "Next.js",
    color: "text-black",
  },
  {
    icon: SiTypescript,
    name: "Typescript",
    color: "text-blue-900",
  },
  {
    icon: IoLogoJavascript,
    name: "Javascript",
    color: "text-yellow-300",
  },
  {
    icon: SiTailwindcss,
    name: "Tailwindcss",
    color: "text-cyan-600",
  },
  {
    icon: SiExpo,
    name: "Expo",
    color: "text-black",
  },
  {
    icon: SiRedux,
    name: "Redux Toolkit",
    color: "text-purple-600",
  },
  {
    icon: FaGitAlt,
    name: "Git",
    color: "text-orange-700",
  },
  {
    icon: FaSass,
    name: "Sass",
    color: "text-pink-400",
  },
  {
    icon: FaJava,
    name: "Java",
    color: "text-orange-500",
  },
  {
    icon: SiSpringboot,
    name: "Springboot",
    color: "text-lime-400",
  },
  {
    icon: SiPostgresql,
    name: "PostgreSQL",
    color: "text-sky-800",
  },
  {
    icon: FaNodeJs,
    name: "NodeJs",
    color: "text-lime-500",
  },
  {
    icon: GrDocker,
    name: "Docker",
    color: "text-sky-500",
  },
  {
    icon: SiDotnet,
    name: ".NET",
    color: "text-violet-600",
  },
  {
    icon: FaLayerGroup,
    id: "andMore",
    name: "And much more",
    color: "text-pink-400",
  },
];

export const MyProjects = [
  {
    name: "BoredApeClub",
    img: Bape,
    link: `https://patrykkm.github.io/BoredApeClub/`,
    desc: ``,
    techs: [
      { name: `React`, color: `text-cyan-400` },
      { name: `Tailwindcss`, color: `text-cyan-600` },
      { name: `ReduxToolkit`, color: `text-purple-600` },
      { name: `Framer`, color: `text-sky-400` },
    ],
  },
  {
    name: "Finance",
    img: Finance,
    link: `https://patrykkm.github.io/FinanceApp/`,

    techs: [
      { name: `React`, color: `text-cyan-400` },
      { name: `Tailwindcss`, color: `text-cyan-600` },
      { name: `ChartJS`, color: `text-rose-500` },
      { name: `Redux`, color: `text-purple-600` },
    ],
  },
  {
    name: "Collective",
    img: Collective,
    link: `https://patrykkm.github.io/Collective/`,
    techs: [
      { name: `React`, color: `text-cyan-400` },
      { name: `Tailwindcss`, color: `text-cyan-600` },
    ],
  },

  {
    name: "ClinicPatientDashboard",
    img: AdminPanel,
    link: `https://github.com/PatrykkM/ClinicPatientDashboard`,
    techs: [
      { name: `React`, color: `text-cyan-400` },
      { name: `Tailwindcss`, color: `text-cyan-600` },
      { name: `MySql`, color: `text-sky-800` },
      { name: `Express.js`, color: `text-white` },
      { name: `ReduxToolkit`, color: `text-purple-600` },
    ],
  },
];
