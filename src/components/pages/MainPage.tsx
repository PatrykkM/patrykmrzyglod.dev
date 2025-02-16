"use client";

import React, { useState } from "react";
import Header from "../layouts/Header/Header";
import HelloSection from "../layouts/HelloSection/HelloSectionWrapper";

export const MainPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <HelloSection darkMode={darkMode} />
    </>
  );
};
