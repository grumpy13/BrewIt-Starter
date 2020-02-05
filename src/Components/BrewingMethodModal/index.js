import React from "react";
//Components
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import AmountCalculator from "../AmountCalculator/index";
import Timer from "../Timer";
import Instructions from "../Instructions";

//Styling
import "../../style.css";
import "../../Modal.css";

const BrewingMethodModal = ({ brewingMethod, handleToggle, modalState }) => {
  return (
    <Modal size="lg" isOpen={modalState} toggle={handleToggle}>
      <ModalHeader toggle={handleToggle}>{brewingMethod.name}</ModalHeader>
      <ModalBody>
        <AmountCalculator brewingMethod={brewingMethod} />
        <div className="wrapper-details-inst">
          <Timer brewingMethod={brewingMethod} />
          <Instructions brewingMethod={brewingMethod} />
        </div>
      </ModalBody>
      <ModalFooter>
        <button className="button button-dark" onClick={handleToggle}>
          Cancel
        </button>
      </ModalFooter>
    </Modal>
  );
};
export default BrewingMethodModal;
