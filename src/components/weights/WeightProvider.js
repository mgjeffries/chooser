import React, { useState } from "react"

export const WeightContext = React.createContext()

export const WeightProvider = (props) => {
  const [ weights, setWeights ] = useState([])
  const [ activeWeightId, setActiveWeightId ] = useState(0)

  const getWeights = () => {
    return fetch("http://localhost:8088/weights")
      .then( res => res.json())  
      .then(setWeights)
  }

  const addWeight = weight => {
    return fetch("http://localhost:8088/weights",  {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(weight)
  })
    .then(getWeights)
  }

  return <WeightContext.Provider value={{
    weights, activeWeightId, setActiveWeightId, getWeights, addWeight
  }}>
    {props.children}
  </WeightContext.Provider>

}