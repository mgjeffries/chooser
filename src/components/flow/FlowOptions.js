import React, { useContext, useEffect, useState, useRef } from "react";
import { ChoiceContext } from "../choices/ChoiceProvider";
import { AddOption } from "../options/AddOption";
import { OptionContext } from "../options/OptionProvider";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

export const FlowOptions = (props) => {
  const { choices, getChoices } = useContext(ChoiceContext);
  const { options, getOptions, editOption, deleteOption } = useContext(
    OptionContext
  );
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
        <div>
          For example, If you are thinking about what to drive, some options
          might be:
        </div>
        <div>•Buy a new car</div>
        <div>•Lease a new car</div>
        <div>•Buy a used car</div>
        <div>•Rideshare</div>
        <div>•Keep your current car</div>
        <Form>
          {choiceOptions.map((option) => {
            return (
              <Form.Row className="align-items-center" key={option.id}>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Name this option"
                    name="name"
                    onChange={(changeEvent) => {
                      handleControlledInputChange(changeEvent, option.id);
                    }}
                  />
                </Col>
                <Col xs="auto">
                  <Button
                    variant="outline-danger"
                    onClick={(clickEvent) => {
                      deleteOption(option);
                    }}
                  >
                    delete
                  </Button>
                </Col>
              </Form.Row>
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
