import emailjs from "emailjs-com";
import { motion } from "framer-motion";

import { useRef, useState } from "react";

const ContactMe = () => {
	const formRef = useRef<HTMLFormElement>(null);
	const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
	const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID as string;
	const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;

	const [actionForm, setActionForm] = useState({
		error: false,
		correct: false,
	});
	const [processing, setProcessing] = useState(false);

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
	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (formRef.current) {
			setProcessing((prev) => !prev); //Będzie TRUE czyli błąd bedzie aktwyny Procesuje sie
			setTimeout(() => {
				emailjs
					.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, USER_ID)
					.then(() => {
						setActionForm((prev) => ({
							...prev,
							correct: !prev.correct,
						}));
						formRef.current?.reset(); //TODO:Redux persist jak ktos wysle ,mozna razy wysłać kolorki zalezne od powodzenia sie akcji
					})
					.catch(() => {
						setActionForm((prev) => ({
							...prev,
							error: !prev.error,
						}));
					});
				setProcessing((prev) => !prev);
			}, 2000); // koniec procesowania
		}
	};
	console.log(actionForm);
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
				<form
					className="font-me mt-5 dark:text-gray-800"
					onSubmit={(e) => sendEmail(e)}
					ref={formRef}
				>
					<div className="mt-8">
						<label htmlFor="from_name">Your Name</label>
						<input
							type="text"
							className="mt-3 w-full  rounded-lg bg-dynamic-menu px-3 py-4 dark:bg-light-mode-items"
							placeholder="What's your name"
							id="from_name"
							name="from_name"
						/>
					</div>
					<div className="mt-8">
						<label htmlFor="from_email">Your Email</label>
						<input
							type="email"
							name="from_email"
							id="from_email"
							className="mt-3 w-full  rounded-lg bg-dynamic-menu px-3 py-4 dark:bg-light-mode-items"
							placeholder="What's your email"
						/>
					</div>
					<div className="mt-8">
						<label htmlFor="message">Your Message</label>
						<textarea
							className="mt-3 flex w-full items-start justify-start rounded-lg bg-dynamic-menu px-3 py-4 dark:bg-light-mode-items"
							placeholder="What's your message"
							rows={10}
							name="message"
							id="message"
						/>
					</div>
					<button
						type="submit"
						className="w-22 mt-7 flex h-12 w-24 items-center  justify-center rounded-2xl bg-light-blue font-medium  dark:text-white"
					>
						{processing ? (
							<div className="border-Light-Green ml-2 h-4 w-4 animate-spin rounded-full border-2 border-t-2 border-t-transparent"></div>
						) : (
							<p>Send</p>
						)}
					</button>
				</form>
			</motion.div>
		</section>
	);
};

export default ContactMe;
