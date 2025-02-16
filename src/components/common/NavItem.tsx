interface NavItemProps {
  e: {
    name: string;
  };
  id: number;
  scrollToSection: (sectionId: string) => void;
  handleClick: (id: number) => void;
  activeIndex: number | null;
}

const NavItem = ({
  e,
  id,
  activeIndex,
  scrollToSection,
  handleClick,
}: NavItemProps) => {
  return (
    <li
      onClick={() => handleClick(id)}
      className={`${
        activeIndex === id ? "gradient-text" : ""
      } mb-3 md:mb-0 md:ml-10 md:list-none md:text-base md:font-medium`}
      key={e.name}
    >
      <a href={`#${e.name}`} onClick={() => scrollToSection(e.name)}>
        {e.name}
      </a>
    </li>
  );
};

export default NavItem;
