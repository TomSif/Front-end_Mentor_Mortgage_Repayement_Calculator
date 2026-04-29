import { useState } from "react";
import type { Inputs, Errors } from "./types";
import FormSection from "./components/FormSection";
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

  const { result, calculate } = useMortgageCalculator();

  const handleSubmit = () => {
    const newErrors = {
      loanAmount: inputs.loanAmount === "",
      duration: inputs.duration === "",
      interestRate: inputs.interestRate === "",
      loanType: inputs.loanType === "",
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some((value) => value === true)) return;
    const parsedInputs = {
      ...inputs,
      loanAmount: Number(inputs.loanAmount),
      interestRate: Number(inputs.interestRate),
      duration: Number(inputs.duration),
    };

    calculate(parsedInputs);
  };

  return (
    <main className="flex flex-col md:p-10">
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
      />
    </main>
  );
}

export default App;
