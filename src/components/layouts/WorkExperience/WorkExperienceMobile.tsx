import { WorkExperienceProps } from "../../../types/propsTypes";
import SingleWorkExperienceMobile from "../../common/WorkExperience/SingleWorkExperienceMobile";

const WorkExperienceMobile = ({ JobPositions }: WorkExperienceProps) => {
	return (
		<section className="m-auto -mt-px bg-light-blue p-5 dark:bg-light-blue sm:px-10 lg:hidden lg:max-w-7xl lg:px-16">
			<div className="mt-20 flex flex-col text-slate-50">
				<div className="text-base">What I have done so far</div>
				<div className="mb-18 mt-2 text-3xl font-extrabold lg:text-6xl">Work Experience</div>
				{JobPositions.map((position, id) => (
					<SingleWorkExperienceMobile position={position} id={id} key={id} />
				))}
			</div>
		</section>
	);
};

export default WorkExperienceMobile;
