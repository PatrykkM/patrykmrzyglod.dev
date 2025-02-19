import { FaMoon } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import NavItem from "./components/NavItem";
import { DarkMode } from "./Header";
interface ActiveNavMobileProps {
  activeMenu: boolean;
  nav: { name: string }[];
  handleClick: (id: number) => void;
  activeIndex: number | null;
  scrollToSection: (sectionId: string) => void;
  handleDarkMode: (mode: DarkMode) => void;
  darkMode: DarkMode;
  toggleLanguage: () => void;
  currentLang: string;
}

const ActiveNavMobile = ({
  activeMenu,
  nav,
  handleClick,
  activeIndex,
  scrollToSection,
  handleDarkMode,
  darkMode,
  toggleLanguage,
  currentLang,
}: ActiveNavMobileProps) => {
  return (
    <>
      {activeMenu ? (
        <div className="dark:bg-primary-500 text-primary-900 dark:text-primary-100 bg-primary-300 fixed right-5 top-20 z-50 flex flex-col items-end justify-around gap-4 rounded-3xl p-6 shadow-lg transition-opacity md:hidden">
          <ul className="flex h-full flex-col items-end justify-around gap-4 text-sm font-semibold sm:p-8 sm:text-base">
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
          </ul>
          <div className="flex items-center gap-4">
            <div onClick={() => handleDarkMode(darkMode)}>
              {darkMode === DarkMode.DARK ? (
                <FaMoon size={18} />
              ) : (
                <MdLightMode size={18} />
              )}
            </div>
            <div className="font-semibold" onClick={toggleLanguage}>
              {currentLang.toUpperCase()}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ActiveNavMobile;
