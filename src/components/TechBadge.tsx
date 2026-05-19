type TechBadgeProps = {
  label: string;
  /** "focus" = engineering areas; "stack" = tools and runtimes. */
  variant?: "stack" | "focus";
};

export function TechBadge({ label, variant = "stack" }: TechBadgeProps) {
  const styles =
    variant === "focus"
      ? "bg-neutral-100 text-neutral-700 ring-neutral-200/90"
      : "bg-white text-neutral-600 ring-neutral-200";

  return (
    <span
      className={`inline-flex max-w-full items-center rounded-md px-2 py-1 text-[11px] font-medium leading-tight ring-1 ring-inset sm:text-xs ${styles}`}
    >
      {label}
    </span>
  );
}
