import React, { useState, useContext } from "react"
import { FactorContext } from "./FactorProvider"


export const FactorDetail = ({factor}) => {
  const { deleteFactor } = useContext(FactorContext)


  return <div className="factor__detail">
      <div className="factor__name">{factor.name}</div>
      <div className="factor__multiplier">{factor.multiplier}</div>
      <button 
        onClick={evt => {
          deleteFactor(factor)
        }}
        className="btn">
        delete
      </button>
    </div>
}