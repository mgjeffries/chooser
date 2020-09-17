import React, { useRef, useState, useContext } from "react"
import { OptionDetail } from "./OptionDetail"
import Button from "react-bootstrap/Button"
import { ModalContext } from "../modals/ModalProvider"

export const Option = ({option}) => {
  const { handleShow, setModalContent } = useContext(ModalContext)
 

  return (
    <td className="option"
    onClick={ clickEvent => {
      setModalContent(<OptionDetail option={option} />)
      handleShow()
    }}
    >
    <div className="option__name">{option.name}</div>
  </td>)
}