import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [active, setActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  type NavItem = {
    name: string;
  };

  const nav: NavItem[] = [
    {
      name: "Experience",
    },
    {
      name: "About",
    },
    {
      name: "Contact",
    },
  ];
  const handleClick = (id: number) => {
    setActiveIndex(id);
  };
  return (
    <>
      <nav className="flex w-full  bg-main-dark  fixed h-18 border-b border-gray-800 px-5   z-50  sm:px-10  lg:items-center lg:px-0">
        <div className="flex justify-between  items-center w-full  text-lg font-bold tracking-wide lg:h-14 lg:max-w-6xl lg:m-auto lg:px-16  ">
          <div className="gradient-text ">PatrykMrzygłód.dev</div>
          <div
            className="text-2xl  font-bolder text-white transition-opacity cursor-pointer sm:hidden "
            onClick={() => setActive(!active)}
          >
            {active ? <RxCross2 /> : <RxHamburgerMenu />}
          </div>
          <div className=" items-center justify-center text-white hidden sm:flex ">
            {nav.map((e, id) => (
              <li
                onClick={() => handleClick(id)}
                className={`${
                  activeIndex === id ? "gradient-text" : ""
                }  list-none ml-10 text-base font-medium`}
                key={e.name}
              >
                {e.name}
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
                {e.name}
              </li>
            ))}
            <div className="flex">
              <div>x</div>
              <div>x</div>
            </div>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Header;
