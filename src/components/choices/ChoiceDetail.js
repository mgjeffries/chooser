import React, { useContext, useEffect, useState, useRef } from "react"
import { ChoiceContext } from "./ChoiceProvider"
import { WeightList } from "../weights/WeightSelect"
import { AddFactor } from "../factors/AddFactor"
import { FactorContext } from "../factors/FactorProvider"
import { Factor } from "../factors/Factor"
import { AddOption } from "../options/AddOption"
import { OptionContext } from "../options/OptionProvider"
import { Option } from "../options/Option"


export const ChoiceDetail = (props) => {
  const { choices, getChoices, editChoice } = useContext(ChoiceContext)
  const { factors, getFactors } = useContext(FactorContext)
  const { options, getOptions } = useContext(OptionContext)
  const [ choice, setChoice ] = useState({})
  const [ choiceFactors, setChoiceFactors ] = useState([])
  const [ choiceOptions, setChoiceOptions ] = useState([])
  const [ isChoiceNameChanging, setIsChoiceNameChanging ] = useState(false)

  const choiceRef = useRef(null)

  useEffect( () => {
    getChoices()
    getFactors()
    getOptions()
  }, [])

  useEffect(() => {
      const choice = choices.find(c => c.id === parseInt(props.match.params.choiceId)) || {}
      const choiceFactors = factors.filter(f => f.choiceId === choice.id)
      const choiceOptions = options.filter(f => f.choiceId === choice.id)
      setChoice(choice)
      setChoiceFactors(choiceFactors)
      setChoiceOptions(choiceOptions)
  }, [choices, factors, options])

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
    {
      choiceFactors.map(cf => {
        return <Factor factor={cf} key={cf.id}/>
      })
    }
    {
      choiceOptions.map(cO => {
        return <Option option={cO} key={cO.id}/>
      })
    }
    <AddFactor {...props} />
    <AddOption {...props} />
    {/* TODO: display the factors, options and ratings */}
  </section>
  </>
}

