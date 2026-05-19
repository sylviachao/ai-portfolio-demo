import { Fragment } from "react";
import { FLOW_DOWN, FLOW_NEXT } from "../constants/flow";
import type { SystemArchitecture } from "../data/projects";

const variantStyles = {
  default: "border-neutral-200 bg-white text-neutral-800",
  api: "border-neutral-300 bg-neutral-50 text-neutral-900",
  orchestration: "border-neutral-300 bg-white text-neutral-900",
  validation: "border-neutral-400 bg-neutral-100 text-neutral-900",
  provider: "border-neutral-200 bg-white text-neutral-700",
  storage: "border-neutral-200 bg-neutral-50 text-neutral-700",
} as const;

type ArchitectureDiagramProps = {
  architecture: SystemArchitecture;
};

export function ArchitectureDiagram({ architecture }: ArchitectureDiagramProps) {
  const { layers, caption } = architecture;

  return (
    <figure className="rounded-md border border-neutral-200 bg-neutral-50/80 p-3 sm:p-4">
      <div
        className="flex flex-col items-stretch gap-0"
        role="group"
        aria-label={caption ?? "System architecture diagram"}
      >
        {layers.map((layer, layerIndex) => (
          <Fragment key={`layer-${layerIndex}`}>
            {layerIndex > 0 ? (
              <div className="flex justify-center py-1.5" aria-hidden="true">
                <span className="font-mono text-xs text-neutral-400">{FLOW_DOWN}</span>
              </div>
            ) : null}
            {layer.label ? (
              <p className="mb-1.5 text-center text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                {layer.label}
              </p>
            ) : null}
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
              {layer.boxes.map((box, boxIndex) => (
                <Fragment key={`${box.label}-${boxIndex}`}>
                  {boxIndex > 0 ? (
                    <span className="select-none font-mono text-xs text-neutral-400" aria-hidden="true">
                      {FLOW_NEXT}
                    </span>
                  ) : null}
                  <span
                    className={`rounded border px-2.5 py-1.5 text-center text-[11px] font-medium leading-tight sm:text-xs ${variantStyles[box.role ?? "default"]}`}
                  >
                    {box.label}
                  </span>
                </Fragment>
              ))}
            </div>
          </Fragment>
        ))}
      </div>
      {caption ? (
        <figcaption className="prose-muted mt-3 text-center text-[11px]">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

