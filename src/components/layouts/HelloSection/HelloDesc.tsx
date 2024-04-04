import { motion } from "framer-motion";

import { LuMouse } from "react-icons/lu";

import { HelloSectionProps } from "../../../types/propsTypes";
import { helloSectionTitleVariants } from "../../../utils/motion";

const HelloDesc = ({ darkMode }: HelloSectionProps) => {
	const motionProps = {
		initial: "offscreen",
		whileInView: "onscreen",
		viewport: { once: true, amount: 0.5 },
		variants: helloSectionTitleVariants,
	};

	return (
		<>
			<div className="flex flex-grow flex-col lg:mt-36">
				<section className="mt-5 flex flex-col text-white dark:text-mian-text-light">
					<motion.div
						{...motionProps}
						className="flex items-center text-5xl font-bold sm:text-7xl lg:text-8xl"
					>
						<h1>Hello</h1>
						<h1 className="mb-1 ml-1">👋</h1>
					</motion.div>
					<motion.h1
						{...motionProps}
						className="gradient-text mt-2 text-4xl font-bold sm:my-5 sm:text-6xl lg:text-8xl"
					>
						I'm Patryk
					</motion.h1>
					<motion.div
						{...motionProps}
						className={`my-2 text-4xl font-bold ${
							darkMode ? `outline-text-light` : `outline-text`
						} italic sm:text-6xl lg:text-8xl `}
					>
						<h1 className="">Frontend</h1>
						<h1 className="mt-2 sm:mt-5 ">Developer</h1>
					</motion.div>
				</section>
				<section className="mt-10 font-medium text-slate-200 dark:text-mian-text-light">
					<p className="leading-8 sm:text-lg  lg:w-96">
						I create user interfaces, develop web applications,
						<span className="gradient-text "> and much more!</span> As a college freshman, I have
						already accumulated almost half year of professional experience in the field and possess
						a strong passion for continuous development and growth. 📈
					</p>
					<div className="mt-10 flex items-center">
						<div className="text-2xl font-extrabold">
							<LuMouse />
						</div>
						<p className="ml-2">scroll down to know me better</p>
					</div>
				</section>
			</div>
		</>
	);
};

export default HelloDesc;
