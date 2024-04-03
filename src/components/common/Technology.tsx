import { motion } from "framer-motion";

import { TechProps } from "../../types/propsTypes";
import { SingleTechnologyVariants } from "../../utils/motion";

const Technology = ({ tech, index }: TechProps) => {
	return (
		<motion.div
			key={index}
			className="mt-10 flex h-36 flex-col items-center justify-center rounded-xl bg-dynamic-menu shadow-md dark:bg-light-mode-items sm:mr-5 sm:flex sm:h-52 sm:w-52 sm:flex-wrap"
			variants={SingleTechnologyVariants}
		>
			<div className={`mb-1 text-4xl ${tech.color} sm:text-5xl`}>
				<tech.icon />
			</div>
			<div className="mt-2">{tech.name}</div>
		</motion.div>
	);
};

export default Technology;
