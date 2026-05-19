type SectionTitleProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionTitle({ title, subtitle, className = "" }: SectionTitleProps) {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl">{title}</h2>
      {subtitle ? <p className="prose-muted mt-2 max-w-2xl">{subtitle}</p> : null}
    </div>
  );
}
