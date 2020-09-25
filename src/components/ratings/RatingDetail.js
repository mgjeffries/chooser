import React, { useState, useContext, useRef } from "react";
import { RatingContext } from "./RatingProvider";
import Button from "react-bootstrap/Button";
import { ModalContext } from "../modals/ModalProvider";
import Modal from "react-bootstrap/Modal";
import RangeSlider from "react-bootstrap-range-slider";
import { IntToWeight } from "../weights/IntToWeight";

export const RatingDetail = (props) => {
  const { handleClose } = useContext(ModalContext);
  const { addRating, editRating } = useContext(RatingContext);

  const [rating, setRating] = useState(props.rating);

  const editMode = rating.hasOwnProperty("id");

  const handleRatingChange = (event) => {
    const newRating = Object.assign({}, rating);
    newRating.score = parseInt(event.target.value); // Ratings should be stored as ints
    setRating(newRating);
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Rating Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="rating__detail">
          <div>
            Rating for: {props.factor.name}, {props.option.name}
          </div>
          <span>Rating Score: </span>
          <span
            className={`rating 
            ${rating.score >= 0 ? "rating__positive" : "rating__negative"}`}
          >
            {IntToWeight(rating.score * props.factor.multiplier, props.choice)}
          </span>
          <RangeSlider
            min={-10 * props.factor.multiplier}
            max={10 * props.factor.multiplier}
            value={rating.score}
            onChange={handleRatingChange}
          ></RangeSlider>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={(clickEvent) => {
            editMode
              ? editRating(rating)
              : addRating({
                  factorId: props.factor.id,
                  optionId: props.option.id,
                  choiceId: props.choice.id,
                  score: parseInt(rating.score),
                });
            handleClose();
          }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </>
  );
};
