import { useState } from "react";

import ContactMe from "./components/layouts/ContactMe/ContactMe";
import Header from "./components/layouts/Header/Header";
import HelloSection from "./components/layouts/HelloSection/HelloSection";
import Introduction from "./components/layouts/Introduction";
import Projects from "./components/layouts/Projects";
import Technologies from "./components/layouts/Technologies";
import LastWaveDelmiter from "./components/layouts/Waves/LastWaveDelmiter";
import SecondWaveDelmiter from "./components/layouts/Waves/SecondWaveDelmiter";
import ThirdWaveDelmiter from "./components/layouts/Waves/ThirdWaveDelmiter";
import WaveDelmiter from "./components/layouts/Waves/WaveDelmiter";
import WorkExperience from "./components/layouts/WorkExperience";
import "./css/index.css";

function App() {
	const [darkMode, setDarkMode] = useState(false);

	return (
		<>
			<div className="box-border flex min-w-314px flex-col overflow-hidden bg-main-dark dark:bg-main-light">
				<Header darkMode={darkMode} setDarkMode={setDarkMode} />
				<HelloSection darkMode={darkMode} />
				<WaveDelmiter />
				<Introduction />
				<SecondWaveDelmiter />
				<WorkExperience />
				<ThirdWaveDelmiter />
				<Technologies />
				<Projects />
				<LastWaveDelmiter />
				<ContactMe />
			</div>
		</>
	);
}

export default App;
