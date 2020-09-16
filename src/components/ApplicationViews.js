import React from "react"
import { Route } from "react-router-dom"
import { WeightProvider } from "./weights/WeightProvider"
import { ChoiceProvider } from "./choices/ChoiceProvider"
import { ChoiceList } from "./choices/ChoiceList"
import { ChoiceDetail } from "./choices/ChoiceDetail"
import { FactorProvider } from "./factors/FactorProvider"
import { OptionProvider } from "./options/OptionProvider"
import { ModalProvider } from "./modals/ModalProvider"
import { ChooserModal } from "./modals/ChooserModal"
import { RatingProvider } from "./ratings/RatingProvider"

export const ApplicationViews = (props) => {
  return (
    <>
      <ChoiceProvider>
        <WeightProvider>
          <FactorProvider>
            <OptionProvider>
              <ModalProvider>
                <RatingProvider>
                  <Route exact path="/">
                      <ChoiceList />
                  </Route>
                  <Route path="/choices/:choiceId(\d+)" render={
                      props => <ChoiceDetail {...props} />
                  } />
                  <ChooserModal />
                </RatingProvider>
              </ModalProvider>
            </OptionProvider>
          </FactorProvider>
        </WeightProvider>
      </ChoiceProvider>

    </>
  )
}