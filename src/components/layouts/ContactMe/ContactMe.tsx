import { motion } from "framer-motion";

import ContactMeSection from "./ContactMeSection";
import PlanetModel3D from "./Planet3Dmodel";

const ContactMe = () => {
	const containerVariants = {
		offscreen: {
			opacity: 0,
		},
		onscreen: {
			opacity: 1,
			transition: {
				when: "beforeChildren",
				staggerChildren: 0.3,
			},
		},
	};
	return (
		<div className="w-full bg-Grey-Wave dark:bg-light-mode-items">
			<motion.div
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true }}
				variants={containerVariants}
				className="flex flex-col items-center justify-between p-5 sm:px-10 lg:m-auto lg:max-w-7xl lg:flex-row-reverse lg:px-16"
			>
				<PlanetModel3D />
				<ContactMeSection />
			</motion.div>
		</div>
	);
};

export default ContactMe;
