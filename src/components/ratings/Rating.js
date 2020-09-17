import React, { useRef, useState, useContext, useEffect } from "react"
import { RatingDetail } from "./RatingDetail"
import Button from "react-bootstrap/Button"
import { ModalContext } from "../modals/ModalProvider"
import { RatingContext } from "./RatingProvider"

export const Rating = ({ factor, option }) => {
  const { handleShow, setModalContent } = useContext(ModalContext)
  const { ratings, getRatings } = useContext(RatingContext)
  const [ rating, setRating ] = useState({})
  const defaultRating = {
    score: 0
  }
  
  useEffect(() => {
    getRatings() 
  }, [])

  useEffect( () => {
    const rating = ratings.find( rating => {
      return (
        rating.factorId === factor.id 
        && rating.optionId === option.id
      )
    }) || defaultRating
    setRating(rating)
  }, [ratings])

  return (
  <div className="rating">
    <Button 
      onClick={ clickEvent => {
        setModalContent(<RatingDetail rating={rating} factor={factor} option={option} />)
        handleShow()
      }}
       > 
      {rating.score}
    </Button>
  </div>)
}