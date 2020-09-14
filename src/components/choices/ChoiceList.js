import React, { useContext, useEffect } from "react"
import { ChoiceContext } from "./ChoiceProvider"
import { Link } from "react-router-dom"

const defaultWeightId = 1

export const ChoiceList = () => {
  const { choices, getChoices, addChoice } = useContext(ChoiceContext)

  useEffect( () => {
    getChoices()
  }, [])

  return <> 
  <section className="choices">
    <div className="choice__list">
    {
        choices.map(choice => {
            return <Link key={choice.id} to={`/choices/${choice.id}`}>
                <h3>{choice.name}</h3>
            </Link>
        })
    }
    </div>
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