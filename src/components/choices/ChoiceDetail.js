import React, { useContext, useEffect, useState } from "react"
import { ChoiceContext } from "./ChoiceProvider"
import { WeightList } from "../weights/WeightList"
import { WeightContext } from "../weights/WeightProvider"


export const ChoiceDetail = (props) => {
  const { choices, getChoices } = useContext(ChoiceContext)
  const { weights, getWeights } = useContext(WeightContext)
  const [ choice, setChoice ] = useState({})
  const [ weight, setWeight ] = useState({})

  useEffect( () => {
    getChoices()
    getWeights()
  }, [])

  useEffect(() => {
      const choice = choices.find(c => c.id === parseInt(props.match.params.choiceId)) || {}
      const weight = weights.find(w => w.id === choice.weightId) || {}
      setChoice(choice)
      setWeight(weight)
  }, [choices, weights])

  return <> 
  <section className="choice">
    <div>
      {choice.name}
      <button 
          onClick={evt => {
            // WeightList()
          }}
          className="btn">
          {weight.name}
      </button>
    </div>
    {/* TODO: display the factors, options and ratings */}
  </section>
  </>
}

