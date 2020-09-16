import React, { useState, useContext } from "react"
import { RatingContext } from "./RatingProvider"
import Button from "react-bootstrap/Button"
import { ModalContext } from "../modals/ModalProvider"
import Modal from "react-bootstrap/Modal"


export const RatingDetail = ({rating, factor, option}) => {
  const { handleClose } = useContext(ModalContext)

  return (
    <>
    <Modal.Header closeButton>
      <Modal.Title>Rating Details</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className="rating__detail">
        <div>Rating for: {factor.name}, (factor) {option.name} (option)</div>
        <div>Rating Score: {rating.score}</div>
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