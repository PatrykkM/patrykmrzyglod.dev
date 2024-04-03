import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";

import { AlertProps } from "../../types/propsTypes";

const Alert = ({ darkMode }: AlertProps) => {
	const [showPopUp, setShowPopUp] = useState(false);
	const [siteLoaded, setSiteLoaded] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setSiteLoaded(true);
		}, 1000);
	}, []);

	useEffect(() => {
		if (siteLoaded) {
			setShowPopUp((prev) => !prev);

			const timer = setTimeout(() => {
				setShowPopUp((prev) => !prev);
			}, 1000);
			return () => clearTimeout(timer);
		}
	}, [darkMode]);

	return (
		<div
			className={`${
				showPopUp ? `-translate-y-5 opacity-100` : `translate-y-16 opacity-0`
			}  fixed bottom-0 left-1/2 z-9999 flex -translate-x-1/2 transform items-center rounded-2xl bg-main-dark px-5 py-3 text-sm font-medium text-white  shadow-2xl transition-all dark:bg-light-mode-items dark:text-black`}
		>
			{darkMode ? (
				<>
					<div>Hello Sunshine</div>
					<div className="ml-2 text-xl text-yellow-500">
						<MdLightMode />
					</div>
				</>
			) : (
				<>
					<div>Hello Darkness</div>
					<div className="ml-2 text-lg text-yellow-300">
						<FaMoon />
					</div>
				</>
			)}
		</div>
	);
};

export default Alert;
