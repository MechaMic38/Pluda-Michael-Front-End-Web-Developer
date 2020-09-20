import "../CSS/Footer.css";
import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

function Footer() {
  return (
    <section className="footer">
      <a className="smoothscroll footer__goToTop" href="#home">
        <KeyboardArrowUpIcon />
      </a>

      <div className="footer__content row">
        <div className="twelve columns">
          <ul className="footer__socialIcons">
            <a
              href="https://www.facebook.com/michael.pluda/"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit my Facebook page!"
            >
              <li>
                <FacebookIcon className="footer__socialIcon" />
              </li>
            </a>
            <a
              href="https://github.com/MechaMic38"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit my GitHub page!"
            >
              <li>
                <GitHubIcon className="footer__socialIcon" />
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/michael-pluda-a33b171b6/"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit my LinkedIn page!"
            >
              <li>
                <LinkedInIcon className="footer__socialIcon" />
              </li>
            </a>
          </ul>

          <ul className="footer__copyright">
            <li>
              © All credit goes to Pluda Michael (aka MechaMic_38) - Copyright
              2020 Pluda Michael
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
