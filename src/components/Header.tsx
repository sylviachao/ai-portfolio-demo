const navItems = [
  { href: "#about", label: "About" },
  { href: "#featured-projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-neutral-200 bg-white">
      <div className="section-inner-wide flex flex-wrap items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <a href="#top" className="text-sm font-semibold text-neutral-900">
          Sylvia Chao
        </a>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-neutral-600" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="hover:text-neutral-900 focus-visible:rounded-sm"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

