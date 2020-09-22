import React from "react";
import { Route } from "react-router-dom";
import { FlowFactors } from "../flow/FlowFactors";
import { FlowName } from "../flow/FlowName";
import { FlowOptions } from "../flow/FlowOptions";
import { ChoiceDetail } from "./ChoiceDetail";

export const ChoiceRouter = (props) => {
  return (
    <>
      <Route
        exact
        path="/choices/:choiceId(\d+)/name"
        render={(props) => <FlowName {...props} />}
      />
      <Route
        exact
        path="/choices/:choiceId(\d+)/options"
        render={(props) => <FlowOptions {...props} />}
      />
      <Route
        exact
        path="/choices/:choiceId(\d+)/factors"
        render={(props) => <FlowFactors {...props} />}
      />

      <Route
        exact
        path="/choices/:choiceId(\d+)"
        render={(props) => <ChoiceDetail {...props} />}
      />
    </>
  );
};
