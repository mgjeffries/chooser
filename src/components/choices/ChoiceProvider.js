import React, { useState } from "react";

export const ChoiceContext = React.createContext();

export const ChoiceProvider = (props) => {
  const [choices, setChoices] = useState([]);

  const getChoices = () => {
    return (
      fetch("https://chooser-server.herokuapp.com/choices")
        .then((res) => res.json())
        // Filter choices to only expose choices for the current user
        .then((choices) =>
          choices.filter(
            (choice) =>
              choice.userId === parseInt(localStorage.getItem("chooser_user"))
          )
        )
        .then(setChoices)
    );
  };

  const addChoice = (choice) => {
    let addedchoice = {};
    return fetch("https://chooser-server.herokuapp.com/choices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(choice),
    })
      .then((res) => res.json())
      .then((responseChoice) => (addedchoice = responseChoice))
      .then(getChoices)
      .then((res) => addedchoice);
  };

  const editChoice = (choice) => {
    return fetch(`https://chooser-server.herokuapp.com/choices/${choice.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(choice),
    }).then(getChoices);
  };

  const deleteChoice = (choice) => {
    return fetch(`https://chooser-server.herokuapp.com/choices/${choice.id}`, {
      method: "DELETE",
    }).then(getChoices);
  };

  return (
    <ChoiceContext.Provider
      value={{
        choices,
        getChoices,
        addChoice,
        editChoice,
        deleteChoice,
      }}
    >
      {props.children}
    </ChoiceContext.Provider>
  );
};
