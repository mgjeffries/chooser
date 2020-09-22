import React, { useContext, useEffect, useState, useRef } from "react";
import { ChoiceContext } from "../choices/ChoiceProvider";
import { AddFactor } from "../factors/AddFactor";
import { FactorContext } from "../factors/FactorProvider";
import { Factor } from "../factors/Factor";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export const FlowFactors = (props) => {
  const { choices, getChoices } = useContext(ChoiceContext);
  const { factors, getFactors } = useContext(FactorContext);
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
        <Table striped bordered>
          <tbody>
            {choiceFactors.map((cf) => {
              return <Factor factor={cf} />;
            })}
          </tbody>
        </Table>
        <AddFactor {...props} />
        <Button
          variant="primary"
          onClick={(clickEvent) => {
            props.history.push(`/choices/${props.match.params.choiceId}`);
          }}
        >
          Finish
        </Button>
      </section>
    </>
  );
};
