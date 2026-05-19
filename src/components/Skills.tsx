import { SectionTitle } from "./SectionTitle";

const skillGroups = [
  {
    label: "AI / LLM",
    items: [
      "OpenAI API",
      "Gemini API",
      "LLM orchestration",
      "Structured output validation",
      "Prompt workflow design",
      "Multi-agent systems",
      "RAG concepts",
    ],
  },
  {
    label: "Backend",
    items: ["Python", "FastAPI", "Node.js", "REST APIs", "PHP", "C#", "ASP.NET"],
  },
  {
    label: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    label: "Cloud / DevOps",
    items: [
      "AWS Lambda",
      "API Gateway",
      "Cognito",
      "S3",
      "DynamoDB",
      "Docker",
      "Kubernetes",
      "CI/CD",
    ],
  },
  {
    label: "Databases",
    items: ["MySQL", "PostgreSQL", "SQL Server", "Oracle", "DynamoDB"],
  },
  {
    label: "Automation / Data",
    items: ["Pandas", "Shell scripting", "Data validation pipelines", "Workflow automation", "scikit-learn"],
  },
] as const;

export function Skills() {
  return (
    <section id="skills" className="section-shell bg-neutral-50">
      <div className="section-inner-wide">
        <SectionTitle title="Technical skills" />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-lg border border-neutral-200 bg-white p-4 transition-colors hover:border-neutral-300 sm:p-5"
            >
              <h3 className="text-sm font-semibold text-neutral-900">{group.label}</h3>
              <p className="prose-muted mt-3">{group.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
