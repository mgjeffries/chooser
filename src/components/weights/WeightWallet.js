import React, { useContext, useEffect, useState } from "react";
import { IntToWeight } from "./IntToWeight";
import { WeightContext } from "./WeightProvider";
import { WeightList } from "./WeightSelect";
import Card from "react-bootstrap/Card";
import "./weightWallet.css";

export const WeightWallet = (props) => {
  const { weights, getWeights } = useContext(WeightContext);
  const [weight, setWeight] = useState({});
  const walletsize = 50;

  useEffect(() => {
    getWeights();
  }, []);

  useEffect(() => {
    const weight = weights.find((w) => w.id === props.choice.weightId) || {};
    setWeight(weight);
  }, [weights]);

  const weightsRemaining = (weightsUsed) => {
    const difference = walletsize - weightsUsed;
    if (difference > 0) {
      return difference;
    }
    return 0;
  };

  return (
    <div className="weight__wallet">
      <Card>
        <Card.Header>
          Tokens Used: {props.weightsUsed} / {walletsize}
        </Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            <span
              style={{
                backgroundColor: "rgba(122, 122, 122, 0.2)",
                filter: "grayscale(100%)",
                padding: "3px 0px",
                borderRadius: "4px",
              }}
            >
              {IntToWeight(props.weightsUsed, props.choice)}
            </span>
            <span style={{ color: "darkslategrey" }}>
              {IntToWeight(weightsRemaining(props.weightsUsed), props.choice)}
            </span>
          </Card.Text>
          <WeightList {...props} />
        </Card.Body>
      </Card>
    </div>
  );
};
