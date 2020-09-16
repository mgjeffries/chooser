import React, { useRef, useState, useContext } from "react"
import { FactorDetail } from "./FactorDetail"
import Button from "react-bootstrap/Button"
import { ModalContext } from "../modals/ModalProvider"
import Modal from "react-bootstrap/Modal"


export const Factor = ({factor}) => {
  const { handleShow, setModalContent, handleClose } = useContext(ModalContext)

  

  return <div className="factor">
    <div className="factor__name">{factor.name}</div>
    <div className="factor__multiplier">{factor.multiplier}</div>
    <Button 
      onClick={ clickEvent => {
        setModalContent(
          <>
          <Modal.Header closeButton>
            <Modal.Title>Factor Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>Generic Factor</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
          </>
          )
        handleShow()
      }}
       > 
      detail
    </Button>
  </div>
}