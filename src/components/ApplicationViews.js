import React from "react"
import { Route } from "react-router-dom"
import { WeightList } from "./weights/WeightList"
import { WeightProvider } from "./weights/WeightProvider"
import { ChoiceProvider } from "./choices/ChoiceProvider"
import { ChoiceList } from "./choices/ChoiceList"

export const ApplicationViews = (props) => {
  return (
    <>
      <Route exact path="/">
        <ChoiceProvider>
          <ChoiceList />
        </ChoiceProvider>
      </Route>

      <Route exact path="/weight">
        <WeightProvider>
         <WeightList />
        </WeightProvider>
      </Route>
    </>
  )
}