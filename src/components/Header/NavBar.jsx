import React from "react";
import Li from "../smallComponents/Li";
import Logo from "../smallComponents/Logo";
import UL from "../smallComponents/UL";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links-box">
        <Logo imgSrc="/assets/logo.png" imgAlt="Logo" />
        <UL ulClass="navbar-links">
          <Li liClass="nav-link" liLink="#" liText="Home" />
          <Li liClass="nav-link" liLink="#" liText="About Us" />
          <Li liClass="nav-link" liLink="#" liText="Special" />
          <Li liClass="nav-link" liLink="#" liText="Menu" />
          <Li liClass="nav-link" liLink="#" liText="Blogs" />
        </UL>
        <img src="/assets/search.png" alt="" />
      </div>

      <div className="book-now-box">
        <a href="#" className="book-now">
          Book Now
        </a>
      </div>
    </div>
  );
};

export default NavBar;
