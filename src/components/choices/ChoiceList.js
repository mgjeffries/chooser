import React, { useContext, useEffect } from "react"
import { ChoiceContext } from "./ChoiceProvider"

const defaultWeightId = 1

export const ChoiceList = () => {
  const { choice, getChoices, addChoice } = useContext(ChoiceContext)

  useEffect( () => {
    getChoices()
  }, [])

  return <> 
  <section className="choice">
    <div className="choice__add">
      <button 
          onClick={evt => {
            addChoice({
              name: "Untitled Choice",
              userId: parseInt(localStorage.getItem("chooser_user")),
              weightId: defaultWeightId
            })
          }}
          className="btn">
          Add Choice
      </button>
    </div>
  </section>
  </>
}