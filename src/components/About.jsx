export default function About() {
  return (
    <section id="about" className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900">À propos</h2>
            <p className="mt-2 text-gray-600">
              Je conçois et développe des applications web robustes avec une attention particulière pour l’accessibilité, la performance et l’expérience utilisateur.
            </p>
          </div>
          <div className="md:col-span-2">
            <ul className="grid gap-6 sm:grid-cols-2">
              <li className="rounded-xl border border-gray-200 p-5 shadow-sm">
                <h3 className="font-semibold text-gray-900">Front‑end</h3>
                <p className="mt-2 text-gray-600">React, Vite, Tailwind CSS, Framer Motion, accessibilité, design systems.</p>
              </li>
              <li className="rounded-xl border border-gray-200 p-5 shadow-sm">
                <h3 className="font-semibold text-gray-900">Back‑end</h3>
                <p className="mt-2 text-gray-600">FastAPI, Node, REST, auth, tests, CI/CD, intégrations cloud.</p>
              </li>
              <li className="rounded-xl border border-gray-200 p-5 shadow-sm">
                <h3 className="font-semibold text-gray-900">Base de données</h3>
                <p className="mt-2 text-gray-600">MongoDB, PostgreSQL, modélisation, optimisation des requêtes.</p>
              </li>
              <li className="rounded-xl border border-gray-200 p-5 shadow-sm">
                <h3 className="font-semibold text-gray-900">Qualité</h3>
                <p className="mt-2 text-gray-600">Tests automatisés, revue de code, observabilité, bonnes pratiques.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
