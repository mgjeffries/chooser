import React, { useRef, useState, useContext } from "react"
import { OptionDetail } from "./OptionDetail"
import Button from "react-bootstrap/Button"
import { ModalContext } from "../modals/ModalProvider"
import Modal from "react-bootstrap/Modal"

export const Option = ({option}) => {
  const { handleShow, setModalContent, handleClose } = useContext(ModalContext)
 

  return <div className="option">

    
    <div className="option__name">{option.name}</div>
    <Button 
      onClick={ clickEvent => {
        setModalContent(
          <>

          <Modal.Header closeButton>
            <Modal.Title>Option Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>Generic Option</Modal.Body>
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