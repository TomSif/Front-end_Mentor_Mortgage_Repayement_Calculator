import { cn } from "../lib/cn";

interface InputNumberProps {
  unity: string;
  label: string;
  isRight: boolean;
  isError: boolean;
  value: string;
  onChange: (value: string) => void;
}

const InputNumber = ({
  unity,
  label,
  isRight,
  isError,
  value,
  onChange,
}: InputNumberProps) => {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-preset-4 text-slate-700" htmlFor={unity}>
        {label}
      </label>
      <div
        className={cn(
          "input-wrapper flex border border-slate-500 rounded-sm",
          isRight ? "flex-row-reverse justify-between" : "justify-start",
        )}
      >
        <span
          className={cn("px-4 py-3 text-preset-3 text-slate-700 bg-slate-100", {
            "text-white bg-red": isError,
          })}
        >
          {unity}
        </span>
        <input
          className="border-none outline-none bg-transparent text-preset-3 text-slate-900 pl-4"
          type="number"
          name={unity}
          id={unity}
          min={1}
          max={999999999}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      {isError && (
        <p className="text-preset-5 text-red">This field is required</p>
      )}
    </div>
  );
};

export default InputNumber;
