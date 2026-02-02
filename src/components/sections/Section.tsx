import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
  divider?: boolean;
  id?: string;
  label?: string;
}

export function Section({ 
  children, 
  className, 
  narrow = true, 
  divider = false,
  id,
  label
}: SectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        "pt-12 md:pt-16 pb-10 md:pb-14",
        className
      )}
    >
      <div className={narrow ? "container-narrow" : "container-editorial"}>
        {label && <p className="section-label">— {label}</p>}
        {children}
        {divider && (
          <div className="mt-20 md:mt-28">
            <div className="divider-editorial"></div>
          </div>
        )}
      </div>
    </section>
  );
}
