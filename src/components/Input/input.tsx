import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  isOptional?: boolean;
  label: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, isOptional, label, ...rest }, ref) => {
    {
      return (
        <div
          className={`max-w-content flex-1 max-[400px]:w-full`}
        >
          <label className="text-md font-medium text-gray-700">{label}{!isOptional && <span className="text-red-500 ml-1">*</span>}</label>

          <div className={`w-full h-12`}>
            <input
              className={`w-full h-full rounded-md bg-transparent border-solid border-2 ${error ? "border-red-500" : "border-gray-300"} text-gray-800 text-sm outline-none px-2 focus:border-blue-500`}
              ref={ref}
              {...rest}
            />
          </div>

          {!!error && (
            <span className="font-medium text-red-500 text-sm">{error}</span>
          )}
        </div>
      );
    }
  }
);