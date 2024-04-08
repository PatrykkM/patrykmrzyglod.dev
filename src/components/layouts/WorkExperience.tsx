import { motion } from "framer-motion";

import { JobPositions } from "../../constants";
import { titleOfSectionVariants } from "../../utils/motion";
import SingleWorkExperienceDesktop from "../common/WorkExperience/SingleWorkExperienceDesktop";
import SingleWorkExperienceMobile from "../common/WorkExperience/SingleWorkExperienceMobile";

const WorkExperience = () => {
	const titleMotionProps = {
		initial: "offscreen",
		whileInView: "onscreen",
		viewport: { once: true, amount: 0.5 },
		variants: titleOfSectionVariants,
	};

	return (
		<div className="bg-light-blue" id="Experience">
			<section className="m-auto -mt-px bg-light-blue p-5 dark:bg-light-blue sm:px-10  lg:max-w-7xl lg:px-16 ">
				<div className="mt-20 flex flex-col text-slate-50">
					<motion.div {...titleMotionProps}>
						<p className="text-base">What i have done so far</p>
						<h2 className="mb-18 mt-2 text-3xl font-extrabold lg:text-6xl">Work Experience</h2>
					</motion.div>
					<div className="block lg:hidden">
						{JobPositions.map((position, id) => (
							<SingleWorkExperienceMobile position={position} id={id} key={id} />
						))}
					</div>
					<div className="hidden lg:block">
						{JobPositions.map((position, id) => (
							<SingleWorkExperienceDesktop position={position} id={id} key={id} />
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default WorkExperience;
