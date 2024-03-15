import { FaCss3Alt, FaGitAlt, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { GrDocker } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import { MdOutlineWebAsset, MdPhoneIphone } from "react-icons/md";
import { SiFramer, SiRedux, SiTailwindcss, SiThreedotjs, SiTypescript } from "react-icons/si";

import Collective from "../assets/img/Collective.jpg";
import Finance from "../assets/img/Finance2.png";
import Bape from "../assets/img/In-ProggresBape.png";
import biotiq from "../assets/img/biotiq.jpeg";
import ignatium from "../assets/img/ignatium.png";
import nanovo from "../assets/img/nanovo.png";

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
export const JobPositions = [
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
export const KnowledgeItems = [
	{
		name: "React Developer",
		src: FaReact,
	},
	{
		name: "Web Developer",
		src: MdOutlineWebAsset,
	},
	{
		name: "Responsive Web Designer",
		src: MdPhoneIphone,
	},
];
export const MyTechnologies = [
	{
		icon: FaHtml5,
		name: "HTML5",
		color: "text-orange-600",
	},
	{
		icon: FaCss3Alt,
		name: "CSS3",
		color: " text-sky-500",
	},
	{
		icon: FaReact,
		name: "React",
		color: "text-cyan-400",
	},
	{
		icon: SiTypescript,
		name: "Typescript",
		color: "text-blue-900",
	},
	{
		icon: SiRedux,
		name: "Redux Toolkit",
		color: "text-purple-600",
	},
	{
		icon: FaSass,
		name: "Sass",
		color: "text-pink-400",
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
		icon: FaGitAlt,
		name: "Git",
		color: "text-orange-700",
	},
	{
		icon: GrDocker,
		name: "Docker",
		color: "text-sky-600",
	},
	{
		icon: SiThreedotjs,
		name: "Three.js",
		color: "text-black",
	},
	{
		icon: SiFramer,
		name: "Framer",
		color: "text-sky-400",
	},
];

export const MyProjects = [
	{
		name: "Finance",
		img: Finance,
		link: `https://patrykkm.github.io/FinanceApp/`,
		desc: `FinanceApp is a finance application that allows users to simulate the buying and selling
        of stocks from top global companies. It aims to provide a brokerage-like experience, enabling
        users to monitor markets and invest in stocks virtually`,
		techs: "#React #Redux #Tailwindcss",
	},
	{
		name: "Collective",
		img: Collective,
		link: `https://patrykkm.github.io/Collective/`,
		desc: `Collective is an innovative e-commerce platform that redefines online shopping with its groundbreaking design and exceptional user experience. At Collective, the focus is on an intuitive, user-friendly interface.`,
		techs: "#React #Tailwindcss",
	},
	{
		name: "BoredApe.com",
		img: Bape,
		link: `https://patrykkm.github.io/BoredApeClub/`,
		desc: `in-progres`,
		techs: "#React #ReduxToolkit #Tailwindcss",
	},
];
