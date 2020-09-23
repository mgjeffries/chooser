import React, { useContext, useEffect, useState } from "react";
import { WeightContext } from "./WeightProvider";

export const WeightWallet = (props) => {
  const { weights, getWeights } = useContext(WeightContext);
  const [weight, setWeight] = useState({});
  const walletsize = 500;

  useEffect(() => {
    getWeights();
  }, []);

  useEffect(() => {
    const weight = weights.find((w) => w.id === props.choice.weightId) || {};
    setWeight(weight);
  }, [weights]);

  return (
    <div className="weight__wallet">
      <div>Weights Used</div>
      <div>{props.weightsUsed}</div>
      <div>Weights Remaining</div>
      <div>{walletsize - props.weightsUsed}</div>
    </div>
  );
};
