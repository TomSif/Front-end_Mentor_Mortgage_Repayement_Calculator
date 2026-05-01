import { useId } from "react";
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
  const id = useId();
  return (
    <div className="flex flex-col gap-3 w-full flex-1 min-w-0">
      <label className="text-preset-4 text-slate-700" htmlFor={unity}>
        {label}
      </label>
      <div
        className={cn(
          "group flex border border-slate-500  hover:not-focus-within:border-slate-900 rounded-sm hover:cursor-pointer focus-within:border-lime transition-colors duration-200",
          isRight ? "flex-row-reverse justify-between" : "justify-start",
          { "border-red": isError },
        )}
      >
        <span
          className={cn(
            "px-4 py-3 text-preset-3 text-slate-700 bg-slate-100 group-focus-within:bg-lime transition-colors duration-200",
            {
              " text-preset-3-error bg-red": isError,
            },
            isRight ? "rounded-r-sm" : "rounded-l-sm",
          )}
        >
          {unity}
        </span>
        <input
          className="border-none outline-none bg-transparent text-preset-3 text-slate-900 pl-4 hover:cursor-pointer flex-1 min-w-0 transition-colors duration-200"
          type="text"
          name={unity}
          id={unity}
          maxLength={9}
          value={value}
          aria-invalid={isError}
          aria-describedby={id + "-error"}
          onChange={(e) => {
            let sanitizedValue = e.target.value.replace(/[^0-9.]/g, "");
            const parts = sanitizedValue.split(".");
            if (parts.length > 2) {
              sanitizedValue = parts[0] + "." + parts.slice(1).join("");
            }
            onChange(sanitizedValue);
          }}
        />
      </div>
      {isError && (
        <p id={id + "-error"} className="text-preset-5 text-red">
          This field is required
        </p>
      )}
    </div>
  );
};

export default InputNumber;
