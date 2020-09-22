import React, { useState } from "react";

export const OptionContext = React.createContext();

export const OptionProvider = (props) => {
  const [options, setOptions] = useState([]);

  const getOptions = () => {
    return fetch("http://localhost:8088/options")
      .then((res) => res.json())
      .then(setOptions);
  };

  const addOption = (option) => {
    return fetch("http://localhost:8088/options", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(option),
    }).then(getOptions);
  };

  const editOption = (option) => {
    return fetch(`http://localhost:8088/options/${option.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(option),
    }).then(getOptions);
  };

  const deleteOption = (option) => {
    return fetch(`http://localhost:8088/options/${option.id}`, {
      method: "DELETE",
    }).then(getOptions);
  };

  return (
    <OptionContext.Provider
      value={{
        options,
        getOptions,
        addOption,
        deleteOption,
        editOption,
      }}
    >
      {props.children}
    </OptionContext.Provider>
  );
};
