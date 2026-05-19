import { SectionTitle } from "./SectionTitle";

export function About() {
  return (
    <section id="about" className="section-shell bg-neutral-50">
      <div className="section-inner">
        <SectionTitle title="About" />
        <div className="mt-8 space-y-5 text-base leading-relaxed text-neutral-600 sm:text-[1.0625rem] sm:leading-7">
          <p>
            Focused on backend workflows around AI systems, including validation, retry handling,
            structured outputs, and API integration.
          </p>

          <p>
            Most projects center on making LLM-based systems more stable and easier to integrate
            into existing services and workflows.
          </p>
        </div>
      </div>
    </section>
  );
}

