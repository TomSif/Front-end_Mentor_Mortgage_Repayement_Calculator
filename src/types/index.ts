export interface Inputs {
  loanAmount: string;
  duration: string;
  interestRate: string;
  loanType: "repayment" | "interestOnly";
}

export type Errors = Record<keyof Inputs, boolean>;
