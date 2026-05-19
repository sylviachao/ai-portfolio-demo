import { SectionTitle } from "./SectionTitle";

export function Contact() {
  return (
    <section id="contact" className="section-shell border-b-0 bg-white">
      <div className="section-inner">
        <SectionTitle title="Contact" />
        <dl className="mt-8 space-y-5 text-sm">
          <div className="flex flex-col gap-1 border-b border-neutral-100 pb-5 sm:flex-row sm:gap-8">
            <dt className="shrink-0 font-medium text-neutral-500 sm:w-28">Email</dt>
            <dd>
              <a
                className="text-neutral-900 underline-offset-2 hover:underline"
                href="mailto:chaosylvia44@gmail.com"
              >
                chaosylvia44@gmail.com
              </a>
            </dd>
          </div>
          <div className="flex flex-col gap-1 border-b border-neutral-100 pb-5 sm:flex-row sm:gap-8">
            <dt className="shrink-0 font-medium text-neutral-500 sm:w-28">GitHub</dt>
            <dd>
              <a
                className="break-all text-neutral-900 underline-offset-2 hover:underline"
                href="https://github.com/sylviachao"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/sylviachao
              </a>
            </dd>
          </div>
          <div className="flex flex-col gap-1 border-b border-neutral-100 pb-5 sm:flex-row sm:gap-8">
            <dt className="shrink-0 font-medium text-neutral-500 sm:w-28">Portfolio</dt>
            <dd>
              <a
                className="break-all text-neutral-900 underline-offset-2 hover:underline"
                href="https://sylviachao.github.io/portfolio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                sylviachao.github.io/portfolio
              </a>
            </dd>
          </div>
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-8">
            <dt className="shrink-0 font-medium text-neutral-500 sm:w-28">LinkedIn</dt>
            <dd>
              <a
                className="break-all text-neutral-900 underline-offset-2 hover:underline"
                href="https://www.linkedin.com/in/sylvia-chao/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/sylvia-chao
              </a>
            </dd>
          </div>
        </dl>

        {/* <div className="mt-10 border-t border-neutral-200 pt-8">
          <p className="card-label">Resume</p>
          <a
            className="mt-3 inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-4 py-2.5 text-sm font-medium text-neutral-900 transition-colors hover:border-neutral-400 hover:bg-neutral-50"
            href="/resume.pdf"
            download
          >
            Download resume (PDF)
          </a>
          <p className="prose-muted mt-3 max-w-xl">
            Put <span className="font-mono text-neutral-600">resume.pdf</span> in{" "}
            <span className="font-mono text-neutral-600">public/</span>. Vite exposes that folder at
            the site root, so the button targets{" "}
            <span className="font-mono text-neutral-600">/resume.pdf</span> when the file exists.
          </p>
        </div> */}
      </div>
    </section>
  );
}
