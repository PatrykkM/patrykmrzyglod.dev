import { motion } from "framer-motion";

import { LuMouse } from "react-icons/lu";

import { HelloSectionProps } from "../../../types/propsTypes";

const HelloDesc = ({ darkMode }: HelloSectionProps) => {
	const textVariants = {
		offscreen: {
			y: -50,
			opacity: 0,
		},
		onscreen: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				ease: "easeInOut",
				stiffness: 80,
				damping: 10,
				duration: 1,
			},
		},
	};

	return (
		<>
			<div className="flex flex-grow flex-col lg:mt-36">
				<section className="mt-5 flex flex-col text-white dark:text-mian-text-light">
					<motion.h1
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0.5 }}
						variants={textVariants}
						className="flex items-center text-5xl font-bold sm:text-7xl lg:text-8xl"
					>
						<div>Hello</div>
						<div className="mb-1 ml-1">👋</div>
					</motion.h1>
					<motion.h2
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0.5 }}
						variants={textVariants}
						className="gradient-text mt-2 text-4xl font-bold sm:my-5 sm:text-6xl lg:text-8xl"
					>
						I'm Patryk
					</motion.h2>
					<motion.div
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0.5 }}
						variants={textVariants}
						className={`my-2 text-4xl font-bold ${
							darkMode ? `outline-text-light` : `outline-text`
						} italic sm:text-6xl lg:text-8xl `}
					>
						<div className="">Frontend</div>
						<div className="mt-2 sm:mt-5 ">Developer</div>
					</motion.div>
				</section>
				<section className="mt-10 font-medium text-slate-200 dark:text-mian-text-light">
					<div className="leading-8 sm:text-lg  lg:w-96">
						I create user interfaces, develop web applications,
						<span className="gradient-text "> and much more!</span> As a college freshman, I have
						already accumulated almost half year of professional experience in the field and possess
						a strong passion for continuous development and growth. 📈
					</div>
					<div className="mt-10 flex items-center">
						<div className="text-2xl font-extrabold">
							<LuMouse />
						</div>
						<div className="ml-2">scroll down to know me better</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default HelloDesc;
