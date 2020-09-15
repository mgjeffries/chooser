import React, { useContext, useEffect, useState, useRef } from "react"
import { WeightContext } from "./WeightProvider"
import { ChoiceContext } from "../choices/ChoiceProvider"

export const WeightList = (props) => {
  const { weights, getWeights } = useContext(WeightContext)
  const { choices, getChoices, editChoice } = useContext(ChoiceContext)
  const [ isWeightChanging, setIsWeightChanging ] = useState(false)
  const [ weight, setWeight ] = useState({})
  const [ choice, setChoice ] = useState({})


  useEffect( () => {
    getWeights()
    getChoices()
  }, [])

  useEffect(() => {
    const choice = choices.find(c => c.id === parseInt(props.match.params.choiceId)) || {}
    const weight = weights.find(w => w.id === choice.weightId) || {}
    setWeight(weight)
    setChoice(choice)
  }, [choices])

  const weightRef = useRef(null)

  const changeWeight = () => {
    const newWeight = parseInt(weightRef.current.value)
    const newChoice = choice
    newChoice.weightId = newWeight
    editChoice(newChoice)
    setIsWeightChanging(false)
  }

  return <> 
  <section className="weight__list">

    {
    (isWeightChanging)
    ? <div>
        <label htmlFor="weight">Assign a weight</label>
        <select defaultValue={weight.id} name="weight" ref={weightRef} className="weight__select">
          {
          weights.map(w => {
            return  (
              <option key={w.id} value={w.id}>
                {w.emoji+" "+w.name}
              </option>
              )
          })  
          }
        </select>
        <button type="submit"
            onClick={evt => {
                evt.preventDefault() // Prevent browser from submitting the form
                changeWeight()
            }}
            className="btn btn-primary">
            Save
        </button>
      </div>
    : <button 
        onClick={evt => {
          setIsWeightChanging(true)
        }}
        className="btn">
        {weight.emoji+" "+weight.name}
      </button>
    }

    
  </section>
  </>
}

