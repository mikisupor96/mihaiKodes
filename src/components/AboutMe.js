import React from "react";
import profile from "../Images/profile.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={profile} alt="profile" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">WHO ARE YOU?</h1>
          <p>
            My name is Mihai and I am an avid coder, lifter and gamer, I make
            sure I always suceed in the projects I undertake by planning my
            project goals, persevering through buggy code and seeking help when
            I really struggle.
          </p>
          <h1 className="about-heading">WHY SHOULD I HIRE YOU?</h1>
          <p>
            Most people who join the world of Web Development they do so becuase
            they hear of how much money is to be made. I just like spending my
            time solving the problems from my code to make it better and learn
            of better and more efficient ways to code. I look at code like giant
            riddles waiting to be unravelled.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
