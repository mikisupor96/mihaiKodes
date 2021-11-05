import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                smooth={true}
                offset={-50}
                to="home"
                className="nav-link active"
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                offset={-50}
                to="about"
                className="nav-link active"
              >
                ABOUT ME
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} offset={-20} to="offer" className="nav-link">
                WHAT I OFFER
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                offset={-20}
                to="experience"
                className="nav-link"
              >
                EXPERIENCE
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                offset={-20}
                to="projects"
                className="nav-link"
              >
                PROJECTS
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="contact" className="nav-link">
                CONTACT ME
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
