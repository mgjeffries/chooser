import React, { useContext, useEffect, useState, useRef } from "react";
import { OptionContext } from "../options/OptionProvider";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

export const FlowOptions = (props) => {
  const { addOption, deleteOption } = useContext(OptionContext);
  const [choiceOptions, setChoiceOptions] = useState([]);
  const defaultOptionName = "";

  const handleControlledInputChange = (event, optionIndex) => {
    const newOptions = choiceOptions.slice();
    newOptions[optionIndex][event.target.name] = event.target.value;
    setChoiceOptions(newOptions);
  };

  const saveChoiceOptions = () => {
    choiceOptions.forEach((option) => {
      if (option.name !== defaultOptionName) addOption(option);
    });
  };
  const deleteChoiceOption = (optionIndex) => {
    const newChoiceOptions = choiceOptions.slice();
    newChoiceOptions.shift(optionIndex);
    setChoiceOptions(newChoiceOptions);
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
          {choiceOptions.map((option, optionIndex) => {
            return (
              <Form.Row className="align-items-center" key={optionIndex}>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Name this option"
                    name="name"
                    value={option.name}
                    onChange={(changeEvent) => {
                      handleControlledInputChange(changeEvent, optionIndex);
                    }}
                  />
                </Col>
                <Col xs="auto">
                  <Button
                    variant="outline-danger"
                    onClick={(clickEvent) => {
                      deleteChoiceOption(optionIndex);
                    }}
                  >
                    delete
                  </Button>
                </Col>
              </Form.Row>
            );
          })}
        </Form>
        <Button
          onClick={(evt) => {
            const newChoiceOptions = choiceOptions.slice();
            newChoiceOptions.push({
              name: defaultOptionName,
              choiceId: parseInt(props.match.params.choiceId),
            });
            setChoiceOptions(newChoiceOptions);
          }}
          className="btn"
        >
          Add Option
        </Button>
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
