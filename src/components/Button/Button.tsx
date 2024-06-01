import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function Button({ label, className, ...rest }: ButtonProps) {
  return (
    <button
      className={`w-[368px] h-12 bg-blue-600 flex items-center justify-center rounded-md text-white uppercase text-sm leading-[1.6] font-sans font-bold transition enabled:hover:bg-blue-900 disabled:cursor-not-allowed ${className}`}
      {...rest}
    >
      {label}
    </button>
  );
}