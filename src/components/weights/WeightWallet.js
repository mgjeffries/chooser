import React, { useContext, useEffect, useState } from "react";
import { IntToWeight } from "./IntToWeight";
import { WeightContext } from "./WeightProvider";

export const WeightWallet = (props) => {
  const { weights, getWeights } = useContext(WeightContext);
  const [weight, setWeight] = useState({});
  const walletsize = 100;

  useEffect(() => {
    getWeights();
  }, []);

  useEffect(() => {
    const weight = weights.find((w) => w.id === props.choice.weightId) || {};
    setWeight(weight);
  }, [weights]);

  return (
    <div className="weight__wallet">
      <div>Weight Wallet</div>
      <span style={{ backgroundColor: "lightgrey" }}>
        {IntToWeight(props.weightsUsed, props.choice)}
      </span>
      <span style={{ color: "darkslategrey" }}>
        {IntToWeight(walletsize - props.weightsUsed, props.choice)}
      </span>
    </div>
  );
};
