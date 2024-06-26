import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

import { nav } from "../../../constants/index";
import { HeaderProps } from "../../../types/propsTypes";
import NavItem from "../../common/NavItem";
import Alert from "../Alert";
import ActiveNavMobile from "./ActiveNavMobile";

const Header = ({ darkMode, setDarkMode }: HeaderProps) => {
	const [activeMenu, setActiveMenu] = useState(false);
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const scrollToSection = (sectionId: string) => {
		const section = document.getElementById(sectionId);
		section?.scrollIntoView({ behavior: "smooth" });
	};

	const handleDarkMode = () => {
		document.body.classList.toggle("dark");
		setDarkMode((prev) => (prev = !prev));
		setActiveMenu((prev) => (prev = !prev));
	};

	const handleClick = (id: number) => {
		setActiveIndex(id);
		setActiveMenu((prev) => !prev);
	};

	const ActiveNavMobileProps = {
		activeMenu: activeMenu,
		nav: nav,
		handleClick: handleClick,
		activeIndex: activeIndex,
		scrollToSection: scrollToSection,
		handleDarkMode: handleDarkMode,
		darkMode: darkMode,
	};

	return (
		<>
			<nav className="fixed z-9999 flex h-18 w-full border-b border-gray-800 bg-transparent px-5 backdrop-blur-lg backdrop-filter dark:border-gray-400 sm:px-10 lg:items-center lg:px-0">
				<div className="flex w-full items-center justify-between text-lg font-bold tracking-wide lg:m-auto lg:h-14 lg:max-w-7xl lg:px-16">
					<h2 className="gradient-text">PatrykMrzygłód.dev</h2>
					<div
						className="font-bolder cursor-pointer text-2xl text-white transition-opacity dark:text-black md:hidden"
						onClick={() => setActiveMenu(!activeMenu)}
					>
						{activeMenu ? <RxCross2 /> : <RxHamburgerMenu />}
					</div>
					<div className="hidden cursor-pointer items-center justify-center text-white  dark:text-black md:flex">
						{nav.map((e, id) => (
							<NavItem
								e={e}
								id={id}
								key={id}
								scrollToSection={scrollToSection}
								handleClick={handleClick}
								activeIndex={activeIndex}
							/>
						))}
						<div className="ml-10 flex text-xl text-white dark:text-black" onClick={handleDarkMode}>
							{darkMode ? (
								<div>
									<FaMoon />
								</div>
							) : (
								<div>
									<MdLightMode />
								</div>
							)}
						</div>
					</div>
				</div>
			</nav>
			<ActiveNavMobile {...ActiveNavMobileProps} />
			<Alert darkMode={darkMode} />
		</>
	);
};

export default Header;
