import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">Bonjour, je suis</span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
              Ludovic Aggaï NGABANG
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Ingénieur logiciel full‑stack axé sur l’UX, la performance et la qualité. J’aime transformer des idées en produits modernes, élégants et fiables.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                Voir mes projets
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-900 hover:bg-gray-50"
              >
                Me contacter
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-gray-600">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-gray-900">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-gray-900">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#contact" className="hover:text-gray-900">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute -inset-10 -z-0 rounded-full bg-gradient-to-tr from-blue-200/60 via-purple-200/60 to-pink-200/60 blur-3xl" />
            <div className="relative mx-auto h-64 w-64 rounded-2xl bg-white/70 p-1 shadow-xl ring-1 ring-black/5 backdrop-blur md:h-80 md:w-80">
              <div className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500">
                <span className="text-center text-2xl font-bold text-white">
                  L A N
                </span>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-gray-500">
              Identité visuelle minimaliste — pas de photo nécessaire
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
