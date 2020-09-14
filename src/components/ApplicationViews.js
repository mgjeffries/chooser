import React from "react"
import { Route } from "react-router-dom"

export const ApplicationViews = (props) => {
  return (
    <>
      <Route exact path="/">
        <div>Yo</div>
      </Route>
    </>
  )
}