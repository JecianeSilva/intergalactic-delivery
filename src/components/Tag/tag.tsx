import { HTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "solid" | "outline";
  asChild?: boolean;
  isSelected?: boolean;
}

export function Tag({
  variant = "solid",
  asChild,
  isSelected,
  ...rest
}: TagProps) {
  const Component = asChild ? Slot : "span";

  return (
    <Component
      className={`rounded-full uppercase font-bold text-xs py-[0.375rem] px-3 whitespace-nowrap
        ${variant === "outline"
          ? isSelected
            ? "border border-blue-950 text-white bg-blue-900"
            : "border border-blue-600 text-blue-600"
          : "bg-white text-blue-600"
        }
      `}
      {...rest}
    />
  );
}