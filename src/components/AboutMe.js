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
            My name is Mihai and I am an avid coder, lifter, and gamer, I make
            sure I always succeed in the projects I undertake by planning my
            project goals, persevering through buggy code, and seeking help when
            I struggle.
          </p>
          <h1 className="about-heading">WHAT SETS YOU APART?</h1>
          <p>
            When I first started my journey in Web Development years ago I never
            thought I would end up completing fully functioning projects, I
            experienced moments where I thought `This is too complicated, maybe
            I'm just not meant for this`, but the next day I got back at the
            problem and did everything in my power to solve it.
          </p>
        </div>
      </div>
      <div className="row">
        <h1 className="about-heading">GET A COPY OF MY CV!</h1>
        <p>
          If you are interested to hear more get a copy of my CV and send me an
          email by filling the form below I would be happy to hear back from
          you.
        </p>
        <a href="../CV.docx" download>
          Click to download
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
