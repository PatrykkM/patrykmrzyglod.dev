import { NavItem } from "./common";

export interface HeaderProps {
	darkMode: boolean;
	setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface ActiveNavMobileProps {
	activeMenu: boolean;
	nav: NavItem[];
	handleClick: (id: number) => void;
	activeIndex: number | null;
	scrollToSection: (sectionId: string) => void;
	handleDarkMode: () => void;
	darkMode: boolean;
}
