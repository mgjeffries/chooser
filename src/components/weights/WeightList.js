import React, { useContext, useEffect, useState } from "react"
import { WeightContext } from "./WeightProvider"

export const WeightList = (props) => {
  const { weights, activeWeightId, getWeights } = useContext(WeightContext)
  const [ isWeightChanging, setIsWeightChanging ] = useState(false)
  const [ weight, setWeight ] = useState({})

  useEffect( () => {
    getWeights()
  }, [])

  useEffect(() => {
    const weight = weights.find(w => w.id === parseInt(activeWeightId)) || {}
    setWeight(weight)
  }, [activeWeightId])

  return <> 
  <section className="weight__list">

    {
    (isWeightChanging)
    ? <>
        <label htmlFor="weight">Assign a weight</label>
        <select defaultValue={weight.id} name="weight" className="weight__select">
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
      </>
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


