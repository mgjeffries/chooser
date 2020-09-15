import React, { useContext, useEffect, useState, useRef } from "react"
import { ChoiceContext } from "./ChoiceProvider"
import { WeightList } from "../weights/WeightSelect"
import { AddFactor } from "../factors/AddFactor"
import { FactorContext } from "../factors/FactorProvider"
import { Factor } from "../factors/Factor"


export const ChoiceDetail = (props) => {
  const { choices, getChoices, editChoice } = useContext(ChoiceContext)
  const { factors, getFactors } = useContext(FactorContext)
  const [ choice, setChoice ] = useState({})
  const [ choiceFactors, setChoiceFactors ] = useState([])
  const [ isChoiceNameChanging, setIsChoiceNameChanging ] = useState(false)

  const choiceRef = useRef(null)

  useEffect( () => {
    getChoices()
    getFactors()
  }, [])

  useEffect(() => {
      const choice = choices.find(c => c.id === parseInt(props.match.params.choiceId)) || {}
      const choiceFactors = factors.filter(f => f.choiceId === choice.id)
      setChoice(choice)
      setChoiceFactors(choiceFactors)
  }, [choices, factors])

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
    {
      choiceFactors.map(cf => {
        return <Factor factor={cf} key={cf.id}/>
      })
    }
    {/* TODO: display the factors, options and ratings */}
  </section>
  </>
}

