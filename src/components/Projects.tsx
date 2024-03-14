import { motion, useAnimation } from "framer-motion";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import Collective from "../assets/img/Collective.jpg";
import Finance from "../assets/img/Finance2.png";
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
		<section className="mt-18 flex flex-col px-5 font-medium text-white sm:px-10 lg:m-auto lg:mt-18 lg:max-w-7xl lg:px-16">
			<motion.div
				ref={headerRef}
				initial="hidden"
				animate={headerControls}
				variants={headerVariants}
			>
				<p className="text-sm uppercase text-gray-500 sm:text-base">My work</p>
				<div className="mt-2 text-3xl font-extrabold dark:text-mian-text-light sm:text-5xl">
					Projects
				</div>
				<p className="mt-4 text-gray-500">
					The purpose of the projects presented here was to demonstrate my abilities and background
					while seeking my initial employment. Every project is succinctly summarized, including
					links to their respective code repositories. These works were developed earlier, and I am
					currently working on more sophisticated and polished projects. Keep an eye out for
					updates!
				</p>
			</motion.div>
			<div className="flex-wrap justify-center sm:flex sm:justify-start">
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
							className="mb-8 mt-18 flex flex-col rounded-lg bg-dynamic-menu p-5 font-normal dark:bg-light-mode-items dark:text-blue-800 sm:mr-6 sm:w-92"
						>
							<div className="overflow-hidden rounded-lg">
								<a href={project.link} target="_blank" className="">
									<img
										src={project.img}
										alt={`Photo of my project named ${project.name}`}
										className="h-52 w-full object-cover "
									/>
								</a>
							</div>
							<div className="mt-3 flex flex-grow flex-col">
								<span className="text-2xl font-bold">{project.name}</span>
								<p className="mt-3 text-sm text-gray-300 dark:text-gray-500">{project.desc}</p>
							</div>
							<div className="mt-3 text-sm text-orange-400">{project.techs}</div>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;
