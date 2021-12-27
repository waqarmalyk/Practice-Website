import React, { useState } from "react";
import Hamburger from "./images/menu.svg";
import Exit from "./images/exit.svg";
import Hero from "./Hero";
import "./NavBar.css";

const NavBar = () => {
  const [mobileMenu, setMobileMenu] = useState(true);

  const menuToggle = (prevState) => {
    setMobileMenu(!prevState);
  };

  return (
    <>
      <div className="navbar">
        <div className="container">
          <a className="logo" href="#">
            Nothing<span>Special</span>
          </a>

          <img
            className={`${mobileMenu ? "menu-btn" : "hide"}`}
            onClick={() => menuToggle()}
            src={Hamburger}
            alt="Hamburger menu"
          />
          <nav>
            <img className="mobile-menu-close" src={Exit} alt="close menu" />
            <ul className="primary-nav">
              <li className="current">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
            <ul className="secondary-nav">
              <li>
                <a href="#">Contact</a>
              </li>
              <li className="premium">
                <a href="#">Go Premium</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Hero />
    </>
  );
};

export default NavBar;
