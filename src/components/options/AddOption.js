import React, { useContext, useState, useEffect } from "react";
import { OptionContext } from "./OptionProvider";
import { ChoiceContext } from "../choices/ChoiceProvider";
import Button from "react-bootstrap/Button";

export const AddOption = (props) => {
  const { addOption } = useContext(OptionContext);
  const { choices, getChoices } = useContext(ChoiceContext);
  const [choice, setChoice] = useState({});

  useEffect(() => {
    getChoices();
  }, []);

  useEffect(() => {
    const choice =
      choices.find((c) => c.id === parseInt(props.match.params.choiceId)) || {};
    setChoice(choice);
  }, [choices]);

  return (
    <>
      <Button
        onClick={(evt) => {
          addOption({
            name: "Untitled Option",
            choiceId: choice.id,
          });
        }}
        className="btn"
      >
        Add Option
      </Button>
    </>
  );
};
