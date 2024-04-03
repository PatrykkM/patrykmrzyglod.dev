import { FaCss3Alt, FaGitAlt, FaHtml5, FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import { GrDocker, GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import { MdOutlineWebAsset, MdPhoneIphone } from "react-icons/md";
import {
	SiDotnet,
	SiFramer,
	SiRedux,
	SiTailwindcss,
	SiThreedotjs,
	SiTypescript,
} from "react-icons/si";

import Collective from "../assets/img/Collective.jpg";
import Finance from "../assets/img/Finance2.png";
import Bape from "../assets/img/In-ProggresBape.png";
import AdminPanel from "../assets/img/adminPanel.jpg";
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
		icon: FaReact,
		name: "React",
		color: "text-cyan-400",
	},
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
		icon: SiFramer,
		name: "Framer",
		color: "text-sky-400",
	},
	{
		icon: GrMysql,
		name: "Mysql",
		color: "text-sky-800",
	},
	{
		icon: SiThreedotjs,
		name: "Three.js",
		color: "text-black",
	},
	{
		icon: FaNodeJs,
		name: "NodeJs",
		color: "text-lime-500",
	},
	{
		icon: GrDocker,
		name: "Docker",
		color: "text-sky-600",
	},
	{
		icon: SiDotnet,
		name: ".NET",
		color: "text-violet-600",
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
		techs: "#React #Redux #Tailwindcss #Chart.js",
	},
	{
		name: "Collective",
		img: Collective,
		link: `https://patrykkm.github.io/Collective/`,
		desc: `Collective is an innovative e-commerce platform that redefines online shopping with its groundbreaking design and exceptional user experience. At Collective, the focus is on an intuitive, user-friendly interface.`,
		techs: "#React #Tailwindcss",
	},
	{
		name: "BoredApeClub",
		img: Bape,
		link: `https://patrykkm.github.io/BoredApeClub/`,
		desc: `The Bored Ape Club is an NFT Shop & Club, your go-to platform for delving into the exciting world of NFTs. This application stands as a beacon of modern design and functionality, offering a seamless, responsive experience across all devices. Here, you can buy and sell NFTs, all showcased in an aesthetically pleasing design enhanced by tools like Framer.`,
		techs: "#React #ReduxToolkit #Tailwindcss",
	},
	{
		name: "ClinicPatientDashboard",
		img: AdminPanel,
		link: `https://github.com/PatrykkM/ClinicPatientDashboard`,
		desc: `This full-stack application serves as a sophisticated admin panel that streamlines the management of client data. It features a clean, modern interface that allows administrators to efficiently add, remove, edit, and search for clients.`,
		techs: "#React #ReduxToolkit #Tailwindcss #Express.js #MySql",
	},
];