import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <footer>My contacts</footer> */}
    </>
  );
};

export { Layout };
