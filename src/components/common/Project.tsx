import { motion, useAnimation } from "framer-motion";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { ProjectsProps } from "../../types/propsTypes";
import { projectVariants } from "../../utils/motion";

const Project = ({ index, project }: ProjectsProps) => {
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
				<a href={project.link} target="_blank">
					<img
						src={project.img}
						alt={`Photo of my project named ${project.name}`}
						className="h-52 w-full object-cover "
					/>
				</a>
			</div>
			<div className="mt-3 flex flex-grow flex-col">
				<h3 className="text-2xl font-bold">{project.name}</h3>
				<p className="mt-3 text-sm text-gray-300 dark:text-gray-500">{project.desc}</p>
			</div>
			<div className="flex flex-wrap">
				{project.techs.map((e, id) => (
					<p className={`${e.color} mr-[3px] mt-3 text-sm`} key={id}>
						#{e.name}
					</p>
				))}
			</div>
		</motion.div>
	);
};

export default Project;
