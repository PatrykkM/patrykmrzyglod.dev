"use client";

import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { animate } from "framer-motion";
import { useTranslation } from "react-i18next";

import Alert from "../../common/Alert";
import NavItem from "../../common/NavItem";
import HeaderMobile from "./HeaderMobile";

const Header = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);
  const [darkMode, setDarkMode] = useState(true);

  const nav = [
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

  const [activeMenu, setActiveMenu] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -100;
      const targetPosition =
        section.getBoundingClientRect().top + window.scrollY + yOffset;

      animate(window.scrollY, targetPosition, {
        duration: 0.8,
        onUpdate: (value) => window.scrollTo(0, value),
        ease: [0.32, 0.72, 0, 1],
      });
    }
  };

  useEffect(() => {
    document.body.classList.add("dark");
  }, []);

  const handleDarkMode = () => {
    if (isAnimating) return;
    document.body.classList.toggle("dark");
    setDarkMode((prev) => (prev = !prev));
    setActiveMenu((prev) => (prev = !prev));
  };

  const handleClick = (id: number) => {
    setActiveIndex(id);
    setActiveMenu((prev) => !prev);
  };

  const toggleLanguage = () => {
    const newLang = currentLang === "de" ? "en" : "de";
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
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
      <header className="fixed z-9999 w-full flex border-b dark:border-gray-800 bg-transparent px-5 backdrop-blur-lg backdrop-filter border-gray-400 sm:px-10 lg:items-center lg:px-0 py-5 top-0 left-0">
        <div className="flex w-full items-center justify-between text-lg font-bold tracking-wide lg:m-auto lg:h-14 lg:max-w-7xl lg:px-16">
          <h2
            className="gradient-text cursor-pointer"
            onClick={() => scrollToSection("Hello")}
          >
            PatrykMrzygłód.dev
          </h2>
          <div
            className="font-bolder cursor-pointer text-2xl dark:text-text-dark-mode transition-opacity text-text-light-mode md:hidden"
            onClick={() => setActiveMenu(!activeMenu)}
          >
            {activeMenu ? <RxCross2 /> : <RxHamburgerMenu />}
          </div>
          <div className="hidden cursor-pointer items-center justify-center dark:text-text-dark-mode text-text-light-mode md:flex gap-10">
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
            <div
              className="cursor-pointer font-medium"
              onClick={toggleLanguage}
            >
              {currentLang.toUpperCase()}
            </div>
            <div
              className="flex text-xl text-text-light-mode dark:text-text-dark-mode"
              onClick={handleDarkMode}
            >
              {darkMode ? <FaMoon /> : <MdLightMode />}
            </div>
          </div>
        </div>
        <HeaderMobile {...ActiveNavMobileProps} />
      </header>
      <Alert darkMode={darkMode} setIsAnimating={setIsAnimating} />
    </>
  );
};

export default Header;
