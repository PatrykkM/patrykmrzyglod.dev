import { motion } from "framer-motion";

const ContactMe = () => {
	const formVariants = {
		offscreen: {
			x: -100,
			opacity: 0,
		},
		onscreen: {
			x: 0,
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 100,
				damping: 20,
			},
		},
	};

	return (
		<section className="text-white lg:w-128" id="Contact">
			<motion.div
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true }}
				variants={formVariants}
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
				<form action="" className="font-me mt-5 dark:text-gray-800">
					<div className="mt-8">
						<p>Your Name</p>
						<input
							type="text"
							className="mt-3 w-full  rounded-lg bg-dynamic-menu px-3 py-4 dark:bg-light-mode-items"
							placeholder="What's your name"
						/>
					</div>
					<div className="mt-8">
						<p>Your Email</p>
						<input
							type="email"
							className="mt-3 w-full  rounded-lg bg-dynamic-menu px-3 py-4 dark:bg-light-mode-items"
							placeholder="What's your email"
						/>
					</div>
					<div className="mt-8">
						<p>Your Message</p>
						<textarea
							className="mt-3 flex w-full items-start justify-start rounded-lg bg-dynamic-menu px-3 py-4 dark:bg-light-mode-items"
							placeholder="What's your message"
							rows={10}
						/>
					</div>
					<button
						type="submit"
						className="mt-7 rounded-2xl bg-light-blue px-7 py-3 font-medium dark:text-white "
					>
						Send
					</button>
				</form>
			</motion.div>
		</section>
	);
};

export default ContactMe;
