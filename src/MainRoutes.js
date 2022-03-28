import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./Components/AboutMe/AboutMe";
import Experience from "./Components/Experience/Experience";
import { Layout } from "./Components/Layout/Layout";
import Education from "./Components/Education/Education";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AboutMe />} />
        <Route path="experience" element={<Experience />} />
        <Route path="education" element={<Education />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
