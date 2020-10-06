import React, { useContext, useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { FactorContext } from "../factors/FactorProvider";
import { OptionContext } from "../options/OptionProvider";
import { ScoreContext } from "./ScoreProvider";

export const ScoreChart = (props) => {
  const { factors, getFactors } = useContext(FactorContext);
  const { options, getOptions } = useContext(OptionContext);
  const { scores } = useContext(ScoreContext);
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
    const optionScores = choiceOptions.map((option) => {
      const scoreData =
        scores.find((score) => score.optionId === option.id) || {};
      if (scoreData.score > 0) {
        return scoreData.score;
      } else {
        //negitive scores should display as 0% of chart
        return 0;
      }
    });

    setChoiceFactors(choiceFactors);
    setChoiceOptions(choiceOptions);
    const state = {
      dataDoughnut: {
        labels: choiceOptions.map((option) => option.name),
        datasets: [
          {
            data: optionScores,
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
  }, [factors, options, scores]);

  return (
    <Doughnut
      data={chartState.dataDoughnut}
      options={{
        responsive: true,
        legend: {
          labels: {
            fontSize: 24,
          },
        },
      }}
    />
  );
};
