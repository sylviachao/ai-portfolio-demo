export function Hero() {
  return (
    <section
      id="top"
      className="section-shell border-b border-neutral-200 bg-white py-16 sm:py-20"
      aria-label="Introduction"
    >
      <div className="section-inner">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          Sylvia Chao
        </h1>
        <p className="mt-3 text-sm font-medium tracking-wide text-neutral-500 sm:text-base">
          AI Application Engineer · Full-Stack Engineer
        </p>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-neutral-700 sm:text-[1.0625rem] sm:leading-7">
        I build backend workflows around AI systems, including validation, retry handling, and API integration.
        </p>
      </div>
    </section>
  );
}
