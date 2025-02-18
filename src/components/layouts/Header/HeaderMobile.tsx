import { FaMoon } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import NavItem from "../../common/NavItem";

interface ActiveNavMobileProps {
  activeMenu: boolean;
  nav: { name: string }[];
  handleClick: (id: number) => void;
  activeIndex: number | null;
  scrollToSection: (sectionId: string) => void;
  handleDarkMode: () => void;
  darkMode: boolean;
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
        <div className="p-6 fixed right-5 top-20 z-50 rounded-3xl dark:bg-dynamic-menu text-text-light-mode shadow-lg transition-opacity bg-light-mode-items dark:text-text-dark-mode md:hidden flex flex-col items-end justify-around gap-4">
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
          <div className="flex gap-4 items-center">
            <div onClick={handleDarkMode}>
              {darkMode ? <FaMoon size={18} /> : <MdLightMode size={18} />}
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
