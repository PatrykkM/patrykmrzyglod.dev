import ContactMeSection from "./ContactMeSection";
import PlanetModel3D from "./Planet3Dmodel";

const ContactMe = () => {
	return (
		<div className="w-full bg-Grey-Wave dark:bg-light-mode-items">
			<div className="flex flex-col items-center justify-between p-5 sm:px-10 lg:m-auto lg:max-w-7xl lg:flex-row-reverse lg:px-16 ">
				<PlanetModel3D />
				<ContactMeSection />
			</div>
		</div>
	);
};

export default ContactMe;
