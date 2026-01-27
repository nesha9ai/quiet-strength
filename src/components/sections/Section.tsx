import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
  divider?: boolean;
  id?: string;
}

export function Section({ 
  children, 
  className, 
  narrow = true, 
  divider = false,
  id 
}: SectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        "py-section",
        divider && "border-b border-neutral/50",
        className
      )}
    >
      <div className={narrow ? "container-narrow" : "container-wide"}>
        {children}
      </div>
    </section>
  );
}
