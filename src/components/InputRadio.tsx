interface InputRadioProps {
  label: string;
  value: "repayment" | "interestOnly";
  onChange: (value: "repayment" | "interestOnly") => void;
}

const InputRadio = ({ label, value, onChange }: InputRadioProps) => {
  return (
    <label className="flex items-center gap-4 px-3 py-3 border border-slate-500 rounded-sm cursor-pointer hover:border-lime transition">
      <input
        className="peer sr-only"
        type="radio"
        name={"loanType"}
        value={value}
        onChange={(e) =>
          onChange(e.target.value as "repayment" | "interestOnly")
        }
      />
      <div
        className="w-5 h-5 rounded-full border border-slate-700 flex items-center justify-center
                peer-checked:border-lime transition relative z-10"
      />
      <div className="w-3 h-3 rounded-full bg-lime scale-0 peer-checked:scale-100 peer-checked:bg-lime transition z-20 absolute ml-1" />
      <span className="text-preset-3 text-slate-900">{label}</span>
    </label>
  );
};

export default InputRadio;
