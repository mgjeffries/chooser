import React, { useState, useContext, useRef } from "react"
import { RatingContext } from "./RatingProvider"
import Button from "react-bootstrap/Button"
import { ModalContext } from "../modals/ModalProvider"
import Modal from "react-bootstrap/Modal"


export const RatingDetail = (props) => {
  const { handleClose } = useContext(ModalContext)
  const { addRating, editRating } = useContext(RatingContext)

  const [ rating, setRating ] = useState(props.rating)
  

  const editMode = rating.hasOwnProperty("id")

  const handleControlledInputChange = (event) => {
    const newRating = Object.assign({}, rating)
    newRating[event.target.name] = event.target.value
    setRating(newRating)
  }

  return (
    <>
    <Modal.Header closeButton>
      <Modal.Title>Rating Details</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className="rating__detail">
        <div>Rating for: {props.factor.name}, (factor) {props.option.name} (option)</div>
        <div>Rating Score: {rating.score}</div>
        <input type="range" min="-10" max="10" value={rating.score} name="score" onChange={handleControlledInputChange}></input>
      </div>

    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" 
        onClick={ clickEvent => {
          (editMode)
          ? editRating(rating)
          : addRating({
            factorId: props.factor.id,
            optionId: props.option.id,
            score: rating.score
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