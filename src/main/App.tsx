import "../css/index.css";
import { useState } from "react";
import Header from "../components/Header";
import HelloSection from "../components/HelloSection";
import Tesla3Dmodel from "../components/Models3D/Tesla3Dmodel";
import WaveDelmiter from "../components/Waves/WaveDelmiter";
import Introduction from "../components/Introduction";
import SecondWaveDelmiter from "../components/Waves/SecondWaveDelmiter";
import ThirdWaveDelmiter from "../components/Waves/ThirdWaveDelmiter";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import LastWaveDelmiter from "../components/Waves/LastWaveDelmiter";
import ContactMe from "../components/ContactMe";
import WorkExperience from "../components/WorkExperience";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className="flex flex-col overflow-hidden box-border bg-main-dark min-w-314px dark:bg-main-light">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="mt-18 px-5 sm:px-10 lg:flex lg:max-w-7xl lg:m-auto lg:px-16">
          <HelloSection darkMode={darkMode} />
          <Tesla3Dmodel />
        </div>
        <WaveDelmiter />
        <div className="mt-18 px-5 sm:px-10 lg:p-0 lg:mt-0">
          <Introduction />
        </div>
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
