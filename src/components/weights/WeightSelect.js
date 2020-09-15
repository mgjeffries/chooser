import React, { useContext, useEffect, useState, useRef } from "react"
import { WeightContext } from "./WeightProvider"
import { ChoiceContext } from "../choices/ChoiceProvider"
import Button from "react-bootstrap/Button"

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
  }, [choices, weights])

  const weightRef = useRef(null)

  const changeWeight = () => {
    const weightId = parseInt(weightRef.current.value)
    const newChoice = choice
    newChoice.weightId = weightId
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
        <Button type="submit"
            onClick={evt => {
                evt.preventDefault() // Prevent browser from submitting the form
                changeWeight()
            }}
            className="btn btn-primary">
            Save
        </Button>
      </div>
    : <Button variant="outline-info"
        onClick={evt => {
          setIsWeightChanging(true)
        }}
        className="btn">
        {weight.emoji+" "+weight.name}
      </Button>
    }

    
  </section>
  </>
}


