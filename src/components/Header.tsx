import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { MdLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  const [active, setActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  type NavItem = {
    name: string;
  };

  const nav: NavItem[] = [
    {
      name: "Experience",
    },
    {
      name: "Technologies",
    },
    {
      name: "Contact",
    },
  ];
  const handleClick = (id: number) => {
    setActiveIndex(id);
  };
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };
  const handleDarkMode = () => {
    document.body.classList.toggle("dark");
    setDarkMode(!darkMode);
  };
  return (
    <>
      <nav className="flex w-full  bg-main-dark  fixed h-18 border-b border-gray-800 px-5   z-9999  sm:px-10  lg:items-center lg:px-0 dark:bg-main-light dark:border-gray-400">
        <div className="flex justify-between  items-center w-full  text-lg font-bold tracking-wide lg:h-14 lg:max-w-7xl lg:m-auto lg:px-16  ">
          <div className="gradient-text ">PatrykMrzygłód.dev</div>
          <div
            className="text-2xl  font-bolder text-white transition-opacity cursor-pointer sm:hidden "
            onClick={() => setActive(!active)}
          >
            {active ? <RxCross2 /> : <RxHamburgerMenu />}
          </div>
          <div className=" items-center justify-center text-white hidden sm:flex  dark:text-black">
            {nav.map((e, id) => (
              <li
                onClick={() => handleClick(id)}
                className={`${
                  activeIndex === id ? "gradient-text" : ""
                }  list-none ml-10 text-base font-medium`}
                key={e.name}
              >
                <a href={`#${e.name}`} onClick={() => scrollToSection(e.name)}>
                  {e.name}
                </a>
              </li>
            ))}
          </div>
        </div>
      </nav>
      {active ? (
        <div className="fixed bg-dynamic-menu  rounded-3xl right-5 top-20 text-white transition-opacity z-50 sm:hidden">
          <ul className=" flex flex-col p-6 items-end justify-around h-full font-semibold text-sm sm:text-base sm:p-8 ">
            {nav.map((e, id) => (
              <li
                onClick={() => handleClick(id)}
                className={`${activeIndex === id ? "gradient-text" : ""} mb-3`}
                key={e.name}
              >
                <a href={`#${e.name}`} onClick={() => scrollToSection(e.name)}>
                  {e.name}
                </a>
              </li>
            ))}
            <div className="flex text-white text-xl" onClick={handleDarkMode}>
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

export default Header;
