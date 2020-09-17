import React, { useState, useContext } from "react"
import { ChoiceContext } from "./ChoiceProvider"
import Button from "react-bootstrap/Button"
import { ModalContext } from "../modals/ModalProvider"
import Modal from "react-bootstrap/Modal"


export const ChoiceDelete = (props) => {
  const { deleteChoice } = useContext(ChoiceContext)
  const { handleClose } = useContext(ModalContext)

  return (
    <>
    <Modal.Header closeButton>
      <Modal.Title>Are you sure you want to delete this choice?</Modal.Title>
    </Modal.Header>
    <Modal.Footer>
      <Button 
        onClick={evt => {
          deleteChoice(props.choice)
          props.history.push("/")
          handleClose()
        }}
        className="btn">
        delete
      </Button>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
    </>
  )
}