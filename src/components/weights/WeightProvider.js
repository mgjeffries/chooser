import React, { useState } from "react";

export const WeightContext = React.createContext();

export const WeightProvider = (props) => {
  const [weights, setWeights] = useState([]);

  const getWeights = () => {
    return fetch("http://chooser-server.herokuapp.com/weights")
      .then((res) => res.json())
      .then(setWeights);
  };

  const addWeight = (weight) => {
    return fetch("http://chooser-server.herokuapp.com/weights", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(weight),
    }).then(getWeights);
  };

  return (
    <WeightContext.Provider
      value={{
        weights,
        getWeights,
        addWeight,
      }}
    >
      {props.children}
    </WeightContext.Provider>
  );
};
