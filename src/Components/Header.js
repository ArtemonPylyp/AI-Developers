import React from "react";
import "/Users/artempilipenko/Desktop/aidevelopers/src/css/main.css";
import image from "/Users/artempilipenko/Desktop/aidevelopers/src/assets/image.png";

function Header() {
  return (
    <nav
      id="menu"
      className="navbar navbar-expand-xl navbar-default fixed-top bg-white header "
    >
      <div className="container">
        <a href="#header">
          <img src={image} className="logoImage" alt="logoImage" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar navbar-nav margin">
            <li className="list">
              <a href="#about-us" className=" items">
                ПРО НАС
              </a>
            </li>
            <li className="list">
              <a href="#services" className=" items">
                ПОСЛУГИ
              </a>
            </li>
            <li className="list">
              <a href="#stages" className=" items">
                ЕТАПИ ВИРОБНИЦТВА
              </a>
            </li>
            <li className="list">
              <a href="#team" className=" items">
                КОМАНДА
              </a>
            </li>
            <li className="list">
              <a href="#footer" className=" items">
                КОНТАКТИ
              </a>
            </li>
          </ul>
          <div className="dropdown-center ms-3">
            <button
              className="btn btn-outline-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              UA
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="https://artemonpylyp.github.io/ai-developers/en.html">
                  EN
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
