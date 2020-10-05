import React, { useContext, useRef, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { ModalContext } from "../modals/ModalProvider";
import { ChoiceDelete } from "./ChoiceDelete";
import { ChoiceContext } from "./ChoiceProvider";
import "./choice.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const ChoiceHeader = (props) => {
  const { editChoice } = useContext(ChoiceContext);
  const { handleShow, setModalContent } = useContext(ModalContext);

  const [isChoiceNameChanging, setIsChoiceNameChanging] = useState(false);

  const choiceRef = useRef(null);

  const changeName = () => {
    const newChoice = props.choice;
    newChoice.name = choiceRef.current.value;
    editChoice(newChoice);
    setIsChoiceNameChanging(false);
  };

  return (
    <div className="choice__header">
      <Button
        onClick={(evt) => {
          props.history.push("/");
        }}
      >
        Back
      </Button>

      <div className="choice__name">
        {isChoiceNameChanging ? (
          <Form>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  defaultValue={props.choice.name}
                  ref={choiceRef}
                ></Form.Control>
              </Col>
              <Col>
                <Button
                  onClick={(evt) => {
                    changeName();
                  }}
                >
                  Save
                </Button>
              </Col>
            </Row>
          </Form>
        ) : (
          <>
            <Button
              variant="secondary-outline"
              onClick={(evt) => {
                setIsChoiceNameChanging(true);
              }}
              className="btn"
            >
              {props.choice.name}
            </Button>
          </>
        )}
      </div>

      <Button
        variant="secondary-outline"
        onClick={(evt) => {
          setModalContent(<ChoiceDelete {...props} />);
          handleShow();
        }}
      >
        Settings
      </Button>
    </div>
  );
};
