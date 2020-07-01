import React from "react";
import { Modal, Button } from "react-bootstrap";

function GistsProfileModal(props) {
  const hideGistsProfileModal = () => {
    props.undisplayGistsProfileModal(false);
  };
  return (
    <Modal show={props.showGistsProfileModal} onHide={hideGistsProfileModal}>
      <Modal.Header closeButton>
        <Modal.Title>Name</Modal.Title>
      </Modal.Header>

      <Modal.Footer>
        <Button variant="secondary" onClick={hideGistsProfileModal}>
          Close
        </Button>
        <Button variant="primary" onClick={hideGistsProfileModal}>
          Check Github
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default GistsProfileModal;
