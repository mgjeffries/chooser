import React, { useContext, useEffect, useState, useRef } from "react";
import { ChoiceContext } from "../choices/ChoiceProvider";
import { AddFactor } from "../factors/AddFactor";
import { FactorContext } from "../factors/FactorProvider";
import { Factor } from "../factors/Factor";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

export const FlowFactors = (props) => {
  const { choices, getChoices } = useContext(ChoiceContext);
  const { factors, getFactors, deleteFactor, editFactor } = useContext(
    FactorContext
  );
  const [choiceFactors, setChoiceFactors] = useState([]);

  useEffect(() => {
    getChoices();
    getFactors();
  }, []);

  useEffect(() => {
    const choice =
      choices.find((c) => c.id === parseInt(props.match.params.choiceId)) || {};
    const choiceFactors = factors.filter((f) => f.choiceId === choice.id);
    setChoiceFactors(choiceFactors);
  }, [choices, factors]);

  const handleControlledInputChange = (event, factorId) => {
    const newFactors = choiceFactors.slice();
    newFactors.forEach((factor) => {
      if (factor.id === factorId) {
        factor[event.target.name] = event.target.value;
      }
    });
    setChoiceFactors(newFactors);
  };

  const saveChoiceFactors = () => {
    choiceFactors.forEach((factor) => {
      editFactor(factor);
    });
  };

  return (
    <>
      <section className="choice__factors">
        <div className="factor__prompt">
          What are the factors in this choice?
        </div>
        <div className="factor__prompt">
          For example: If you are thinking about buying a car, some factors
          might be:{" "}
        </div>
        <div className="factor__prompt">•Purchase cost</div>
        <div className="factor__prompt">•Seating capacity</div>
        <div className="factor__prompt">•Fuel efficiency</div>
        <div className="factor__prompt">•Fun to drive</div>
        <Form>
          {choiceFactors.map((factor) => {
            return (
              <Form.Row className="align-items-center" key={factor.id}>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Name this factor"
                    name="name"
                    onChange={(changeEvent) => {
                      handleControlledInputChange(changeEvent, factor.id);
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
        <AddFactor {...props} />
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
