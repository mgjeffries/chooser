import React, { useState, useContext } from "react";
import { ChoiceContext } from "./ChoiceProvider";
import Button from "react-bootstrap/Button";
import { ModalContext } from "../modals/ModalProvider";
import Modal from "react-bootstrap/Modal";
import { WeightSelect } from "../weights/WeightSelect";

export const ChoiceDelete = (props) => {
  const { deleteChoice } = useContext(ChoiceContext);
  const { handleClose } = useContext(ModalContext);

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Choice Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <WeightSelect {...props} />
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="danger"
          onClick={(evt) => {
            deleteChoice(props.choice);
            props.history.push("/");
            handleClose();
          }}
          className="btn"
        >
          delete this choice
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </>
  );
};
