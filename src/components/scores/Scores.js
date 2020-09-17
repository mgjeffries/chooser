import React, { useContext, useEffect, useState, useRef } from "react"
import { ChoiceContext } from "../choices/ChoiceProvider"
import { FactorContext } from "../factors/FactorProvider"
import { OptionContext } from "../options/OptionProvider"
import { RatingContext } from "../ratings/RatingProvider"


export const Scores = (props) => {
  const { choices, getChoices } = useContext(ChoiceContext)
  const { factors, getFactors } = useContext(FactorContext)
  const { options, getOptions } = useContext(OptionContext)
  const { ratings, getRatings } = useContext(RatingContext)
  const [ choice, setChoice ] = useState({})
  const [ choiceFactors, setChoiceFactors ] = useState([])
  const [ choiceOptions, setChoiceOptions ] = useState([])


  useEffect( () => {
    getChoices()
    getFactors()
    getOptions()
    getRatings()
  }, [])

  useEffect(() => {
      const choice = choices.find(c => c.id === parseInt(props.match.params.choiceId)) || {}
      const choiceFactors = factors.filter(f => f.choiceId === choice.id) 
      const choiceOptions = options.filter(f => f.choiceId === choice.id) 
      setChoice(choice)
      setChoiceFactors(choiceFactors)
      setChoiceOptions(choiceOptions)
      scoreOptions(choiceOptions, choiceFactors)
  }, [choices, factors, options, ratings])

  const scoreOptions = (choiceOptions, choiceFactors) => {
    const choiceOptionsCopy = choiceOptions.slice()
    choiceOptionsCopy.forEach( option => {
      option.score = 0 // Intialize score to 0
      choiceFactors.forEach( factor => {
        const rating = ratings.find( rating => {
          return (
            rating.factorId === factor.id 
            && rating.optionId === option.id
          )
        }) || {score: 0} // Return 0 if no score found
        option.score += (rating.score*factor.multiplier)
      })
    })
    setChoiceOptions(choiceOptionsCopy)
  }

  return (
  <> 
  <div className="scores">
    {
      choiceOptions.map( option => {
        return (
          <div>
            {
              option.score
            }
          </div>
        )
      })
    }
  </div>
  </>
  )
}

