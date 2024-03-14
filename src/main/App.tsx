import { useState } from "react";

import ContactMe from "../components/ContactMe";
import Header from "../components/Header/Header";
import HelloSection from "../components/HelloSection";
import Introduction from "../components/Introduction";
import PlanetModel3D from "../components/Models3D/Planet3Dmodel";
import Tesla3Dmodel from "../components/Models3D/Tesla3Dmodel";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import LastWaveDelmiter from "../components/Waves/LastWaveDelmiter";
import SecondWaveDelmiter from "../components/Waves/SecondWaveDelmiter";
import ThirdWaveDelmiter from "../components/Waves/ThirdWaveDelmiter";
import WaveDelmiter from "../components/Waves/WaveDelmiter";
import WorkExperience from "../components/WorkExperience/WorkExperience";
import "../css/index.css";

function App() {
	const [darkMode, setDarkMode] = useState(false);

	return (
		<>
			<div className="box-border flex min-w-314px flex-col overflow-hidden bg-main-dark dark:bg-main-light">
				<Header darkMode={darkMode} setDarkMode={setDarkMode} />
				<div className="mt-18 flex w-full flex-col justify-between px-5 sm:px-10 lg:m-auto lg:flex lg:max-w-7xl lg:flex-row lg:px-16 ">
					<HelloSection darkMode={darkMode} />
					<Tesla3Dmodel />
				</div>
				<WaveDelmiter />
				<div className="mt-18 px-5 sm:px-10 lg:mt-0 lg:p-0">
					<Introduction />
				</div>
				<SecondWaveDelmiter />
				<WorkExperience />
				<ThirdWaveDelmiter />
				<div>
					<Technologies />
				</div>
				<Projects />
				<LastWaveDelmiter />
				<div className="w-full bg-Grey-Wave dark:bg-light-mode-items">
					<div className="flex flex-col items-center justify-between p-5 sm:px-10 lg:m-auto lg:max-w-7xl lg:flex-row-reverse lg:px-16  ">
						<PlanetModel3D />
						<ContactMe />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
