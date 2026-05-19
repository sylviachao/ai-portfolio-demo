import type { ReactNode } from "react";

type CardSectionProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function CardSection({ title, children, className = "" }: CardSectionProps) {
  return (
    <section className={`mt-5 sm:mt-6 ${className}`}>
      <h4 className="card-label">{title}</h4>
      <div className="mt-2.5">{children}</div>
    </section>
  );
}
