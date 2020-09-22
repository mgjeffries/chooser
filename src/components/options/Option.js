import React, { useRef, useState, useContext } from "react";
import { OptionDetail } from "./OptionDetail";
import Button from "react-bootstrap/Button";
import { ModalContext } from "../modals/ModalProvider";
import { ScoreContext } from "../scores/ScoreProvider";

export const Option = ({ option }) => {
  const { handleShow, setModalContent } = useContext(ModalContext);
  const { useScoreByOptionId } = useContext(ScoreContext);

  return (
    <td
      className="option"
      onClick={(clickEvent) => {
        setModalContent(<OptionDetail option={option} />);
        handleShow();
      }}
    >
      <div className="option__name">{option.name}</div>
      <div className="option__score">
        Score: {useScoreByOptionId(option.id)}
      </div>
    </td>
  );
};
