import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          I crafted this movie app, offering a vast film collection from diverse
          genres. Users enjoy personalized recommendations and comprehensive
          film information for an immersive cinematic experience, anytime and
          anywhere.
          <br />
          Lights, camera, action - your favorite movies are now at your
          fingertips!
        </div>
        <div className="socialIcons">
          <a
            href="https://github.com/Rahul-go1503"
            target="_blank"
            rel="noopener noreferrer"
          > 
            <span className="icon">
              <FaGithub />
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/rahul-goyal-1503/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <FaLinkedin />
            </span>
          </a>

          <a
            href="https://twitter.com/RahulGo1503"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <FaTwitter />
            </span>
          </a>

          <a
            href="https://www.instagram.com/rahul_goyal153/"
            target="_blank"
            rel="noopener noreferrer"
          >
            
            <span className="icon">
              <FaInstagram />
            </span>
          </a>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
