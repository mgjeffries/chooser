import React, { useState, useContext } from "react"
import { OptionContext } from "./OptionProvider"
import Button from "react-bootstrap/Button"


export const OptionDetail = ({option}) => {
  const { deleteOption } = useContext(OptionContext)

  return <div className="option__detail">
      <div className="option__name">{option.name}</div>
      <Button 
        onClick={evt => {
          deleteOption(option)
        }}
        className="btn">
        delete
      </Button>
    </div>
}