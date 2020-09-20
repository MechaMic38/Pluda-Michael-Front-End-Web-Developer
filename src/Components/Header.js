import "../CSS/Header.css";
import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

function Header() {
  return (
    <header className="header" id="home">
      <div className="header__nav" id="nav_links">
        <ul id="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#skills">
              Skills
            </a>
          </li>
        </ul>
      </div>

      <div className="header__banner row">
        <div className="header__bannerText">
          <h1 className="header--responsiveHeadline">I'm Pluda Michael</h1>
          <p>
            I'm an Italian <span>Front-End Web Developer && UI Designer</span>.
            <br />
            IT Engineering University student, with a passion for website
            development.
          </p>
          <hr />
          <ul className="header__socialIcons">
            <a
              href="https://www.facebook.com/michael.pluda/"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit my Facebook page!"
            >
              <li>
                <FacebookIcon className="header__socialIcon" />
              </li>
            </a>
            <a
              href="https://github.com/MechaMic38"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit my GitHub page!"
            >
              <li>
                <GitHubIcon className="header__socialIcon" />
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/michael-pluda-a33b171b6/"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit my LinkedIn page!"
            >
              <li>
                <LinkedInIcon className="header__socialIcon" />
              </li>
            </a>
          </ul>
        </div>
      </div>

      <a className="smoothscroll header__goDown" href="#about">
        <KeyboardArrowDownIcon />
      </a>
    </header>
  );
}

export default Header;
