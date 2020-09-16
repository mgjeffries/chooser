import React, { useState, useContext } from "react"
import { FactorContext } from "./FactorProvider"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import { ModalContext } from "../modals/ModalProvider"


export const FactorDetail = ({factor}) => {
  const { deleteFactor } = useContext(FactorContext)
  const { handleClose } = useContext(ModalContext)
  
  return (
    <>
    <Modal.Header closeButton>
      <Modal.Title>Factor Details</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className="factor__detail">
        <div className="factor__name">
          {factor.name}
        </div>
        <div className="factor__multiplier">
          {factor.multiplier}
        </div>
        <Button 
          onClick={evt => {
            deleteFactor(factor)
          }}
          className="btn">
          delete
        </Button>
      </div>
  </Modal.Body>
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
  
}