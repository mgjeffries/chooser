import React, { useContext, useEffect, useState } from "react";
import { ChoiceContext } from "../choices/ChoiceProvider";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

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
      <Container>
        <h2 className="choice__name">What's on your mind? (Step 1/3)</h2>
        <div>Examples:</div>
        <div>•New Car?</div>
        <div>•Where to work?</div>
        <div>•Which Cell Carrier to use?</div>
        <div>•Where to go for Vacation?</div>
        <Form>
          <Form.Label>Name of Choice</Form.Label>
          <Form.Control
            type="text"
            placeholder="Who, What, When, Where?"
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
      </Container>
    </>
  );
};
