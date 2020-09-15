import React, { useContext, useEffect, useState } from "react"
import { ChoiceContext } from "./ChoiceProvider"
import { WeightList } from "../weights/WeightSelect"
import { WeightContext } from "../weights/WeightProvider"


export const ChoiceDetail = (props) => {
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
  <section className="choice">
    <div>
      {choice.name}
    </div>
    <WeightList {...props} />

    {/* TODO: display the factors, options and ratings */}
  </section>
  </>
}

