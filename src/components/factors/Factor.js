import React, { useRef } from "react"
import { FactorDetail } from "./FactorDetail"

export const Factor = ({factor}) => {
  const factorDialogRef = useRef(null)

  return <div className="factor">
    <dialog className="dialog dialog--choice" ref={factorDialogRef}>
        <FactorDetail factor={factor} />
        <button className="button--close" onClick={e => factorDialogRef.current.close()}>Close</button>
    </dialog>
    <div className="factor__name">{factor.name}</div>
    <div className="factor__multiplier">{factor.multiplier}</div>
    <button 
      onClick={evt => {
        factorDialogRef.current.showModal()
      }} > 
      detail
    </button>
  </div>
}