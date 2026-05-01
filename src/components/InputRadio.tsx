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
        "flex items-center gap-4 px-3 py-3 border border-slate-500 rounded-sm cursor-pointer hover:border-lime transition relative has-focus-visible:bg-lime/15",
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
      <div
        className="w-5 h-5 rounded-full border border-slate-700 flex items-center justify-center
                peer-checked:border-lime peer-focus-visible:border-lime  transition  z-10"
      />
      <div className="w-3 h-3 rounded-full bg-lime scale-0 peer-checked:scale-100 peer-checked:bg-lime peer-focus-visible:bg-lime focus-visible:bg-lime transition z-20 absolute ml-1" />
      <span className="text-preset-3 text-slate-900">{label}</span>
    </label>
  );
};

export default InputRadio;
