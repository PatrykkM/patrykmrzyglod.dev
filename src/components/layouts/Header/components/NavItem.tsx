import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const handleNavClick = (event: React.MouseEvent) => {
    event.preventDefault();
    handleClick(id);
    scrollToSection(e.name);
  };

  return (
    <li
      className={`${
        activeIndex === id ? "gradient-text" : ""
      }  text-base md:list-none md:text-base md:font-medium`}
      key={e.name}
    >
      <a href={`#${e.name}`} onClick={handleNavClick}>
        {t(`nav.${e.name}`)}
      </a>
    </li>
  );
};

export default NavItem;
