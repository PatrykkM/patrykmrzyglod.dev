import { FaMoon } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";

import { ActiveNavMobileProps } from "../../../types/propsTypes";
import NavItem from "../../common/NavItem";

const ActiveNavMobile = ({
	activeMenu,
	nav,
	handleClick,
	activeIndex,
	scrollToSection,
	handleDarkMode,
	darkMode,
}: ActiveNavMobileProps) => {
	return (
		<>
			{activeMenu ? (
				<div className="fixed right-5 top-20 z-50 rounded-3xl bg-dynamic-menu text-white shadow-lg transition-opacity dark:bg-light-mode-items dark:text-black md:hidden">
					<ul className="flex h-full flex-col items-end justify-around p-6 text-sm font-semibold sm:p-8 sm:text-base">
						{nav.map((e, id) => (
							<NavItem
								e={e}
								id={id}
								key={id}
								handleClick={handleClick}
								scrollToSection={scrollToSection}
								activeIndex={activeIndex}
							/>
						))}
						<div
							className="flex cursor-pointer text-xl text-white dark:text-black"
							onClick={handleDarkMode}
						>
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
					</ul>
				</div>
			) : null}
		</>
	);
};

export default ActiveNavMobile;
