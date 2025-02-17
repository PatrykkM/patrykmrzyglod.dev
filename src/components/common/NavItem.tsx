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
  const handleNavClick = (event: React.MouseEvent) => {
    event.preventDefault();
    handleClick(id);
    scrollToSection(e.name);
  };

  return (
    <li
      className={`${
        activeIndex === id ? "gradient-text" : ""
      } mb-3 md:mb-0  md:list-none md:text-base md:font-medium`}
      key={e.name}
    >
      <a href={`#${e.name}`} onClick={handleNavClick}>
        {e.name}
      </a>
    </li>
  );
};

export default NavItem;
