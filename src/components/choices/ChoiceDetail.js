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
import { ChoiceHeader } from "./ChoiceHeader"

export const ChoiceDetail = (props) => {
  const { choices, getChoices } = useContext(ChoiceContext)
  const { factors, getFactors } = useContext(FactorContext)
  const { options, getOptions } = useContext(OptionContext)
  const [ choice, setChoice ] = useState({})
  const [ choiceFactors, setChoiceFactors ] = useState([])
  const [ choiceOptions, setChoiceOptions ] = useState([])


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

  

  return <> 
  <section className="choice">
    
    <ChoiceHeader {...props} choice={choice} />
    
    <Table striped bordered >
      <thead>
        <tr>
          <th>
            <WeightList {...props} />
          </th>
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

