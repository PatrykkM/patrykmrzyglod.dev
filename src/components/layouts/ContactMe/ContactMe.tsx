import ContactMeSection from "./ContactMeSection";
import PlanetModel3D from "./Planet3Dmodel";
const ContactMeWrapper = () => {
  return (
    <div className="w-full dark:bg-Grey-Wave bg-light-mode-items flex items-center justify-center">
      <div className="flex flex-col items-center justify-between p-5 sm:px-10  lg:max-w-7xl lg:flex-row-reverse lg:px-16 w-full ">
        <PlanetModel3D />
        <ContactMeSection />
      </div>
    </div>
  );
};

export default ContactMeWrapper;
