import React from "react";
import cv from "../images/cv.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import mail from "../images/mail.png";
import cvpdf from "../images/DMITRJJS_PAKLONS.pdf";

const Contact = () => (
  <div className="full-contact-page">
    <div className="contact-page">
      <a className="contact-page__image--link " target="_blank" href={cvpdf}>
        <img className="contact-page__image--image" src={cv} alt="cv image" />
      </a>

      <a
        className="contact-page__image--link "
        target="_blank"
        href="https://github.com/dim4ik2911"
      >
        <img
          className="contact-page__image--image"
          src={github}
          alt="github image"
        />
      </a>

      <a
        className="contact-page__image--link "
        target="_blank"
        href="https://www.linkedin.com/in/dmitrijs-paklons/"
      >
        <img
          className="contact-page__image--image"
          src={linkedin}
          alt="linkedin image"
        />
      </a>

      <a
        className="contact-page__image--link"
        href="mailto:dim4ik2911@gmail.com"
      >
        <img
          className="contact-page__image--image"
          src={mail}
          alt="mail image"
        />
      </a>
    </div>
  </div>
);

export default Contact;
