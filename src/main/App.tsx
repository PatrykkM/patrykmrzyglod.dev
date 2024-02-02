import "../css/index.css";
import Header from "../components/Header";
import HelloSection from "../components/HelloSection";
import Tesla3Dmodel from "../components/Tesla3Dmodel";
import WaveDelmiter from "../components/WaveDelmiter";
import Introduction from "../components/Introduction";
import SecondWaveDelmiter from "../components/SecondWaveDelmiter";
import WorkExperience from "../components/WorkExperience";
import ThirdWaveDelmiter from "../components/ThirdWaveDelmiter";
import Technologies from "../components/Technologies";

function App() {
  return (
    <>
      <div className="flex flex-col overflow-hidden box-border bg-main-dark ">
        <Header />
        <div className="mt-18 px-5">
          <HelloSection />
          <Tesla3Dmodel />
        </div>
        <WaveDelmiter />
        <div className="mt-18 px-5">
          <Introduction />
        </div>
        <SecondWaveDelmiter />
        <WorkExperience />
        <ThirdWaveDelmiter />
        <Technologies />
      </div>
    </>
  );
}

export default App;
