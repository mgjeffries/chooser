import React, { useContext, useEffect, useState, useRef } from "react"
import { ChoiceContext } from "./ChoiceProvider"
import { WeightList } from "../weights/WeightSelect"
import { AddFactor } from "../factors/AddFactor"


export const ChoiceDetail = (props) => {
  const { choices, getChoices, editChoice } = useContext(ChoiceContext)
  const [ choice, setChoice ] = useState({})
  const [ isChoiceNameChanging, setIsChoiceNameChanging ] = useState(false)

  const choiceRef = useRef(choice)

  useEffect( () => {
    getChoices()
  }, [])

  useEffect(() => {
      const choice = choices.find(c => c.id === parseInt(props.match.params.choiceId)) || {}
      setChoice(choice)
  }, [choices])

  const changeName = () => {
    const newChoice = choice
    newChoice.name = choiceRef.current.value 
    editChoice(newChoice)
    setIsChoiceNameChanging(false)
  }

  return <> 
  <section className="choice">
    <div className="choice__name">
      { 
      (isChoiceNameChanging)
      ? <>
      <input type="text" defaultValue={choice.name} ref={choiceRef}></input>
      <button type="submit"
            onClick={evt => {
                evt.preventDefault() // Prevent browser from submitting the form
                changeName()
            }}
            className="btn btn-primary">
            Save
        </button>
      </>
      : <>
      <div onClick={evt => {
          setIsChoiceNameChanging(true)
        }}
        className="btn">
          {choice.name}
      </div>
      </>
      }
    </div>
    <WeightList {...props} />
    <AddFactor {...props} />
    {/* TODO: display the factors, options and ratings */}
  </section>
  </>
}

