import { HTMLAttributes, ReactNode } from "react";

interface SectionCheckoutProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  children: ReactNode;
}

export function ModalAddress({
  title,
  children,
  ...rest
}: SectionCheckoutProps) {
  return (
    <div {...rest} >
      <h2 className="font-bold text-md text-slate-950 mb-2" >
        {title}
      </h2>

      {children}
    </div>
  );
}