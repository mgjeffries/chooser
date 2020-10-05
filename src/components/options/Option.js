import React, { useRef, useState, useContext } from "react";
import { OptionDetail } from "./OptionDetail";
import Badge from "react-bootstrap/Badge";
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
      <Badge variant="secondary">Score: {useScoreByOptionId(option.id)}</Badge>
    </td>
  );
};
