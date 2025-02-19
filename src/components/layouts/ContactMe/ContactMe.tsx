import ContactMeSection from "./ContactMeSection";
import PlanetModel3D from "./Planet3Dmodel";
const ContactMeWrapper = () => {
  return (
    <div className="dark:bg-primary-400 bg-primary-300 -mt-1 flex w-full items-center justify-center pb-5 transition-colors duration-300 lg:pb-10">
      <div className="flex w-full flex-col items-center justify-between p-5 sm:px-10 lg:max-w-7xl lg:flex-row-reverse lg:px-16">
        <PlanetModel3D />
        <ContactMeSection />
      </div>
    </div>
  );
};

export default ContactMeWrapper;
