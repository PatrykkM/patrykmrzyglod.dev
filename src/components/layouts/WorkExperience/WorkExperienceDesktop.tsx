import { motion, useAnimation } from "framer-motion";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { WorkExperienceProps } from "../../../types/propsTypes";

const WorkExperienceDesktop: React.FC<WorkExperienceProps> = ({ JobPositions }) => {
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

	const titleVariants = {
		hidden: { opacity: 0, y: -50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5 },
		},
	};
	return (
		<section className="m-auto -mt-px hidden bg-light-blue p-5 dark:bg-light-blue sm:px-10 lg:block lg:max-w-7xl lg:px-16">
			<div className="mt-20  flex flex-col text-slate-50">
				<motion.div
					ref={ref}
					initial="hidden"
					animate={controls}
					variants={titleVariants}
					className="text-base"
				>
					What i have done so far
				</motion.div>
				<motion.div
					ref={ref}
					initial="hidden"
					animate={controls}
					variants={titleVariants}
					className="mb-18 mt-2 text-3xl font-extrabold lg:text-6xl"
				>
					Work Experience
				</motion.div>
				{JobPositions.map((position, id) => (
					<div className="z-50 flex w-full justify-center rounded-md" key={position.company}>
						<div
							className={`${
								id % 2 === 0 ? `invisible` : `flex`
							}  relative z-10 mx-3 my-7 flex w-4/5 flex-col rounded-md border-b-2 border-white bg-Jobs-blue p-4 text-sm`}
						>
							<div className="absolute -right-1 h-3  w-3 rotate-45  bg-Jobs-blue  "></div>
							<div className="text-2xl font-bold">{position.name}</div>
							<div>{position.company}</div>
							<div className="p-4 leading-6">{position.description}</div>
							<div>{position.time}</div>
						</div>
						<div className="flex w-1/5 justify-center">
							<div className="relative w-1 bg-white">
								<div className=" absolute left-1/2 top-6 h-16 w-16 -translate-x-1/2 rounded-full">
									<img src={position.img} alt="" className="h-full w-full rounded-full" />
								</div>
							</div>
						</div>
						<div
							className={`${
								id % 2 !== 0 ? `invisible` : `flex`
							}  relative mx-3 my-7 flex w-4/5 flex-col rounded-md border-b-2  border-white bg-Jobs-blue p-4 text-sm`}
						>
							<div className="absolute -left-1 h-3  w-3 rotate-45 bg-Jobs-blue  "></div>
							<div className="text-2xl font-bold">{position.name}</div>
							<div>{position.company}</div>
							<div className="p-4 leading-6">{position.description}</div>
							<div>{position.time}</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default WorkExperienceDesktop;
