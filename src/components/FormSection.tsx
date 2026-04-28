import { useState } from "react";
import type { Inputs, Errors } from "../types";
import InputNumber from "./InputNumber";
import InputRadio from "./InputRadio";

const FormSection = () => {
  const [inputs, setInputs] = useState<Inputs>({
    loanAmount: "",
    duration: "",
    interestRate: "",
    loanType: "",
  });
  const [errors, setErrors] = useState<Errors>({
    loanAmount: false,
    duration: false,
    interestRate: false,
    loanType: false,
  });
  return (
    <section className="w-full py-8 px-6 flex flex-col gap-6">
      <div className="flex flex-col gap-2 justify-start items-start text-left">
        <h1 className="text-preset-2 text-slate-900">Mortgage Calculator</h1>
        <button className="text-preset-4 text-slate-700">Clear All</button>
      </div>
      <form className="w-full flex flex-col gap-6" action="">
        <fieldset className="flex flex-col gap-6 w-full">
          <legend className="sr-only">Loan details</legend>
          <InputNumber
            unity={"£"}
            label={"Mortgage Amount"}
            isRight={true}
            isError={errors.loanAmount}
            value={inputs.loanAmount}
            onChange={(value) =>
              setInputs((prev) => ({
                ...prev,
                loanAmount: value,
              }))
            }
          />
          <div className="w-full flex flex-col gap-6">
            <InputNumber
              unity={"years"}
              label={"Mortgage Term"}
              isRight={false}
              isError={errors.duration}
              value={inputs.duration}
              onChange={(value) =>
                setInputs((prev) => ({
                  ...prev,
                  duration: value,
                }))
              }
            />
            <InputNumber
              unity={"%"}
              label={"Interest Rate"}
              isRight={false}
              isError={errors.interestRate}
              value={inputs.interestRate}
              onChange={(value) =>
                setInputs((prev) => ({
                  ...prev,
                  interestRate: value,
                }))
              }
            />
          </div>
        </fieldset>
        <fieldset className="flex flex-col gap-3 w-full">
          <legend className="text-preset-4 text-slate-700 mb-3">
            Mortgage type
          </legend>
          <InputRadio
            label={"repayement"}
            value={"repayment"}
            isSelected={inputs.loanType === "repayment"}
            onChange={(value) =>
              setInputs((prev) => ({
                ...prev,
                loanType: value,
              }))
            }
          />
          <InputRadio
            label={"interest Only"}
            value={"interestOnly"}
            isSelected={inputs.loanType === "interestOnly"}
            onChange={(value) =>
              setInputs((prev) => ({
                ...prev,
                loanType: value,
              }))
            }
          />
        </fieldset>
      </form>
    </section>
  );
};

export default FormSection;
