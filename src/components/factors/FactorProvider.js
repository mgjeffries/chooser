import React, { useState } from "react";

export const FactorContext = React.createContext();

export const FactorProvider = (props) => {
  const [factors, setFactors] = useState([]);

  const getFactors = () => {
    return fetch("https://chooser-server.herokuapp.com/factors")
      .then((res) => res.json())
      .then(setFactors);
  };

  const addFactor = (factor) => {
    return fetch("https://chooser-server.herokuapp.com/factors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(factor),
    }).then(getFactors);
  };

  const editFactor = (factor) => {
    return fetch(`https://chooser-server.herokuapp.com/factors/${factor.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(factor),
    }).then(getFactors);
  };

  const deleteFactor = (factor) => {
    return fetch(`https://chooser-server.herokuapp.com/factors/${factor.id}`, {
      method: "DELETE",
    }).then(getFactors);
  };

  return (
    <FactorContext.Provider
      value={{
        factors,
        getFactors,
        addFactor,
        deleteFactor,
        editFactor,
      }}
    >
      {props.children}
    </FactorContext.Provider>
  );
};
