import React, { useState } from "react"

export const ChoiceContext = React.createContext()

export const ChoiceProvider = (props) => {
  const [ choices, setChoices ] = useState([])

  const getChoices = () => {
    return fetch("http://localhost:8088/choices")
      .then( res => res.json())  
      .then(setChoices)
  }

  const addChoice = choice => {
    return fetch("http://localhost:8088/choices",  {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(choice)
  })
    .then(getChoices)
  }

  return <ChoiceContext.Provider value={{
    choices, getChoices, addChoice
  }}>
    {props.children}
  </ChoiceContext.Provider>

}