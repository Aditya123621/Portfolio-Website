import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";

import { ImAddressBook } from "react-icons/im";
import "./Header.css";
import Logo from "../../images/logo.png";
import Logo1 from "../../images/logo1.png";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../Redux/features/theme/themeSlice";
const Header = () => {
  const theme = useSelector((state) => state.theme.value || false);

  const dispatch = useDispatch();
  const handleTheme = () => {
    dispatch(toggle());
  };
  return (
    <>
      <div
        className={`header ${
          theme ? "header-dark-mode " : "header-light-mode "
        }`}
      >
        <div className="logo">
          <NavLink to="/" className={"logobox"}>
            {theme ? (
              <img src={Logo1} alt="logo" />
            ) : (
              <img src={Logo} alt="logo" />
            )}
          </NavLink>
        </div>
      </div>
      <nav className=" menu ">
        <ul
          className={`navbar-icon ${
            theme ? "navbar-icon-dark" : "navbar-icon-light"
          }`}
        >
          <li className="nav-icon">
            <NavLink
              to="/"
              className={`navlink home ${
                theme ? "navlink-dark " : "navlink-light"
              }`}
            >
              <AiFillHome className="home-icon" />
            </NavLink>
          </li>
          <li className="nav-icon">
            <NavLink
              to="/project"
              className={`navlink project ${
                theme ? "navlink-dark " : "navlink-light"
              }`}
            >
              <BsFillBriefcaseFill className="project-icon" />
            </NavLink>
          </li>
          <li className="nav-icon">
            <button
              className={`navlink themeButton contact ${
                theme ? "navlink-dark " : "navlink-light"
              }`}
              onClick={handleTheme}
            >
              {theme ? (
                <FaSun className="sun" />
              ) : (
                <BsFillMoonStarsFill className="moon" />
              )}
            </button>
          </li>
          <li className="nav-icon">
            <NavLink
              to="/about"
              className={`navlink about ${
                theme ? "navlink-dark " : "navlink-light"
              }`}
            >
              <FaUserAlt className="about-icon" />
            </NavLink>
          </li>
          <li className="nav-icon">
            <NavLink
              to="/contact"
              className={`navlink contact ${
                theme ? "navlink-dark " : "navlink-light"
              }`}
            >
              <ImAddressBook className="contact-icon" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
