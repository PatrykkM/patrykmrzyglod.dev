"use client";

import React from "react";
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
  return (
    <div className="box-border min-w-314px flex flex-col bg-main-light dark:bg-main-dark min-h-screen overflow-x-hidden items-center">
      <Header />
      <HelloSectionWrapper />
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
