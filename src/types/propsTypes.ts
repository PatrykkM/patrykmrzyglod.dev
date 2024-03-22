import { JobPositionTypes } from "./common";
import { NavItemTypes } from "./common";

export interface HeaderProps {
	darkMode: boolean;
	setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface ActiveNavMobileProps {
	activeMenu: boolean;
	nav: NavItemTypes[];
	handleClick: (id: number) => void;
	activeIndex: number | null;
	scrollToSection: (sectionId: string) => void;
	handleDarkMode: () => void;
	darkMode: boolean;
}
export interface WorkExperienceProps {
	JobPositions: JobPositionTypes[];
}
export interface HelloSectionProps {
	darkMode: boolean;
}
