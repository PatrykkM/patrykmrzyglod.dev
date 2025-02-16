import HelloDesc from "./HelloDesc";
import Tesla3Dmodel from "./Tesla3Dmodel";

const HelloSectionWrapper = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <section className="flex w-full flex-col justify-between px-5 sm:px-10 lg:m-auto lg:flex lg:max-w-7xl lg:flex-row lg:px-16">
      <HelloDesc darkMode={darkMode} />
      <Tesla3Dmodel />
    </section>
  );
};

export default HelloSectionWrapper;
