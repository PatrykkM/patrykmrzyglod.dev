import emailjs from "emailjs-com";

import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { UserSentFormCorrectly, UserSentFormError } from "../../../redux/slices/userSentForm";
import { RootState } from "../../../redux/store";

const FormContact = () => {
	const dispatch = useDispatch();
	const formRef = useRef<HTMLFormElement>(null);
	const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
	const USER_ID = import.meta.env.VITE_USER_ID;
	const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
	const isUserSendFormCorrectly = useSelector((state: RootState) => state.userSentFrom.correct);
	const isUserSendFormError = useSelector((state: RootState) => state.userSentFrom.error);

	const [processing, setProcessing] = useState(false);
	const [shake, setShake] = useState(false);
	const [isShaking, setIsShaking] = useState(false);

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
		<form className="font-me mt-5 dark:text-gray-800" onSubmit={(e) => sendEmail(e)} ref={formRef}>
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
	);
};

export default FormContact;
