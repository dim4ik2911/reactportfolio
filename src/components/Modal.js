import React from "react";
import Modal from "react-modal";
import css from "../images/modal-images/css.svg";
import firebase from "../images/modal-images/firebase.svg";
import git from "../images/modal-images/git.svg";
import github from "../images/modal-images/github.svg";
import html from "../images/modal-images/html.svg";
import javascript from "../images/modal-images/javascript.svg";
import npm from "../images/modal-images/npm.svg";
import react from "../images/modal-images/react.svg";
import sass from "../images/modal-images/sass.svg";
import vsc from "../images/modal-images/vsc.svg";
import webpack from "../images/modal-images/webpack.svg";
import babel from "../images/modal-images/babel.svg";
import heroku from "../images/modal-images/heroku.svg";

const OptionModal = (props) => (
  <div>
    <Modal
      isOpen={props.openedModal}
      contentLabel="Tech Stack"
      //on request close person can clisn esc button or on any place on the screen and the modal will close
      onRequestClose={props.handleOpenedModal}
      closeTimeoutMS={200}
      ariaHideApp={false}
    >
      <div className="modal-tools">
        <img className="modal-tools-image" src={css} alt="css_image" />
        <img className="modal-tools-image" src={sass} alt="sass_image" />
        <img className="modal-tools-image" src={vsc} alt="vsc_image" />
        <img className="modal-tools-image" src={react} alt="react_image" />
        <img className="modal-tools-image" src={npm} alt="npm_image" />
        <img className="modal-tools-image" src={heroku} alt="heroku_image" />
        <img className="modal-tools-image" src={git} alt="git_image" />
        <img className="modal-tools-image" src={github} alt="github_image" />
        <img
          className="modal-tools-image"
          src={javascript}
          alt="javascript_image"
        />
        <img className="modal-tools-image" src={html} alt="html_image" />
        <img
          className="modal-tools-image"
          src={firebase}
          alt="firebase_image"
        />
        <img className="modal-tools-image" src={babel} alt="babel_image" />
        <img className="modal-tools-image" src={webpack} alt="webpack_image" />
      </div>
      <div className="modal-tools-button">
        <button
          className="modal-tools-button-form"
          onClick={props.handleOpenedModal}
        >
          🔥👌🤙
        </button>
      </div>
    </Modal>
  </div>
);

export default OptionModal;
