import React, { useRef, useState } from "react"
import { OptionDetail } from "./OptionDetail"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

export const Option = ({option}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return <div className="option">

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Option Details</Modal.Title>
      </Modal.Header>
      <Modal.Body><OptionDetail option={option} /></Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
    <div className="option__name">{option.name}</div>
    <div className="option__multiplier">{option.multiplier}</div>
    <Button 
      onClick={handleShow} > 
      detail
    </Button>
  </div>
}