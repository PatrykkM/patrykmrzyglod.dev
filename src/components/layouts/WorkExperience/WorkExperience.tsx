import { JobPositions } from "../../../constans";
import WorkExperienceDesktop from "./WorkExperienceDesktop";
import WorkExperienceMobile from "./WorkExperienceMobile";

const WorkExperience = () => {
	return (
		<div className="bg-light-blue" id="Experience">
			<WorkExperienceMobile JobPositions={JobPositions} />
			<WorkExperienceDesktop JobPositions={JobPositions} />
		</div>
	);
};

export default WorkExperience;
