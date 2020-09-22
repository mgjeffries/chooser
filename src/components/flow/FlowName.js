import React, { useContext, useEffect, useState } from "react";
import { ChoiceContext } from "../choices/ChoiceProvider";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const FlowName = (props) => {
  const { choices, getChoices, editChoice } = useContext(ChoiceContext);
  const [choice, setChoice] = useState({});

  useEffect(() => {
    getChoices();
  }, []);

  useEffect(() => {
    const choice =
      choices.find((c) => c.id === parseInt(props.match.params.choiceId)) || {};
    setChoice(choice);
  }, [choices]);

  const handleControlledInputChange = (event) => {
    const newChoice = Object.assign({}, choice);
    newChoice[event.target.name] = event.target.value;
    setChoice(newChoice);
  };

  return (
    <>
      <h1 className="choice__name">What would you like to name this choice?</h1>
      <div>Examples:</div>
      <div>•New Car?</div>
      <div>•Where to work?</div>
      <div>•Which Cell Carrier</div>
      <div>•Where to go for Vacation?</div>
      <Form>
        <Form.Control
          type="text"
          placeholder={choice.name}
          name="name"
          onChange={handleControlledInputChange}
        />
      </Form>
      <Button
        variant="primary"
        onClick={(clickEvent) => {
          editChoice(choice).then((responseChoice) =>
            props.history.push(`/choices/${choice.id}/options`)
          );
        }}
      >
        next
      </Button>
    </>
  );
};
