import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <h1>-Full Stack Web Developer-</h1>
        <h2>Mihai Gabriel Pascaru</h2>
        <Typed
          className="typed-text"
          strings={[
            "Don`t try!",
            "Instead succeed",
            "in what you love",
            "through failure.",
          ]}
          // typeSpeed={60}
          // backSpeed={60}
          loop
        />
        <button type="button" className="btn btn-light">
          <Link smooth={true} to="contact" className="nav-link">
            CONTACT ME
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
