import { motion } from "framer-motion";

import "react-icons/si";

import { MyTechnologies } from "../../constans";

const Technologies = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				when: "beforeChildren",
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.4 },
		},
	};

	return (
		<section
			className="mt-17 flex flex-col px-5 font-semibold text-white dark:text-light-blue sm:px-10 lg:m-auto lg:max-w-7xl lg:px-16 "
			id="Technologies"
		>
			<div className="text-sm uppercase text-gray-400">My knowledge of</div>
			<div className="mt-2 text-3xl font-extrabold dark:text-mian-text-light lg:text-6xl">
				Technologies
			</div>
			<motion.div
				className="sm:flex sm:flex-wrap"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
			>
				{MyTechnologies.map((tech, index) => (
					<motion.div
						key={index}
						className="mt-10 flex h-36 flex-col items-center justify-center rounded-xl bg-dynamic-menu shadow-md dark:bg-light-mode-items sm:mr-5 sm:flex sm:h-52 sm:w-52 sm:flex-wrap"
						variants={itemVariants}
					>
						<div className={`mb-1 text-4xl ${tech.color} sm:text-5xl`}>
							<tech.icon />
						</div>
						<div className="mt-2">{tech.name}</div>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
};

export default Technologies;
