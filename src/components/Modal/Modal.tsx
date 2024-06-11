import { HTMLAttributes, ReactNode } from "react";

interface SectionCheckoutProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  children: ReactNode;
}

export function Modal({
  title,
  children,
  ...rest
}: SectionCheckoutProps) {
  return (
    <div {...rest} >
      <h2 className="font-bold text-lg text-slate-950 mb-4" >
        {title}
      </h2>
      {children}
    </div>
  );
}