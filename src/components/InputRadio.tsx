import { cn } from "../lib/cn";

interface InputRadioProps {
  label: string;
  value: "repayment" | "interestOnly";
  isSelected: boolean;
  onChange: (value: "repayment" | "interestOnly") => void;
}

const InputRadio = ({
  label,
  value,
  onChange,
  isSelected,
}: InputRadioProps) => {
  return (
    <label
      className={cn(
        "hover:border-lime has-focus-visible:bg-lime/15 relative flex cursor-pointer items-center gap-4 rounded-sm border border-slate-500 px-3 py-3 transition",
        isSelected && "bg-lime/15",
      )}
    >
      <input
        className="peer sr-only"
        type="radio"
        name={"loanType"}
        value={value}
        checked={isSelected}
        onChange={(e) =>
          onChange(e.target.value as "repayment" | "interestOnly")
        }
      />
      <div className="peer-checked:border-lime peer-focus-visible:border-lime z-10 flex h-5 w-5 items-center justify-center rounded-full border border-slate-700 transition" />
      <div className="bg-lime peer-checked:bg-lime peer-focus-visible:bg-lime focus-visible:bg-lime absolute z-20 ml-1 h-3 w-3 scale-0 rounded-full transition peer-checked:scale-100" />
      <span className="text-preset-3 text-slate-900">{label}</span>
    </label>
  );
};

export default InputRadio;
