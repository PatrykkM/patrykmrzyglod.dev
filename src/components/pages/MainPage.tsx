"use client";

import React, { useState } from "react";
import Header from "../layouts/Header/Header";
import HelloSectionWrapper from "../layouts/HelloSection/HelloSectionWrapper";
import FirstWaveDelmiter from "../common/Waves/FirstWaveDelmiter";
import Introduction from "../layouts/Introduction/Introduction";
import SecondWaveDelmiter from "../common/Waves/SecondWaveDelmiter";
import WorkExperience from "../layouts/WorkExperience/WorkExperience";
import ThirdWaveDelmiter from "../common/Waves/ThirdWaveDelmiter";
import Technologies from "../layouts/Technologies/Technologies";
import LastWaveDelmiter from "../common/Waves/LastWaveDelmiter";
import Projects from "../layouts/Projects/Projects";
import ContactMeWrapper from "../layouts/ContactMe/ContactMe";

export const MainPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="box-border flex min-w-314px flex-col overflow-hidden bg-main-light">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <HelloSectionWrapper darkMode={darkMode} />
      <FirstWaveDelmiter />
      <Introduction />
      <SecondWaveDelmiter />
      <WorkExperience />
      <ThirdWaveDelmiter />
      <Technologies />
      <Projects />
      <LastWaveDelmiter />
      <ContactMeWrapper />
    </div>
  );
};
