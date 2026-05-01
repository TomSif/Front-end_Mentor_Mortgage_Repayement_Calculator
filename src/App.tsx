import { useState } from "react";
import type { Inputs, Errors } from "./types";
import FormSection from "./components/FormSection";
import ResultSection from "./components/ResultSection";
import useMortgageCalculator from "./hooks/useMortgageCalculator";

function App() {
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

  const { result, calculate, reset } = useMortgageCalculator();

  const onClearAll = () => {
    const initialState: Inputs = {
      loanAmount: "",
      duration: "",
      interestRate: "",
      loanType: "",
    };
    setInputs(initialState);
    const clearError: Errors = {
      loanAmount: false,
      duration: false,
      interestRate: false,
      loanType: false,
    };
    setErrors(clearError);
    reset();
  };

  const handleSubmit = () => {
    const newErrors = {
      loanAmount: inputs.loanAmount === "",
      duration: inputs.duration === "",
      interestRate: inputs.interestRate === "",
      loanType: inputs.loanType === "",
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some((value) => value === true)) return;
    calculate(inputs);
  };

  return (
    <main className="flex flex-col bg-white xl:flex-row md:rounded-[1.25rem]">
      <FormSection
        inputs={inputs}
        errors={errors}
        onChange={(field, value) => {
          setInputs((prev) => ({
            ...prev,
            [field]: value,
          }));
        }}
        onSubmit={handleSubmit}
        onClear={onClearAll}
      />
      <ResultSection result={result} />
    </main>
  );
}

export default App;
