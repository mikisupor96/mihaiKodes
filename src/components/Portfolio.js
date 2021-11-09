import React from "react";
import cpdatabase from "../Images/cpdatabase1.jpg";
import mapyo from "../Images/mapyo1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  let config = {
    titleBar: {
      enable: true,
      text: "",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Company Database
  const openCompanyDatabase = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={cpdatabase}
          alt="Company Database project"
        />
        <p className="mt-3">
          In this project, I look at the full stack lifecycle by making use of
          Javascript PHP and MySql to create an HR system that can be used by
          any company. While a system like this can be automatically generated
          by using an online tool, creating this project has helped me to
          understand best practices but most importantly how to scale apps. This
          project was done using a specification provided to me by my tutor and
          mentor.
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

    config["titleBar"]["text"] = "Company Database Project";

    PopupboxManager.open({ content, config });
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
        <p className="mt-3">
          In this project, I make use of API's together with PHP and Javascript
          to create an app that retrieves various pieces of information and
          renders them to the user in an understandable format. This project has
          helped me to understand how to handle data I receive from API calls
          and best practices to use in displaying it in the DOM.
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

    config["titleBar"]["text"] = "Mapyo Project";

    PopupboxManager.open({ content, config });
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
      <PopupboxContainer />
    </div>
  );
};

export default Portfolio;
