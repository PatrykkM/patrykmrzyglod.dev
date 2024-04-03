import { motion, useAnimation } from "framer-motion";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { WorkExperienceProps } from "../../../types/propsTypes";
import { workExperienceTitleVariants } from "../../../utils/motion";
import SingleWorkExperienceDesktop from "../../common/WorkExperience/SingleWorkExperienceDesktop";

const WorkExperienceDesktop = ({ JobPositions }: WorkExperienceProps) => {
	const controls = useAnimation();
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.5,
	});

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		} else {
			controls.start("hidden");
		}
	}, [controls, inView]);

	const titleMotionProps = {
		initial: "hidden",
		animate: controls,
		variants: workExperienceTitleVariants,
	};

	return (
		<section className="m-auto -mt-px hidden bg-light-blue p-5 dark:bg-light-blue sm:px-10 lg:block lg:max-w-7xl lg:px-16">
			<div className="mt-20  flex flex-col text-slate-50">
				<motion.div ref={ref} className="text-base" {...titleMotionProps}>
					What i have done so far
				</motion.div>
				<motion.div
					ref={ref}
					className="mb-18 mt-2 text-3xl font-extrabold lg:text-6xl"
					{...titleMotionProps}
				>
					Work Experience
				</motion.div>
				{JobPositions.map((position, id) => (
					<SingleWorkExperienceDesktop position={position} id={id} key={id} />
				))}
			</div>
		</section>
	);
};

export default WorkExperienceDesktop;
