import { motion } from "framer-motion";

import React from "react";
import { useInView } from "react-intersection-observer";

import { KnowledgeItems } from "../../constans";

const Introduction: React.FC = () => {
	const combinedVariants = {
		hidden: { y: -50, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.5 },
		},
	};

	const itemVariants = {
		hidden: { x: -100, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 100,
				duration: 0.5,
			},
		},
	};

	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<div className="mt-18 px-5 sm:px-10 lg:mt-0 lg:p-0">
			<section ref={ref} className="flex flex-col text-white lg:m-auto lg:max-w-7xl lg:px-16 ">
				<motion.div
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
					variants={combinedVariants}
					className="uppercase text-gray-500"
				>
					Introduction
				</motion.div>
				<motion.div
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
					variants={combinedVariants}
					className="my-2 text-3xl font-bold dark:text-mian-text-light sm:text-5xl lg:text-6xl"
				>
					Overview
				</motion.div>
				<p className="leading-7 text-gray-500">
					I am an experienced software engineer with strong skills in JavaScript and TypeScript,
					focusing on front-end development using frameworks like React. My expertise includes
					creating efficient, scalable, and user-friendly solutions that address real-world
					problems. I am known for my quick learning abilities and my commitment to closely
					collaborating with clients to deliver impactful applications.
				</p>
				<div className="z-10 sm:flex sm:flex-wrap">
					{KnowledgeItems.map((item, index) => {
						const [ref, inView] = useInView({
							triggerOnce: true,
							threshold: 0.1,
						});

						return (
							<motion.div
								className="mr-6 mt-10 flex h-40 w-full flex-col items-center justify-center rounded-xl bg-dynamic-menu text-center text-xl dark:bg-light-mode-items sm:h-64 sm:w-56"
								key={index}
								ref={ref}
								variants={itemVariants}
								initial="hidden"
								animate={inView ? "visible" : "hidden"}
							>
								<div className="pb-1 text-4xl text-blue-300 dark:text-main-dark">
									<item.src />
								</div>
								<div className="pt-1 font-semibold text-blue-600 dark:text-light-blue">
									{item.name}
								</div>
							</motion.div>
						);
					})}
				</div>
			</section>
		</div>
	);
};

export default Introduction;
