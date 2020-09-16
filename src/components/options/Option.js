import React, { useRef, useState } from "react"
import { OptionDetail } from "./OptionDetail"
import Button from "react-bootstrap/Button"

export const Option = ({option}) => {
 

  return <div className="option">

    
    <div className="option__name">{option.name}</div>
    <Button 
      // onClick={handleShow}
       > 
      detail
    </Button>
  </div>
}