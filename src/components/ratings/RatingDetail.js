import React, { useState, useContext, useRef } from "react"
import { RatingContext } from "./RatingProvider"
import Button from "react-bootstrap/Button"
import { ModalContext } from "../modals/ModalProvider"
import Modal from "react-bootstrap/Modal"


export const RatingDetail = ({rating, factor, option}) => {
  const { handleClose } = useContext(ModalContext)
  const { addRating, editRating } = useContext(RatingContext)
  
  const scoreSlider = useRef(null)

  return (
    <>
    <Modal.Header closeButton>
      <Modal.Title>Rating Details</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className="rating__detail">
        <div>Rating for: {factor.name}, (factor) {option.name} (option)</div>
        <div>Rating Score: {rating.score}</div>
        <input type="range" min="-10" max="10" defaultValue={rating.score} ref={scoreSlider}></input>
      </div>

    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" 
        onClick={ clickEvent => {
          (rating.hasOwnProperty("id"))
          ? editRating(rating)
          : addRating({
            factorId: factor.id,
            optionId: option.id,
            score: parseInt(scoreSlider.current.value)
          })
          handleClose()
      }}
      >
        Save Changes
      </Button>
    </Modal.Footer>
    </>
  )
}