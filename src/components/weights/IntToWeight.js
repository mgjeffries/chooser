import { useContext, useEffect, useState } from "react";
import { WeightContext } from "./WeightProvider";

export const IntToWeight = (int, choice) => {
  const { weights, getWeights } = useContext(WeightContext);
  const [weight, setWeight] = useState({});

  useEffect(() => {
    getWeights();
  }, []);

  useEffect(() => {
    const weight = weights.find((w) => w.id === choice.weightId) || {};
    setWeight(weight);
  }, [weights]);

  if (typeof weight.emoji === "string") {
    return weight.emoji.repeat(int);
  }
  return "";
};
