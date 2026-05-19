import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-neutral-200 bg-neutral-50 px-4 py-8 sm:px-6">
        <p className="section-inner prose-muted text-xs">
          Sylvia Chao · This site: Vite, React, TypeScript, Tailwind CSS
        </p>
      </footer>
    </div>
  );
}
