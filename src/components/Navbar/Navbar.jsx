import React, { useState } from "react";
import "./Navbar.scss";
import { HashLink } from "react-router-hash-link";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.svg";
import Hero from "../Hero/Hero";
import Market from "../Market/Market";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img alt="Logo" src={logo} />
      </div>
      <ul className={click ? "navMenu active" : "navMenu"}>
        <li>
          <HashLink smooth to="/Hero/#heroSection" className="nav-items">
            Home
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/Market/#market" className="nav-items">
            Market
          </HashLink>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
    </nav>
  );
};

export default Navbar;
