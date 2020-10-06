import React, { useContext, useEffect } from "react";
import { ChoiceContext } from "./ChoiceProvider";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ScoreChart } from "../scores/ScoreChart";

const defaultWeightId = 9;

export const ChoiceList = (props) => {
  const { choices, getChoices, addChoice } = useContext(ChoiceContext);

  useEffect(() => {
    getChoices();
  }, []);

  return (
    <>
      <section className="choices">
        <div className="choice__list">
          {choices.map((choice) => {
            return (
              <Card body key={choice.id}>
                <Link to={`/choices/${choice.id}`}>
                  <h3>{choice.name}</h3>
                </Link>
                <ScoreChart choice={choice} {...props} />
              </Card>
            );
          })}
        </div>
        <div className="choice__add">
          <Button
            variant="primary"
            onClick={(evt) => {
              addChoice({
                name: "Untitled Choice",
                userId: parseInt(localStorage.getItem("chooser_user")),
                weightId: defaultWeightId,
              }).then((responseChoice) =>
                props.history.push(`/choices/${responseChoice.id}/name`)
              );
            }}
            className="btn"
          >
            Add Choice
          </Button>{" "}
        </div>
      </section>
    </>
  );
};
