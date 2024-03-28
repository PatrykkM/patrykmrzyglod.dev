import { motion } from "framer-motion";

import { ContactformVariants } from "../../../utils/motion";
import FormContact from "./FormContact";

const ContactMeSection = () => {
	return (
		<section className="text-white lg:w-128" id="Contact">
			<motion.div
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true }}
				variants={ContactformVariants}
				className="rounded-xl  bg-main-dark p-7 dark:bg-main-light"
			>
				<div className="mt-2 text-sm uppercase text-gray-400 dark:text-gray-500">Get in touch</div>
				<div className="my-2 text-3xl font-bold dark:text-black sm:text-5xl"> Contact</div>
				<div className="mt-4 text-gray-400 dark:text-gray-500">
					I appreciate any communication you can provide via
					<a href="mailto:patrykmrzyglod3@gmail.com" className="gradient-text ml-1 font-bold">
						email
					</a>
					,
					<a
						href="https://www.linkedin.com/in/patrykmrzyg%C5%82%C3%B3d/"
						className="gradient-text ml-px mr-1 font-bold"
					>
						LinkedIn
					</a>
					or the form provided below.
				</div>
				<FormContact />
			</motion.div>
		</section>
	);
};

export default ContactMeSection;
