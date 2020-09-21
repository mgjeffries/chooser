import React, { useContext, useEffect, useState } from "react"
import { ChoiceContext } from "./ChoiceProvider"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

export const ChoiceName = (props) => {
  const { choices, getChoices, editChoice } = useContext(ChoiceContext)
  const [ choice, setChoice ] = useState({})

  useEffect( () => {
    getChoices()
  }, [])

  useEffect(() => {
    const choice = choices.find(c => c.id === parseInt(props.match.params.choiceId)) || {}
    setChoice(choice)
}, [ choices ])

  const handleControlledInputChange = (event) => {
    const newChoice = Object.assign({}, choice)
    newChoice[event.target.name] = event.target.value
    setChoice(newChoice)
  }

  return (
    <>
    <div className="choice__name">
      What would you like to name this choice?
    </div>
    <Form>
      <Form.Control type="text" 
      defaultValue={choice.name} 
      name="name" 
      onChange={handleControlledInputChange}
      />
    </Form>
    <Button variant="primary" 
      onClick={ clickEvent => {
        editChoice(choice)
        .then(responseChoice => props.history.push(`/choices/${choice.id}/choiceOptions`))
    }}
    >
      next
    </Button>
    </>
  )

}