import React, { useContext, useEffect } from "react"
import { WeightContext } from "./WeightProvider"

export const WeightList = () => {
  const { weights, getWeights } = useContext(WeightContext)

  useEffect( () => {
    getWeights()
  }, [])

  return <> 
  <section className="weight__list">
    <label htmlFor="weight">Assign a weight</label>
    <select defaultValue="" name="weight" className="weight__select">
      <option value="0">Select A Weight</option>
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
  </section>
  </>
}


