import React, { useState } from "react"

export const RatingContext = React.createContext()

export const RatingProvider = (props) => {
  const [ ratings, setRatings ] = useState([])

  const getRatings = () => {
    return fetch("http://localhost:8088/ratings")
      .then( res => res.json())  
      .then(setRatings)
  }

  const addRating = rating => {
    return fetch("http://localhost:8088/ratings",  {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(rating)
  })
    .then(getRatings)
  }

  const deleteRating = rating => {
    return fetch(`http://localhost:8088/ratings/${rating.id}`, {
      method: "DELETE"
    })
    .then(getRatings)
  }

  return <RatingContext.Provider value={{
    ratings, getRatings, addRating, deleteRating
  }}>
    {props.children}
  </RatingContext.Provider>

}