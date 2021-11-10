import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCode,
  faDatabase,
  faCode,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";
import {
  faPhp,
  faJs,
  faHtml5,
  faCss3,
  faPython,
  faReact,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";

const Services = () => {
  return (
    <div id="offer" className="services">
      <h1 className="py-5">WHAT I OFFER</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faPhp} size="2x" />
              </div>
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faJs} size="2x" />
              </div>
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faHtml5} size="2x" />
              </div>
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faCss3} size="2x" />
              </div>
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faPython} size="2x" />
              </div>
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faReact} size="2x" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
              </div>
              <h3>Full Stack Development</h3>
              <p>
                I can design and maintain both the front end and the back end of
                a project as I am versed in languages that encompass both. I
                make use of best practices and maintain and update my code
                regularly to make sure my apps run as best they can.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDatabase} size="2x" />
              </div>
              <h3>Database Management</h3>
              <p>
                I have experience using MongoDB and MySql languages to manage
                and maintain data.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faCode} size="2x" />
              </div>
              <h3>MERN Stack</h3>
              <p>
                I have created various apps using the MERN stack some of which
                include but not limited to YelpCamp lookalike, calculator app,
                the dice game, CMS system.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faTerminal} size="2x" />
              </div>
              <h3>LAMP Stack</h3>
              <p>
                Two of my best projects use the LAMP stack namely Company
                Database and Mapyo, both use PHP for requests whether it would
                be to make requests to an API for data or to a MySql database
                for users' information.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon
                  className="icon"
                  icon={faMicrosoft}
                  size="2x"
                />
              </div>
              <h3>Microsoft certified</h3>
              <p>
                I am the proud owner of my Microsoft Programming in HTML5 with
                JavaScript and CSS3, which certifies me for all basic Web
                Development areas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
