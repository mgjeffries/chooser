import React, {
  useContext,
  useEffect,
  useState,
  useRef,
  createContext,
} from "react";
import { FactorContext } from "../factors/FactorProvider";
import { OptionContext } from "../options/OptionProvider";
import { RatingContext } from "../ratings/RatingProvider";

export const ScoreContext = React.createContext();

export const ScoreProvider = (props) => {
  const { factors, getFactors } = useContext(FactorContext);
  const { options, getOptions } = useContext(OptionContext);
  const { ratings, getRatings } = useContext(RatingContext);
  const [scores, setScores] = useState([]);

  const useScoreByOptionId = (optionId) => {
    const score = scores.find((score) => score.optionId === optionId) || {};
    return score.score;
  };

  useEffect(() => {
    getFactors();
    getOptions();
    getRatings();
  }, []);

  useEffect(() => {
    const scoresCopy = [];
    options.forEach((option, optionIndex) => {
      scoresCopy.push({
        score: 0,
        weightsUsed: 0,
        optionId: option.id,
      }); //Initialize score for option
      factors.forEach((factor) => {
        const rating = ratings.find((rating) => {
          return rating.factorId === factor.id && rating.optionId === option.id;
        }) || {
          score: 0,
          weightsUsed: 0,
        }; // Return 0 if no score found

        scoresCopy[optionIndex].score += rating.score * factor.multiplier;
        scoresCopy[optionIndex].weightsUsed +=
          Math.abs(rating.score) * factor.multiplier;
      });
    });
    setScores(scoresCopy);
  }, [factors, options, ratings]);

  return (
    <ScoreContext.Provider
      value={{
        useScoreByOptionId,
        scores,
      }}
    >
      {props.children}
    </ScoreContext.Provider>
  );
};
