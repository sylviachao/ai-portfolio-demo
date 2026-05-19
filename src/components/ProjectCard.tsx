import { Fragment } from "react";
import { FLOW_NEXT } from "../constants/flow";
import type { FeaturedProject } from "../data/projects";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { CardSection } from "./CardSection";
import { TechBadge } from "./TechBadge";

export type ProjectCardProps = {
  project: FeaturedProject;
};

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-sm leading-relaxed text-neutral-600">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-400" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  const {
    title,
    impactStatement,
    impactMetrics,
    summary,
    problem,
    workflow,
    architecture,
    engineeringChallenges,
    reliabilityConcerns,
    technicalFocus,
    techStack,
    result,
    confidentialityNote,
  } = project;

  return (
    <article className="flex h-full w-full flex-col rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 sm:p-6">
      <header className="space-y-3">
        <h3 className="text-lg font-semibold leading-snug tracking-tight text-neutral-900 sm:text-xl">
          {title}
        </h3>
        <p className="text-sm font-medium leading-snug text-neutral-900">{impactStatement}</p>
        {impactMetrics && impactMetrics.length > 0 ? (
          <ul className="space-y-1.5 rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-sm text-neutral-800">
            {impactMetrics.map((metric) => (
              <li key={metric} className="flex gap-2 leading-snug">
                <span className="font-medium text-neutral-500" aria-hidden="true">
                  -
                </span>
                <span>{metric}</span>
              </li>
            ))}
          </ul>
        ) : null}
        <div>
          <p className="card-label">Approach</p>
          <p className="prose-muted mt-1.5 text-sm leading-relaxed">{summary}</p>
        </div>
        <div>
          <p className="card-label">Context</p>
          <p className="mt-1.5 border-l-2 border-neutral-300 pl-3 text-sm leading-relaxed text-neutral-600">
            {problem}
          </p>
        </div>
      </header>

      <CardSection title="High-level flow">
        <div
          className="-mx-1 overflow-x-auto px-1 pb-1 sm:overflow-visible sm:pb-0"
          tabIndex={0}
          aria-label="High-level processing flow"
        >
          <div className="flex min-w-min flex-wrap items-center gap-x-1.5 gap-y-2 sm:min-w-0">
            {workflow.map((step, index) => (
              <Fragment key={`${step}-${index}`}>
                {index > 0 ? (
                  <span className="select-none px-0.5 font-mono text-xs text-neutral-400" aria-hidden="true">
                    {FLOW_NEXT}
                  </span>
                ) : null}
                <span className="whitespace-nowrap rounded border border-neutral-200 bg-neutral-50 px-2 py-1 text-xs font-medium leading-snug text-neutral-800">
                  {step}
                </span>
              </Fragment>
            ))}
          </div>
        </div>
      </CardSection>

      <CardSection title="System architecture">
        <ArchitectureDiagram architecture={architecture} />
      </CardSection>

      <CardSection title="Engineering challenges">
        <BulletList items={engineeringChallenges} />
      </CardSection>

      {reliabilityConcerns && reliabilityConcerns.length > 0 ? (
        <CardSection title="Key reliability concerns">
          <BulletList items={reliabilityConcerns} />
        </CardSection>
      ) : null}

      <div className="mt-6 grid gap-5 border-t border-neutral-100 pt-5 sm:grid-cols-2 sm:gap-6">
        <div>
          <p className="card-label">Technical focus</p>
          <div className="mt-2.5 flex flex-wrap gap-1.5 sm:gap-2">
            {technicalFocus.map((item) => (
              <TechBadge key={item} label={item} variant="focus" />
            ))}
          </div>
        </div>
        <div>
          <p className="card-label">Tech stack</p>
          <div className="mt-2.5 flex flex-wrap gap-1.5 sm:gap-2">
            {techStack.map((tech) => (
              <TechBadge key={tech} label={tech} variant="stack" />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-neutral-100 pt-5">
        <p className="card-label">Outcome</p>
        <p className="mt-2 text-sm font-medium leading-relaxed text-neutral-800">{result}</p>
      </div>

      {confidentialityNote ? (
        <p className="prose-muted mt-4 border-t border-neutral-100 pt-4">{confidentialityNote}</p>
      ) : null}
    </article>
  );
}

