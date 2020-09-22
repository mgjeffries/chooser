import React, { useContext, useEffect, useState, useRef } from "react";
import { ChoiceContext } from "../choices/ChoiceProvider";
import { AddOption } from "../options/AddOption";
import { OptionContext } from "../options/OptionProvider";
import { Option } from "../options/Option";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const FlowOptions = (props) => {
  const { choices, getChoices } = useContext(ChoiceContext);
  const { options, getOptions, editOption } = useContext(OptionContext);
  const [choiceOptions, setChoiceOptions] = useState([]);

  useEffect(() => {
    getChoices();
    getOptions();
  }, []);

  useEffect(() => {
    const choice =
      choices.find((c) => c.id === parseInt(props.match.params.choiceId)) || {};
    const choiceOptions = options.filter((f) => f.choiceId === choice.id);
    setChoiceOptions(choiceOptions);
  }, [choices, options]);

  const handleControlledInputChange = (event, optionId) => {
    const newOptions = choiceOptions.slice();
    newOptions.forEach((option) => {
      if (option.id === optionId) {
        option[event.target.name] = event.target.value;
      }
    });
    setChoiceOptions(newOptions);
  };

  const saveChoiceOptions = () => {
    choiceOptions.forEach((option) => {
      editOption(option);
    });
  };

  return (
    <>
      <section className="choice__options">
        <h1 className="option__prompt">
          What are the options for this choice?
        </h1>
        <Form striped bordered>
          {choiceOptions.map((option) => {
            return (
              <Form.Control
                key={option.id}
                type="text"
                defaultValue={option.name}
                name="name"
                onChange={(changeEvent) => {
                  handleControlledInputChange(changeEvent, option.id);
                }}
              />
            );
          })}
        </Form>
        <AddOption {...props} />
        <Button
          variant="primary"
          onClick={(clickEvent) => {
            saveChoiceOptions();
            props.history.push(
              `/choices/${props.match.params.choiceId}/factors`
            );
          }}
        >
          next
        </Button>
      </section>
    </>
  );
};
