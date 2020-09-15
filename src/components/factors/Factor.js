import React, { useRef, useState } from "react"
import { FactorDetail } from "./FactorDetail"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

export const Factor = ({factor}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return <div className="factor">

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Factor Details</Modal.Title>
      </Modal.Header>
      <Modal.Body><FactorDetail factor={factor} /></Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
    <div className="factor__name">{factor.name}</div>
    <div className="factor__multiplier">{factor.multiplier}</div>
    <Button 
      onClick={handleShow} > 
      detail
    </Button>
  </div>
}