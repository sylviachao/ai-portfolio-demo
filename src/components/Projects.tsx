import { featuredProjects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionTitle } from "./SectionTitle";

export function Projects() {
  return (
    <section id="featured-projects" className="section-shell bg-white">
      <div className="section-inner-wide">
        <SectionTitle
          title="Featured projects"
          subtitle="Concise case notes on system behavior, validation, and operations. Client-specific prompts, datasets, and internal rules are omitted."
        />
        <ul className="mt-10 flex list-none flex-col gap-8">
          {featuredProjects.map((project) => (
            <li key={project.title} className="flex h-full min-h-0 min-w-0">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
