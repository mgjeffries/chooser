import React, { useContext, useRef, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { ModalContext } from "../modals/ModalProvider";
import { ChoiceDelete } from "./ChoiceDelete";
import { ChoiceContext } from "./ChoiceProvider";
import "./choice.css";

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
          <>
            <input
              type="text"
              defaultValue={props.choice.name}
              ref={choiceRef}
            ></input>
            <Button
              onClick={(evt) => {
                changeName();
              }}
            >
              Save
            </Button>
          </>
        ) : (
          <>
            <div
              onClick={(evt) => {
                setIsChoiceNameChanging(true);
              }}
              className="btn"
            >
              {props.choice.name}
            </div>
          </>
        )}
      </div>

      <Button
        variant="danger"
        onClick={(evt) => {
          setModalContent(<ChoiceDelete {...props} />);
          handleShow();
        }}
      >
        Delete
      </Button>
    </div>
  );
};
