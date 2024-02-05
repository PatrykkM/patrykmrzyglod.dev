import "../css/index.css";
import Header from "../components/Header";
import HelloSection from "../components/HelloSection";
import Tesla3Dmodel from "../components/Models3D/Tesla3Dmodel";
import WaveDelmiter from "../components/Waves/WaveDelmiter";
import Introduction from "../components/Introduction";
import SecondWaveDelmiter from "../components/Waves/SecondWaveDelmiter";
import WorkExperience from "../components/WorkExperience";
import ThirdWaveDelmiter from "../components/Waves/ThirdWaveDelmiter";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import LastWaveDelmiter from "../components/Waves/LastWaveDelmiter";
import ContactMe from "../components/ContactMe";
function App() {
  return (
    <>
      <div className="flex flex-col overflow-hidden box-border bg-main-dark min-w-314px">
        <Header />
        <div className="mt-18 px-5 sm:px-10">
          <HelloSection />
          <Tesla3Dmodel />
        </div>
        <WaveDelmiter />
        <div className="mt-18 px-5 sm:px-10">
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
