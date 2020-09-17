import React, { useContext, useEffect, useState, useRef } from "react"
import { ChoiceContext } from "./ChoiceProvider"
import { WeightList } from "../weights/WeightSelect"
import { AddFactor } from "../factors/AddFactor"
import { FactorContext } from "../factors/FactorProvider"
import { Factor } from "../factors/Factor"
import { AddOption } from "../options/AddOption"
import { OptionContext } from "../options/OptionProvider"
import { Option } from "../options/Option"
import Table from "react-bootstrap/Table"
import { Rating } from "../ratings/Rating"
import Button from "react-bootstrap/esm/Button"

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
    <Button 
        onClick={evt => {
          props.history.push("/")
        }}>
        Back
    </Button>
    <div className="choice__name">
      { 
      (isChoiceNameChanging)
      ? <>
      <input type="text" defaultValue={choice.name} ref={choiceRef}></input>
      <Button 
            onClick={evt => {
                changeName()
            }}>
            Save
        </Button>
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
    
    
    
    
    
    <Table striped bordered >
      <thead>
        <tr>
          <th><WeightList {...props} /></th>
          {
            choiceFactors.map(cf => {
              return (
              <th key={cf.id}>
                <Factor factor={cf} />
              </th>
              )
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          choiceOptions.map(cO => {
            return (
              <tr key={cO.id}>
                <td>
                  <Option option={cO} />
                </td>
                {
                  choiceFactors.map(cf => {
                    return (
                    
                      <Rating option={cO} factor={cf} />
                    )
                  })
                }
              </tr>
            )
          })
        }
      </tbody>
    </Table>
    <AddOption {...props} />
    <AddFactor {...props} />
  </section>
  </>
}

