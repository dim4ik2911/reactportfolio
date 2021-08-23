import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
  <div className="modal-form">
    <Modal
      isOpen={props.openedModal}
      contentLabel="Tech Stack"
      //on request close person can clisn esc button or on any place on the screen and the modal will close
      onRequestClose={props.handleOpenedModal}
      closeTimeoutMS={200}
      ariaHideApp={false}
    >
      <button onClick={props.handleOpenedModal}>Okay</button>
    </Modal>
  </div>
);
export default OptionModal;
