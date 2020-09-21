import React, { useContext, useEffect, useState, useRef } from "react"
import { ChoiceContext } from "./ChoiceProvider"
import { AddFactor } from "../factors/AddFactor"
import { FactorContext } from "../factors/FactorProvider"
import { Factor } from "../factors/Factor"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"

export const ChoiceFactors = (props) => {
  const { choices, getChoices } = useContext(ChoiceContext)
  const { factors, getFactors } = useContext(FactorContext)
  const [ choiceFactors, setChoiceFactors ] = useState([])


  useEffect( () => {
    getChoices()
    getFactors()
  }, [])

  useEffect(() => {
      const choice = choices.find(c => c.id === parseInt(props.match.params.choiceId)) || {}
      const choiceFactors = factors.filter(f => f.choiceId === choice.id)
      setChoiceFactors(choiceFactors)
  }, [choices, factors])

  

  return <> 
  <section className="choice__factors">
    <Table striped bordered >
      <tbody>
        {
          choiceFactors.map(cf => {
            return (

              <Factor factor={cf} />

            )
          })
        }
      </tbody>
    </Table>
    <AddFactor {...props} />
    <Button variant="primary" 
      onClick={ clickEvent => {
      props.history.push(`/choices/${props.match.params.choiceId}`)
    }}
    >
      Finish
    </Button>
  </section>
  </>
}

