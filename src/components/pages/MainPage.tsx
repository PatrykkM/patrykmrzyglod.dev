"use client";

import React, { useEffect, useState } from "react";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.classList.add("dark");
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="dark:bg-primary-600 bg-primary-200 box-border flex min-h-screen min-w-314px flex-col items-center overflow-x-hidden transition-all duration-300">
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
