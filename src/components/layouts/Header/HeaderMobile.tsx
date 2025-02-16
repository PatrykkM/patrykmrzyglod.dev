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
}

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
        <div className="fixed right-5 top-20 z-50 rounded-3xl dark:bg-dynamic-menu text-text-light-mode shadow-lg transition-opacity bg-light-mode-items dark:text-text-dark-mode md:hidden">
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
              className="flex cursor-pointer text-xl text-text-light-mode dark:text-text-dark-mode"
              onClick={handleDarkMode}
            >
              {darkMode ? <FaMoon /> : <MdLightMode />}
            </div>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default ActiveNavMobile;
