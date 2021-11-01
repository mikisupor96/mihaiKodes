import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>Mihai Gabriel Pascaru </h1>
        <h2>-Full Stack Web Developer-</h2>
        <Typed
          className="typed-text"
          strings={[
            "Don`t try!",
            "Instead suceed",
            "in what you love",
            "through failure.",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <button type="button" className="btn btn-light">
          <a href="#" className="btn-main-contact">
            CONTACT ME
          </a>
        </button>
      </div>
    </div>
  );
};

export default Header;