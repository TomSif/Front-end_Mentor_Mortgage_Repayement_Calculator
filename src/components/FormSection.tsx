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
    <section className="flex min-w-0 flex-1 flex-col gap-6 px-6 py-8 md:rounded-t-[1.25rem] md:p-10 xl:rounded-l-[1.25rem]">
      <div className="flex flex-col items-start justify-start gap-2 text-left">
        <h1 className="text-preset-2 text-slate-900">Mortgage Calculator</h1>
        <button
          onClick={onClear}
          className="text-preset-4 border border-transparent text-slate-700 hover:cursor-pointer hover:border-b-slate-900 hover:text-slate-900"
        >
          Clear All
        </button>
      </div>
      <form
        className="flex w-full min-w-0 flex-1 flex-col gap-6"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <fieldset className="flex w-full min-w-0 flex-1 flex-col gap-6">
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

          <div className="flex w-full flex-col gap-6 md:flex-row">
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
        <fieldset
          aria-describedby={errors.loanType ? "errorRadio" : undefined}
          className="flex w-full flex-col gap-3"
        >
          <legend className="text-preset-4 mb-3 text-slate-700">
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
          <p id="errorRadio" className="text-preset-5 text-red">
            {errors.loanType ? "This field is required" : ""}
          </p>
        </fieldset>
        <button
          type="submit"
          className="bg-lime text-preset-3 relative flex w-full max-w-82 items-center justify-center rounded-full py-4 text-slate-900 after:absolute after:inset-0 after:content-[''] hover:cursor-pointer hover:after:bg-white/50"
        >
          <img
            className="z-20 mr-4 w-4"
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
