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
      <nav className="flex w-full bg-main-dark  fixed h-18 border-b border-gray-800 px-5   z-50 ">
        <div className="flex justify-between  items-center w-full  text-lg font-bold tracking-wide ">
          <div className="gradient-text ">PatrykMrzygłód.dev</div>
          <div
            className="text-2xl  font-bolder text-white transition-opacity cursor-pointer"
            onClick={() => setActive(!active)}
          >
            {active ? <RxCross2 /> : <RxHamburgerMenu />}
          </div>
        </div>
      </nav>
      {active ? (
        <div className="fixed bg-dynamic-menu h-36 w-32 rounded-3xl right-5 top-20 text-white transition-opacity z-50">
          <ul className=" flex flex-col px-6 items-end justify-around h-full font-semibold text-sm">
            {nav.map((e, id) => (
              <li
                onClick={() => handleClick(id)}
                className={activeIndex === id ? "gradient-text" : ""}
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
