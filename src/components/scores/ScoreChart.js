import React, { useContext, useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { FactorContext } from "../factors/FactorProvider";
import { OptionContext } from "../options/OptionProvider";

export const ScoreChart = (props) => {
  const { factors, getFactors } = useContext(FactorContext);
  const { options, getOptions } = useContext(OptionContext);
  const [choiceFactors, setChoiceFactors] = useState([]);
  const [choiceOptions, setChoiceOptions] = useState([]);
  const [chartState, setChartState] = useState({});

  useEffect(() => {
    getFactors();
    getOptions();
  }, []);

  useEffect(() => {
    const choiceFactors = factors.filter((f) => f.choiceId === props.choice.id);
    const choiceOptions = options.filter((f) => f.choiceId === props.choice.id);
    setChoiceFactors(choiceFactors);
    setChoiceOptions(choiceOptions);
    const state = {
      dataDoughnut: {
        labels: choiceOptions.map((option) => option.name),
        datasets: [
          {
            data: [300, 50, 100, 40, 120],
            backgroundColor: [
              "#F7464A",
              "#46BFBD",
              "#FDB45C",
              "#949FB1",
              "#4D5360",
            ],
            hoverBackgroundColor: [
              "#FF5A5E",
              "#5AD3D1",
              "#FFC870",
              "#A8B3C5",
              "#616774",
            ],
          },
        ],
      },
    };
    setChartState(state);
  }, [factors, options]);

  return (
    <Doughnut data={chartState.dataDoughnut} options={{ responsive: true }} />
  );
};
