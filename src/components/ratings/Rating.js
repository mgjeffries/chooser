import React, { useRef, useState, useContext } from "react"
import { RatingDetail } from "./RatingDetail"
import Button from "react-bootstrap/Button"
import { ModalContext } from "../modals/ModalProvider"

export const Rating = ({rating}) => {
  const { handleShow, setModalContent } = useContext(ModalContext)
 

  return <div className="rating">

    
    <div className="rating__name">{rating.name}</div>
    <Button 
      onClick={ clickEvent => {
        setModalContent(<RatingDetail rating={rating} />)
        handleShow()
      }}
       > 
      detail
    </Button>
  </div>
}