import { motion } from "framer-motion";

import { WorkExperienceProps } from "../../../types/propsTypes";

const WorkExperienceMobile = ({ JobPositions }: WorkExperienceProps) => {
	const infoVariants = {
		offscreen: {
			x: 100,
			opacity: 0,
		},
		onscreen: {
			x: 0,
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 100,
				damping: 20,
				duration: 0.5,
			},
		},
	};

	return (
		<section className="m-auto -mt-px bg-light-blue p-5 dark:bg-light-blue sm:px-10 lg:hidden lg:max-w-7xl lg:px-16">
			<div className="mt-20 flex flex-col text-slate-50">
				<div className="text-base">What I have done so far</div>
				<div className="mb-18 mt-2 text-3xl font-extrabold lg:text-6xl">Work Experience</div>
				{JobPositions.map((position, id) => (
					<div key={id} className="flex w-full justify-center rounded-md">
						<div className="flex w-1/5 justify-center">
							<div className="relative w-1 bg-white">
								<div className="absolute left-1/2 top-[25px] h-12 w-12  -translate-x-1/2 lg:h-16 lg:w-16">
									<img
										src={position.img}
										alt={`Logo of ${position.company}`}
										className="h-full w-full rounded-full"
									/>
								</div>
							</div>
						</div>
						<motion.div
							className="relative z-10 mx-3 my-7 w-4/5 rounded-md border-b-2 border-white bg-Jobs-blue p-4 text-sm "
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ once: true }}
							variants={infoVariants}
						>
							<div className="absolute -left-1 h-3 w-3 rotate-45 bg-Jobs-blue"></div>
							<div className="text-2xl font-bold">{position.name}</div>
							<div>{position.company}</div>
							<div className="p-4 leading-6">{position.description}</div>
							<div>{position.time}</div>
						</motion.div>
					</div>
				))}
			</div>
		</section>
	);
};

export default WorkExperienceMobile;
