import React, { useRef, useState, useContext } from "react"
import { FactorDetail } from "./FactorDetail"
import Button from "react-bootstrap/Button"
import { ModalContext } from "../modals/ModalProvider"


export const Factor = ({factor}) => {
  const { handleShow, setModalContent, handleClose } = useContext(ModalContext)

  

  return <div className="factor">
    <div className="factor__name">{factor.name}</div>
    <div className="factor__multiplier">{factor.multiplier}</div>
    <Button 
      onClick={ clickEvent => {
        setModalContent(<FactorDetail factor={factor} />)
        handleShow()
      }}
       > 
      detail
    </Button>
  </div>
}