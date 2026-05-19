export type ArchBoxRole =
  | "default"
  | "api"
  | "orchestration"
  | "validation"
  | "provider"
  | "storage";

export type ArchBox = {
  label: string;
  role?: ArchBoxRole;
};

export type ArchLayer = {
  label?: string;
  boxes: ArchBox[];
};

export type SystemArchitecture = {
  layers: ArchLayer[];
  caption?: string;
};

export type FeaturedProject = {
  title: string;
  impactStatement: string;
  /** Verified quantified outcomes only—omit when no measured baseline exists. */
  impactMetrics?: string[];
  summary: string;
  workflow: string[];
  architecture: SystemArchitecture;
  engineeringChallenges: string[];
  reliabilityConcerns?: string[];
  problem: string;
  solution: string;
  technicalFocus: string[];
  techStack: string[];
  result: string;
  confidentialityNote?: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    title: "AI-Assisted Essay Evaluation Platform",
    impactStatement:
      "Every scoring request returns JSON that has already passed schema checks and rubric constraints, or the API responds with an error.",
    summary:
      "The service treats model output as untrusted input. Orchestration, provider calls, validation, and response shaping share one process boundary so clients never implement their own post-processing.",
    workflow: [
      "Client request",
      "HTTP API",
      "Prompt assembly",
      "LLM provider",
      "Schema validation",
      "Score rules",
      "HTTP response",
    ],
    architecture: {
      caption: "One synchronous path: assemble, call provider, validate, then respond.",
      layers: [
        {
          label: "Request",
          boxes: [{ label: "Client / upstream service", role: "default" }],
        },
        {
          label: "API",
          boxes: [{ label: "FastAPI service", role: "api" }],
        },
        {
          label: "Orchestration",
          boxes: [
            { label: "Prompt assembly", role: "orchestration" },
            { label: "Retry & timeout policy", role: "orchestration" },
          ],
        },
        {
          label: "Providers",
          boxes: [
            { label: "Provider adapter", role: "provider" },
            { label: "OpenAI / Gemini", role: "provider" },
          ],
        },
        {
          label: "Validation",
          boxes: [
            { label: "Schema validation", role: "validation" },
            { label: "Score constraints", role: "validation" },
          ],
        },
        {
          label: "Response",
          boxes: [
            { label: "Normalized JSON response", role: "api" },
            { label: "Audit / request logs", role: "storage" },
          ],
        },
      ],
    },
    engineeringChallenges: [
      "Two vendors return different JSON shapes for the same rubric; normalization must precede constraint logic.",
      "Retries after provider timeout required safeguards against duplicate scoring attempts.",
      "Fallback routing when the primary model misses the deadline or fails schema validation.",
      "Validation work must fit inside the same service timeout as the upstream LLM call.",
    ],
    reliabilityConcerns: [
      "Schema or constraint violations return structured API errors instead of partial scores.",
      "Audit logs tie each response to provider, rubric version, and validation outcome.",
      "Documented client retry behavior so duplicate HTTP retries are detectable server-side.",
    ],
    problem:
      "Review teams needed comparable scores across large cohorts, but manual grading varied and downstream tools expected a stable JSON contract.",
    solution:
      "Built a FastAPI service with per-rubric prompt assembly, a provider adapter over OpenAI and Gemini, in-process schema validation, score rules on a canonical shape, and normalized responses on the existing product API.",
    technicalFocus: [
      "Structured output validation",
      "Provider adapter & fallback",
      "Retry & timeout policy",
      "Score constraint engine",
      "Response normalization",
      "Request-path logging",
    ],
    techStack: ["Python", "FastAPI", "OpenAI API", "Gemini API", "Docker"],
    result:
      "In operation, malformed provider output stops at the service boundary with the same error and logging semantics as any other failed request—not as a silent fix in a downstream script.",
    confidentialityNote:
      "Based on a commercial engagement. Prompts, rubrics, internal datasets, and scoring rules from that environment are not reproduced here.",
  },
  {
  title: "Multi-Agent App Builder for BudgetMaster",

  impactStatement:
    "Built a Cursor-like multi-agent workflow that decomposes application requests into planning, implementation, validation, and artifact-generation steps. BudgetMaster was used as the demo target application to evaluate structured multi-agent coordination.",

  summary:
    "The system models application-building tasks as a planner-led workflow with specialist agents, shared execution context, and validation gates before outputs are returned.",

  workflow: [
    "User request",
    "Planner",
    "Specialist agents",
    "Shared context",
    "Code / artifact generation",
    "Validation gate",
    "Final app output",
  ],

  architecture: {
    caption:
      "Execution state is written into shared context throughout the workflow; validation runs before generated artifacts are returned.",

    layers: [
      {
        label: "Input",
        boxes: [
          { label: "User product request", role: "default" },
        ],
      },

      {
        label: "Orchestration",
        boxes: [
          { label: "Planner / step graph", role: "orchestration" },
        ],
      },

      {
        label: "Agents",
        boxes: [
          { label: "Requirement analysis", role: "orchestration" },
          { label: "Implementation planning", role: "orchestration" },
          { label: "Code generation", role: "orchestration" },
          { label: "Review / validation", role: "orchestration" },
        ],
      },

      {
        label: "State",
        boxes: [
          { label: "Shared context record", role: "storage" },
          { label: "LLM provider calls", role: "provider" },
        ],
      },

      {
        label: "Validation",
        boxes: [
          { label: "Output consistency & schema checks", role: "validation" },
        ],
      },

      {
        label: "Output",
        boxes: [
          { label: "Generated BudgetMaster demo app", role: "api" },
        ],
      },
    ],
  },

  engineeringChallenges: [
    "Each agent required explicit input/output contracts so the planner could coordinate execution safely.",
    "Shared context needed to preserve requirements and implementation decisions without exceeding token limits.",
    "Validation needed to check application behavior and structure instead of only validating free-form text.",
    "Failures had to remain traceable to specific planning, generation, or validation stages.",
  ],

  reliabilityConcerns: [
    "Planner termination when repeated steps produce no meaningful state change.",
    "Shared context handling across multiple agent steps.",
    "Validation failures must surface before generated artifacts are exposed to downstream systems or users.",
  ],

  problem:
    "The project explored whether a multi-agent workflow could reliably coordinate application-building tasks. Single-prompt approaches quickly became difficult to debug, validate, and extend once generation steps grew more complex.",

  solution:
    "Introduced a planner-led orchestration flow with role-bound agents, shared execution context, and validation gates to separate planning, generation, and review responsibilities.",

  technicalFocus: [
    "Multi-agent orchestration",
    "Planner-led workflows",
    "Agent handoff contracts",
    "Shared execution context",
    "Validation before release",
    "Step-level execution tracking",
  ],

  techStack: [
    "Python",
    "LLM APIs",
    "LangGraph or agent workflow concepts",
  ],

  result:
    "The workflow demonstrated how application-generation tasks can be decomposed into traceable multi-agent steps while maintaining structured outputs and reproducible execution behavior.",
},
  {
    title: "EMR Retrieval & Summarization Platform",
    impactStatement:
      "The UI shows a summary only when retrieval and filtering succeed; source passages stay linked for verification.",
    summary:
      "Fetch and document prep run before the summarization call. The API reduces what reaches the model and returns references so clinicians can open the underlying text.",
    workflow: [
      "Clinician UI",
      "REST API",
      "Record fetch",
      "Document processing",
      "Relevance filter",
      "Summarization model",
      "Summary panel",
    ],
    architecture: {
      caption: "I/O and filtering precede the model; sources travel with the summary.",
      layers: [
        {
          label: "Client",
          boxes: [{ label: "React clinician UI", role: "default" }],
        },
        {
          label: "API",
          boxes: [{ label: "REST API layer", role: "api" }],
        },
        {
          label: "Retrieval",
          boxes: [
            { label: "EMR / record fetch", role: "storage" },
            { label: "Document processing", role: "orchestration" },
          ],
        },
        {
          label: "Filter",
          boxes: [{ label: "Relevance & chunk filter", role: "validation" }],
        },
        {
          label: "Model",
          boxes: [{ label: "Summarization LLM", role: "provider" }],
        },
        {
          label: "Presentation",
          boxes: [
            { label: "Summary view", role: "api" },
            { label: "Source references", role: "storage" },
          ],
        },
      ],
    },
    engineeringChallenges: [
      "Long encounters must chunk without dropping sections the filter would later need.",
      "Relevance thresholds trade context size against the risk of omitting clinically useful text.",
      "Summarization is deferred until fetch and normalize complete, so slow EMR APIs dominate perceived latency.",
      "Source pointers must map back to the same chunks the model actually read.",
    ],
    reliabilityConcerns: [
      "Upstream EMR timeout or partial payload returns a defined API error—no summary over incomplete data.",
      "Logging policy limits what pipeline stages persist vs. hold only for the request lifetime.",
      "Retrieval excludes superseded record versions when the source system exposes version metadata.",
    ],
    problem:
      "Staff spent most of pre-visit time locating content across long, fragmented records; there was no single place that showed both a short overview and the passages it came from.",
    solution:
      "Wired React UI to a Python API that fetches records, normalizes documents, filters chunks, calls the summarization model on the reduced set, and returns text plus references to source spans.",
    technicalFocus: [
      "Retrieval & chunking",
      "Relevance filtering",
      "Summarization call boundary",
      "Source reference mapping",
      "EMR API integration",
      "Sensitive-data-aware logging considerations",
    ],
    techStack: ["Python", "React", "LLM APIs", "REST APIs"],
    result:
      "Users review a bounded summary with linked evidence; the system does not present model output when fetch or filter stages fail.",
  },
  {
    title: "Data Migration Automation Tool",
    impactStatement:
      "Operators promote a batch only after automated row, key, and rule checks pass; standard validation runs complete in seconds instead of multi-day manual review.",
    impactMetrics: [
      "Manual validation cycle: multi-day process reduced to seconds for standard batch checks.",
      "One execution path: runtime improved from around 1 hour to around 11 minutes.",
    ],
    summary:
      "SAS exports move through transform and load stages with Python validation between sign-off points. Each run produces machine-readable logs and a short operator summary.",
    workflow: [
      "SAS export",
      "Transform job",
      "Python validation",
      "MySQL load",
      "Rule checks",
      "Logs and summary",
    ],
    architecture: {
      caption: "Staged batch path with validation gates before promotion.",
      layers: [
        {
          label: "Source",
          boxes: [{ label: "SAS export", role: "storage" }],
        },
        {
          label: "Transform",
          boxes: [{ label: "ETL / transform job", role: "orchestration" }],
        },
        {
          label: "Validation",
          boxes: [
            { label: "Python checks (Pandas)", role: "validation" },
            { label: "Row & key comparisons", role: "validation" },
          ],
        },
        {
          label: "Load",
          boxes: [{ label: "MySQL target", role: "storage" }],
        },
        {
          label: "Output",
          boxes: [
            { label: "Rule engine results", role: "validation" },
            { label: "Logs & operator summary", role: "storage" },
          ],
        },
      ],
    },
    engineeringChallenges: [
      "Row-count and primary-key comparisons across SAS exports and loaded MySQL tables at batch scale.",
      "Stages must rerun after a failed check without inserting duplicate rows that already committed.",
      "Encoding, null, and type differences between SAS and MySQL surfaced as explicit check failures.",
      "Operator summary must reflect the same facts as the structured log file for audit.",
    ],
    reliabilityConcerns: [
      "Partial-load detection before a batch is marked promoted.",
      "Validation output stored per run so results can be compared across reruns.",
      "Retry of a failed stage does not double-insert rows that passed an earlier gate.",
    ],
    problem:
      "Manual comparison of large SAS and MySQL datasets was slow and still missed drift; problems often appeared only after data was already queried in production.",
    solution:
      "Automated ingest, Pandas-based comparisons, SQL rule checks, and shell-orchestrated stages with structured error logs and a one-page summary per operator run.",
    technicalFocus: [
      "Batch validation rules",
      "Staged reruns",
      "Row & key reconciliation",
      "Structured operator logs",
      "SQL-side checks",
      "SAS-to-MySQL pipeline",
    ],
    techStack: ["Python", "Pandas", "Shell Script", "MySQL", "SAS"],
    result:
      "Inconsistent records are blocked in the pipeline; measured runs reduced multi-day manual validation to seconds for standard checks and cut one path from around 1 hour to around 11 minutes.",
  },
];
