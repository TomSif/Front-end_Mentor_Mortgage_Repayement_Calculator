import { useState } from "react";
import type { Inputs, Errors } from "./types";
import FormSection from "./components/FormSection";

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

  const handleSubmit = () => {
    const newErrors = {
      loanAmount: inputs.loanAmount === "",
      duration: inputs.duration === "",
      interestRate: inputs.interestRate === "",
      loanType: inputs.loanType === "",
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some((value) => value === true)) return;
    triggerCalculation();
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
