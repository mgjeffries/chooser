import React, { useContext, useEffect, useState } from "react";
import { IntToWeight } from "./IntToWeight";
import { WeightContext } from "./WeightProvider";
import { WeightList } from "./WeightSelect";
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
      <div>Weight Wallet</div>
      <WeightList {...props} />
      <span
        style={{
          backgroundColor: "lightgrey",
          filter: "grayscale(100%)",
        }}
      >
        {IntToWeight(props.weightsUsed, props.choice)}
      </span>
      <span style={{ color: "darkslategrey" }}>
        {IntToWeight(weightsRemaining(props.weightsUsed), props.choice)}
      </span>
    </div>
  );
};
