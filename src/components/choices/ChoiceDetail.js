import React, { useContext, useEffect, useState } from "react"
import { ChoiceContext } from "./ChoiceProvider"


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
    {/* TODO: display the factors, options and ratings */}
  </section>
  </>
}

