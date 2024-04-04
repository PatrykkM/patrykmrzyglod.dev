import { motion } from "framer-motion";

import { SingleWorkExperienceProps } from "../../../types/propsTypes";
import { workExperienceMobileVariants } from "../../../utils/motion";

const SingleWorkExperienceMobile = ({ position, id }: SingleWorkExperienceProps) => {
	return (
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
				className="relative z-10 mx-3 my-7 w-4/5 rounded-md border-b-2 border-white bg-Jobs-blue p-4 text-sm"
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true }}
				variants={workExperienceMobileVariants}
			>
				<div className="absolute -left-1 h-3 w-3 rotate-45 bg-Jobs-blue"></div>
				<p className="text-2xl font-bold">{position.name}</p>
				<p>{position.company}</p>
				<p className="p-4 leading-6">{position.description}</p>
				<p>{position.time}</p>
			</motion.div>
		</div>
	);
};

export default SingleWorkExperienceMobile;
