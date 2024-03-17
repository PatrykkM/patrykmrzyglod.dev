import emailjs from "emailjs-com";
import { motion } from "framer-motion";

import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { UserSentFormCorrectly, UserSentFormError } from "../assets/redux/slices/userSentForm";
import { RootState } from "../assets/redux/store";

const ContactMe = () => {
	const dispatch = useDispatch();
	const formRef = useRef<HTMLFormElement>(null);
	const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
	const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID as string;
	const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
	const isUserSendFormCorrectly = useSelector((state: RootState) => state.userSentFrom.correct);
	const isUserSendFormError = useSelector((state: RootState) => state.userSentFrom.error);

	const [processing, setProcessing] = useState(false);
	const [shake, setShake] = useState(false);
	const [isShaking, setIsShaking] = useState(false);

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
		if (formRef.current && !isUserSendFormCorrectly && !isUserSendFormError && !processing) {
			setProcessing((prev) => !prev);
			emailjs
				.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, USER_ID)
				.then(() => {
					formRef.current?.reset();
					dispatch(UserSentFormCorrectly());
				})
				.catch(() => {
					dispatch(UserSentFormError(true));
				});
			setTimeout(() => {
				setProcessing((prev) => !prev);
				setTimeout(() => {
					dispatch(UserSentFormError(false));
				}, 3000);
			}, 2000);
		} else {
			formRef.current?.reset();
		}
	};
	const handleShakeAlert = () => {
		if (isShaking === false) {
			setShake(true);
			setIsShaking(true);

			setTimeout(() => {
				setShake(false);
				setIsShaking(false);
			}, 700);
		}
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
						onClick={handleShakeAlert}
						type="submit"
						className={`w-22 mt-7 flex h-12 w-24 items-center justify-center rounded-2xl  font-medium dark:text-white ${isUserSendFormError && !processing ? `bg-red-600` : ``} ${isUserSendFormCorrectly && !processing ? `bg-green-500` : `bg-light-blue`}`}
					>
						{processing ? (
							<div className="border-Light-Green ml-2 h-4 w-4 animate-spin rounded-full border-2 border-t-2 border-t-transparent"></div>
						) : isUserSendFormCorrectly ? (
							<p>Sent!</p>
						) : isUserSendFormError ? (
							<p>Error</p>
						) : (
							<p>Send</p>
						)}
					</button>
					{isUserSendFormCorrectly && !processing ? (
						<div className="mt-6 text-xs">
							<p className={`${shake ? `animate-shake` : ``}`}>
								* Thank you, your email has been sent.
							</p>
						</div>
					) : null}
				</form>
			</motion.div>
		</section>
	);
};

export default ContactMe;
