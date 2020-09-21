import React, { useContext, useEffect, useState, useRef } from "react";
import { ChoiceContext } from "../choices/ChoiceProvider";
import { AddOption } from "../options/AddOption";
import { OptionContext } from "../options/OptionProvider";
import { Option } from "../options/Option";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export const FlowOptions = (props) => {
  const { choices, getChoices } = useContext(ChoiceContext);
  const { options, getOptions } = useContext(OptionContext);
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

  return (
    <>
      <section className="choice__options">
        <div className="option__prompt">
          What are the options in this choice?
        </div>
        <Table striped bordered>
          <tbody>
            {choiceOptions.map((cO) => {
              return (
                <tr key={cO.id}>
                  <Option option={cO} />
                </tr>
              );
            })}
          </tbody>
        </Table>
        <AddOption {...props} />
        <Button
          variant="primary"
          onClick={(clickEvent) => {
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
