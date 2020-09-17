import React, { useState, useContext } from "react"
import { OptionContext } from "./OptionProvider"
import Button from "react-bootstrap/Button"
import { ModalContext } from "../modals/ModalProvider"
import Modal from "react-bootstrap/Modal"


export const OptionDetail = ({option}) => {
  const { deleteOption } = useContext(OptionContext)
  const { handleClose } = useContext(ModalContext)

  return (
    <>
    <Modal.Header closeButton>
      <Modal.Title>Option Details</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className="option__detail">
        <div className="option__name">
          {option.name}
        </div>
        <Button 
          onClick={evt => {
            deleteOption(option)
            handleClose()
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