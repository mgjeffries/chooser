import React, { useRef, useState, useContext } from "react";
import { FactorDetail } from "./FactorDetail";
import Button from "react-bootstrap/Button";
import { ModalContext } from "../modals/ModalProvider";

export const Factor = ({ factor }) => {
  const { handleShow, setModalContent, handleClose } = useContext(ModalContext);

  return (
    <th
      key={factor.id}
      className="factor"
      onClick={(clickEvent) => {
        setModalContent(<FactorDetail factor={factor} />);
        handleShow();
      }}
    >
      <div className="factor__name">{factor.name}</div>
      <div>X {factor.multiplier}</div>
    </th>
  );
};
