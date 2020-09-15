import React from "react"
import { FactorDetail } from "./FactorDetail"

export const Factor = ({factor}) => {
  return <div className="factor">
    <div className="factor__name">{factor.name}</div>
    <div className="factor__multiplier">{factor.multiplier}</div>
    <button 
      onClick={evt => {
        // TODO: Display Modal when detail clicked
      }} > 
      detail
    </button>
  </div>
}