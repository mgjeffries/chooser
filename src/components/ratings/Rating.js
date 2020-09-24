import React, { useRef, useState, useContext, useEffect } from "react";
import { RatingDetail } from "./RatingDetail";
import Button from "react-bootstrap/Button";
import { ModalContext } from "../modals/ModalProvider";
import { RatingContext } from "./RatingProvider";
import { IntToWeight } from "../weights/IntToWeight";

export const Rating = ({ factor, option, choice }) => {
  const { handleShow, setModalContent } = useContext(ModalContext);
  const { ratings, getRatings } = useContext(RatingContext);
  const [rating, setRating] = useState({});
  const defaultRating = {
    score: 0,
  };

  useEffect(() => {
    getRatings();
  }, []);

  useEffect(() => {
    const rating =
      ratings.find((rating) => {
        return rating.factorId === factor.id && rating.optionId === option.id;
      }) || defaultRating;
    setRating(rating);
  }, [ratings]);

  const ratingStyle = (ratingScore) => {
    const style = {
      backgroundColor: "#93c54b",
      wordBreak: "break-word",
      padding: "5px",
      borderRadius: "4px",
      minHeight: "34px",
    };
    if (ratingScore < 0) {
      style.backgroundColor = "#d9534f";
    }
    return style;
  };

  return (
    <td
      onClick={(clickEvent) => {
        setModalContent(
          <RatingDetail
            rating={rating}
            factor={factor}
            option={option}
            choice={choice}
          />
        );
        handleShow();
      }}
    >
      <div style={ratingStyle(rating.score)}>
        {IntToWeight(rating.score * factor.multiplier, choice)}
      </div>
    </td>
  );
};
