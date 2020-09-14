import React from "react"
import { Route } from "react-router-dom"
import { WeightList } from "./weights/WeightList"
import { WeightProvider } from "./weights/WeightProvider"

export const ApplicationViews = (props) => {
  return (
    <>
      <Route exact path="/">
        <div>Yo</div>
      </Route>

      <Route exact path="/weight">
        <WeightProvider>
         <WeightList />
        </WeightProvider>
      </Route>
    </>
  )
}