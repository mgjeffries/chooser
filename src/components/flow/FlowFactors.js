import React, { useContext, useEffect, useState, useRef } from "react";
import { ChoiceContext } from "../choices/ChoiceProvider";
import { AddFactor } from "../factors/AddFactor";
import { FactorContext } from "../factors/FactorProvider";
import { Factor } from "../factors/Factor";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

export const FlowFactors = (props) => {
  const { deleteFactor, addFactor } = useContext(FactorContext);
  const [choiceFactors, setChoiceFactors] = useState([]);
  const defaultFactorName = "Untitled Factor";

  const handleControlledInputChange = (event, factorIndex) => {
    const newFactors = choiceFactors.slice();
    newFactors[factorIndex][event.target.name] = event.target.value;
    setChoiceFactors(newFactors);
  };

  const saveChoiceFactors = () => {
    choiceFactors.forEach((factor) => {
      if (factor.name !== defaultFactorName) {
        addFactor(factor);
      }
    });
  };

  return (
    <>
      <section className="choice__factors">
        <h2 className="factor__prompt">What are the factors in this choice?</h2>
        <div>
          For example: If you are thinking about buying a car, some factors
          might be:
        </div>
        <div>•Purchase cost</div>
        <div>•Seating capacity</div>
        <div>•Fuel efficiency</div>
        <div>•Fun to drive</div>
        <Form>
          {choiceFactors.map((factor, factorIndex) => {
            return (
              <Form.Row className="align-items-center" key={factorIndex}>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Name this factor"
                    name="name"
                    onChange={(changeEvent) => {
                      handleControlledInputChange(changeEvent, factorIndex);
                    }}
                  />
                </Col>
                <Col xs="auto">
                  <Button
                    variant="outline-danger"
                    onClick={(clickEvent) => {
                      deleteFactor(factor);
                    }}
                  >
                    delete
                  </Button>
                </Col>
              </Form.Row>
            );
          })}
        </Form>
        <Button
          onClick={(evt) => {
            const choiceFactorsCopy = choiceFactors.slice();
            choiceFactorsCopy.push({
              name: defaultFactorName,
              choiceId: parseInt(props.match.params.choiceId),
              multiplier: 1,
            });
            setChoiceFactors(choiceFactorsCopy);
          }}
          className="btn"
        >
          Add Factor
        </Button>
        <Button
          variant="primary"
          onClick={(clickEvent) => {
            saveChoiceFactors();
            props.history.push(`/choices/${props.match.params.choiceId}`);
          }}
        >
          Finish
        </Button>
      </section>
    </>
  );
};
