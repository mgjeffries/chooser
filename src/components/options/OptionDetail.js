import React, { useState, useContext } from "react";
import { OptionContext } from "./OptionProvider";
import Button from "react-bootstrap/Button";
import { ModalContext } from "../modals/ModalProvider";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export const OptionDetail = (props) => {
  const { deleteOption, editOption } = useContext(OptionContext);
  const { handleClose } = useContext(ModalContext);
  const [option, setOption] = useState(props.option);

  const handleControlledInputChange = (event) => {
    const newOption = Object.assign({}, option);
    newOption[event.target.name] = event.target.value;
    setOption(newOption);
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>
          <Form>
            <Form.Control
              type="text"
              defaultValue={option.name}
              name="name"
              onChange={handleControlledInputChange}
            />
          </Form>
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button
          variant="danger"
          onClick={(evt) => {
            deleteOption(option);
            handleClose();
          }}
          className="btn"
        >
          delete
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={(clickEvent) => {
            editOption(option);
            handleClose();
          }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </>
  );
};
