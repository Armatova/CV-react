import React from "react";
import { NavLink } from "react-router-dom";
import img from "../img/img1.jpg";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <img
          style={{ width: "150px", height: "150px", borderRadius: "50%" }}
          src={img}
          alt=""
          width="150px"
        />
        <NavLink to="/">Aizada Sarybaeva</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/education">Education</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
