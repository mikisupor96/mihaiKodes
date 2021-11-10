import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="d-flex">
              <p>LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/mihai-gabriel-pascaru-9180a1168/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className="footer-icon"
                  icon={faLinkedin}
                  size="2x"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="d-flex">
              <p>GitHub</p>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  className="footer-icon"
                  icon={faGithub}
                  size="2x"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
