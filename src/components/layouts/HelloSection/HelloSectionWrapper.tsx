import HelloDesc from "./HelloDesc";
import Tesla3Dmodel from "./Tesla3Dmodel";

const HelloSectionWrapper = () => {
  return (
    <section
      className="flex w-full flex-col px-5 pt-32 lg:max-w-7xl lg:px-16 lg:pt-40"
      id="Hello"
    >
      <HelloDesc />
      <Tesla3Dmodel />
    </section>
  );
};

export default HelloSectionWrapper;
