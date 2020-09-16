import React, { useRef, useState, useContext, useEffect } from "react"
import { RatingDetail } from "./RatingDetail"
import Button from "react-bootstrap/Button"
import { ModalContext } from "../modals/ModalProvider"
import { RatingContext } from "./RatingProvider"

export const Rating = ({ factor, option }) => {
  const { handleShow, setModalContent } = useContext(ModalContext)
  const { ratings, getRatings } = useContext(RatingContext)
  const [ rating, setRating ] = useState({})
  
  useEffect(getRatings, [])

  useEffect( () => {
    const rating = ratings.find( rating => {
      return (
        rating.factorId === factor.id 
        && rating.optionId === option.id
      )
    }) || {
      score: 0
    }
    setRating(rating)
  }, [])

  return (
  <div className="rating">
    <div>{rating.score}</div>
    <Button 
      onClick={ clickEvent => {
        setModalContent(<RatingDetail rating={rating} />)
        handleShow()
      }}
       > 
      detail
    </Button>
  </div>)
}