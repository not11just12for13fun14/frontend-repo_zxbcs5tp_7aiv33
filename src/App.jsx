import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-20 w-full border-b border-gray-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-bold tracking-tight">Ludovic A. N.</a>
          <nav className="hidden gap-6 text-sm font-medium text-gray-600 sm:flex">
            <a href="#about" className="hover:text-gray-900">À propos</a>
            <a href="#projects" className="hover:text-gray-900">Projets</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-gray-500">
          © {new Date().getFullYear()} Ludovic Aggaï NGABANG — Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}

export default App;
