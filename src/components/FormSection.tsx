import type { Inputs, Errors } from "../types";
import InputNumber from "./InputNumber";
import InputRadio from "./InputRadio";

interface FormSectionProps {
  inputs: Inputs;
  errors: Errors;
  onChange: (field: keyof Inputs, value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
}
const FormSection = ({
  inputs,
  errors,
  onChange,
  onSubmit,
  onClear,
}: FormSectionProps) => {
  return (
    <section className="py-8 px-6 flex flex-col gap-6 md:p-10 md:rounded-t-[1.25rem]  xl:rounded-l-[1.25rem] flex-1 min-w-0">
      <div className="flex flex-col gap-2 justify-start items-start text-left">
        <h1 className="text-preset-2 text-slate-900">Mortgage Calculator</h1>
        <button
          onClick={onClear}
          className="text-preset-4 text-slate-700 hover:cursor-pointer border hover:border-b-slate-900 border-transparent hover:text-slate-900"
        >
          Clear All
        </button>
      </div>
      <form
        className="w-full flex flex-col gap-6 flex-1 min-w-0"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <fieldset className="flex flex-col gap-6 w-full flex-1 min-w-0">
          <legend className="sr-only">Loan details</legend>
          <InputNumber
            unity={"£"}
            name={"loanAmount"}
            label={"Mortgage Amount"}
            isRight={false}
            isError={errors.loanAmount}
            value={inputs.loanAmount}
            onChange={(value) => onChange("loanAmount", value)}
            maxLength={8}
          />

          <div className="w-full flex flex-col md:flex-row gap-6">
            <InputNumber
              unity={"years"}
              name={"duration"}
              label={"Mortgage Term"}
              isRight={true}
              isError={errors.duration}
              value={inputs.duration}
              onChange={(value) => onChange("duration", value)}
              maxLength={3}
              max={100}
            />
            <InputNumber
              unity={"%"}
              name={"interestRate"}
              label={"Interest Rate"}
              isRight={true}
              isError={errors.interestRate}
              value={inputs.interestRate}
              onChange={(value) => onChange("interestRate", value)}
              maxLength={4}
              max={100}
            />
          </div>
        </fieldset>
        <fieldset className="flex flex-col gap-3 w-full">
          <legend className="text-preset-4 text-slate-700 mb-3">
            Mortgage type
          </legend>
          <InputRadio
            label={"repayment"}
            value={"repayment"}
            isSelected={inputs.loanType === "repayment"}
            onChange={(value) => onChange("loanType", value)}
          />
          <InputRadio
            label={"interest Only"}
            value={"interestOnly"}
            isSelected={inputs.loanType === "interestOnly"}
            onChange={(value) => onChange("loanType", value)}
          />
          {errors.loanType && (
            <p className="text-preset-5 text-red">This field is required</p>
          )}
        </fieldset>
        <button
          type="submit"
          className="bg-lime text-preset-3 text-slate-900 flex items-center justify-center py-4 rounded-full max-w-82 w-full relative after:content-[''] after:absolute after:inset-0 hover:after:bg-white/50 hover:cursor-pointer"
        >
          <img
            className="w-4 mr-4 z-20"
            src="../../assets/images/icon-calculator.svg"
            alt=""
          />
          <span className="z-20">Calculate Repayments</span>
        </button>
      </form>
    </section>
  );
};

export default FormSection;
