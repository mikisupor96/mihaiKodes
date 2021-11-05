import React from "react";
import cpdatabase from "../Images/cpdatabase1.jpg";
import mapyo from "../Images/mapyo1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  // TODO: Clean this up please and add descriptions
  // Company Database
  const openCompanyDatabase = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={cpdatabase}
          alt="Company Database project"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          corporis expedita alias! Nulla velit tempora delectus deserunt.
          Cupiditate porro itaque officia deleniti provident, assumenda ratione
          similique sit nihil unde maxime?
        </p>
        <p>
          <b>GitHub: </b>
          <a
            target="_blank"
            className="hyper-link"
            href="https://github.com/mikisupor96/Company-Database"
          >
            https://github.com/mikisupor96/Company-Database
          </a>
        </p>

        <p>
          <b>Live: </b>
          <a
            target="_blank"
            className="hyper-link"
            href="https://cpdatabase.herokuapp.com/"
          >
            https://cpdatabase.herokuapp.com/
          </a>
        </p>
      </>
    );

    PopupboxManager.open({ content });
  };

  const configCompanyDatabase = {
    titleBar: {
      enable: true,
      text: "Company Database Project",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Mapyo
  const openMapyo = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={mapyo}
          alt="Mapyo project"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          corporis expedita alias! Nulla velit tempora delectus deserunt.
          Cupiditate porro itaque officia deleniti provident, assumenda ratione
          similique sit nihil unde maxime?
        </p>
        <p>
          <b>GitHub: </b>
          <a
            target="_blank"
            className="hyper-link"
            href="https://github.com/mikisupor96/Mapyo"
          >
            https://github.com/mikisupor96/Mapyo
          </a>
        </p>

        <p>
          <b>Live: </b>
          <a
            target="_blank"
            className="hyper-link"
            href="https://mapyo.herokuapp.com/"
          >
            https://mapyo.herokuapp.com/
          </a>
        </p>
      </>
    );

    PopupboxManager.open({ content });
  };

  const configMapyo = {
    titleBar: {
      enable: true,
      text: "Mapyo Project",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div id="projects" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-center py-5">PORTFOLIO</h1>
        <div className="image-box-wrapper row row-cols-auto justify-content-center">
          <div className="portfolio-image-box" onClick={openCompanyDatabase}>
            <img
              className="portfolio-image img-thumbnail"
              src={cpdatabase}
              alt="company database project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          <div className="portfolio-image-box" onClick={openMapyo}>
            <img
              className="portfolio-image img-thumbnail"
              src={mapyo}
              alt="mapyo project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...configCompanyDatabase} />
      <PopupboxContainer {...configMapyo} />
    </div>
  );
};

export default Portfolio;
