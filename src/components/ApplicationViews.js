import React from "react"
import { Route } from "react-router-dom"
import { WeightList } from "./weights/WeightList"
import { WeightProvider } from "./weights/WeightProvider"
import { ChoiceProvider } from "./choices/ChoiceProvider"
import { ChoiceList } from "./choices/ChoiceList"
import { ChoiceDetail } from "./choices/ChoiceDetail"

export const ApplicationViews = (props) => {
  return (
    <>
      <ChoiceProvider>
        <Route exact path="/">
            <ChoiceList />
        </Route>
        <Route path="/choices/:choiceId(\d+)" render={
            props => <ChoiceDetail {...props} />
        } />
      </ChoiceProvider>

      <Route exact path="/weight">
        <WeightProvider>
         <WeightList />
        </WeightProvider>
      </Route>
    </>
  )
}