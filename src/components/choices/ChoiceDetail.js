import React, { useContext, useEffect, useState, useRef } from "react";
import { ChoiceContext } from "./ChoiceProvider";
import { WeightList } from "../weights/WeightSelect";
import { AddFactor } from "../factors/AddFactor";
import { FactorContext } from "../factors/FactorProvider";
import { Factor } from "../factors/Factor";
import { AddOption } from "../options/AddOption";
import { OptionContext } from "../options/OptionProvider";
import { Option } from "../options/Option";
import Table from "react-bootstrap/Table";
import { Rating } from "../ratings/Rating";
import { ChoiceHeader } from "./ChoiceHeader";
import { ScoreContext } from "../scores/ScoreProvider";
import { WeightWallet } from "../weights/WeightWallet";
import { ScoreChart } from "../scores/ScoreChart";

export const ChoiceDetail = (props) => {
  const { choices, getChoices } = useContext(ChoiceContext);
  const { factors, getFactors } = useContext(FactorContext);
  const { options, getOptions } = useContext(OptionContext);
  const { scores } = useContext(ScoreContext);
  const [choice, setChoice] = useState({});
  const [choiceFactors, setChoiceFactors] = useState([]);
  const [choiceOptions, setChoiceOptions] = useState([]);

  useEffect(() => {
    getChoices();
    getFactors();
    getOptions();
  }, []);

  useEffect(() => {
    const choiceCopy =
      choices.find((c) => c.id === parseInt(props.match.params.choiceId)) || {};
    const choiceFactors = factors.filter((f) => f.choiceId === choiceCopy.id);
    const choiceOptions = options.filter((f) => f.choiceId === choiceCopy.id);
    setChoice(choiceCopy);
    setChoiceFactors(choiceFactors);
    setChoiceOptions(choiceOptions);
  }, [choices, factors, options]);

  const calculateChoiceWeightsUsed = () => {
    let choiceWeightsUsed = 0;
    choiceOptions.forEach((option) => {
      choiceWeightsUsed += scores.find((score) => score.optionId === option.id)
        .weightsUsed;
    });
    return choiceWeightsUsed;
  };

  return (
    <>
      <section className="choice">
        <ChoiceHeader {...props} choice={choice} />
        <div className="table-responsive">
          <Table striped bordered>
            <thead>
              <tr>
                <th></th>
                {choiceFactors.map((cf) => {
                  return <Factor factor={cf} key={cf.id} />;
                })}
              </tr>
            </thead>
            <tbody>
              {choiceOptions.map((cO) => {
                return (
                  <tr key={cO.id}>
                    <Option option={cO} />
                    {choiceFactors.map((cf) => {
                      return (
                        <Rating
                          option={cO}
                          factor={cf}
                          choice={choice}
                          key={cf.id}
                        />
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <div className="choice__tableControls">
          <AddOption {...props} />
          <AddFactor {...props} />
        </div>
        <WeightWallet
          choice={choice}
          weightsUsed={calculateChoiceWeightsUsed()}
          {...props}
        />
        <ScoreChart choice={choice} />
      </section>
    </>
  );
};
