import React from "react"

export const Factor = ({factor}) => {
  return <div className="factor">
    <div className="factor__name">{factor.name}</div>
    <div className="factor__multiplier">{factor.multiplier}</div>
  </div>
}