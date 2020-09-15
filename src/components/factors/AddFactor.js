import React, { useContext, useState, useEffect } from "react"
import { FactorContext } from "./FactorProvider"
import { ChoiceContext } from "../choices/ChoiceProvider"
import Button from "react-bootstrap/Button"


export const AddFactor = (props) => {
  const { addFactor } = useContext(FactorContext)
  const { choices, getChoices } = useContext(ChoiceContext)
  const [ choice, setChoice ] = useState({})


  useEffect( () => {
    getChoices()
  }, [])

  useEffect(() => {
      const choice = choices.find(c => c.id === parseInt(props.match.params.choiceId)) || {}
      setChoice(choice)
  }, [choices])


  return <>
  <Button 
      onClick={evt => {
        addFactor({
          name: "Untitled Factor",
          choiceId: choice.id,
          multiplier: 1
        })
      }}
      className="btn">
      Add Factor
  </Button>
  </>
}