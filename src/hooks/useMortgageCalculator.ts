import { useState } from "react";
import { Inputs } from "../types";

export interface Result {
  monthlyPayment: number;
  totalRepayment: number;
}
const useMortgageCalculator = () => {
  const [result, setResult] = useState<Result | null>(null);

  const calculate = (inputs: Inputs) => {
    const loanAmount = Number(inputs.loanAmount);
    const interestRate = Number(inputs.interestRate);
    const duration = Number(inputs.duration);

    const r = interestRate / 100 / 12;
    const n = duration * 12;

    const monthlyResult =
      inputs.loanType === "repayment"
        ? (loanAmount * (r * (1 + r) ** n)) / ((1 + r) ** n - 1)
        : loanAmount * r;

    const totalResult =
      inputs.loanType === "repayment"
        ? monthlyResult * n
        : monthlyResult * n + loanAmount;

    setResult({ monthlyPayment: monthlyResult, totalRepayment: totalResult });
  };

  const reset = () => setResult(null);

  return { result, calculate, reset };
};

export default useMortgageCalculator;
