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
import { ScoreProvider } from "./scores/ScoreProvider"
import { FlowName } from "./flow/FlowName"
import { FlowOptions } from "./flow/FlowOptions"
import { FlowFactors } from "./flow/FlowFactors"

export const ApplicationViews = (props) => {
  return (
    <>
      <ChoiceProvider>
        <WeightProvider>
          <FactorProvider>
            <OptionProvider>
              <ModalProvider>
                <RatingProvider>
                  <ScoreProvider>
      
                    <Route exact path="/">
                        <ChoiceList {...props} />
                    </Route>
                    
                    <Route exact path="/choices/:choiceId(\d+)/name" render={
                        props => <FlowName {...props} />
                    } />
                    <Route exact path="/choices/:choiceId(\d+)/options" render={
                        props => <FlowOptions {...props} />
                    } />
                    <Route exact path="/choices/:choiceId(\d+)/factors" render={
                        props => <FlowFactors {...props} />
                    } />

                    <Route exact path="/choices/:choiceId(\d+)" render={
                        props => <ChoiceDetail {...props} />
                    } />
                    <ChooserModal />
      
                  </ScoreProvider>
                </RatingProvider>
              </ModalProvider>
            </OptionProvider>
          </FactorProvider>
        </WeightProvider>
      </ChoiceProvider>

    </>
  )
}