import React, { useState } from "react";
import photo from "../images/dimi.jpg";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
// import Modal from "react-modal";
const About = () => {
  const [openedModal, setOpenedModal] = useState(false);

  const handleOpenedModal = () => {
    setOpenedModal(!openedModal);
    console.log(openedModal);
  };

  return (
    <div className="main">
      <div className="photo">
        <img className="photo-image" src={photo} alt="dimi photo" />
      </div>
      <main className="text">
        <p>
          Hi👋, my name is Dmitrijs and I'm a front-end developer from Latvia
          and I am specializing in React
          <br />
          I'm open for relocating and looking to pursue a challenging tech role
          with career opportunities
          <br />
          Feel free to check my{" "}
          <span className="link" onClick={handleOpenedModal}>
            tech stack
          </span>{" "}
          and{" "}
          <Link className="link" to="/projects">
            projects
          </Link>
          ...
        </p>
      </main>
      <Modal
        openedModal={openedModal}
        handleOpenedModal={handleOpenedModal}
        setOpenedModal={setOpenedModal}
      />
    </div>
  );
};

export default About;
