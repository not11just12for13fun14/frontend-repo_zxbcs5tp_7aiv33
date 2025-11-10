const projects = [
  {
    title: "Plateforme d'apprentissage",
    description:
      "Application full‑stack avec gestion des cours, authentification et tableau de bord analytique.",
    tags: ["React", "FastAPI", "MongoDB"],
    link: "#",
  },
  {
    title: "Site e‑commerce headless",
    description:
      "Frontend performant relié à une API headless, paiement sécurisé et CMS.",
    tags: ["Vite", "Tailwind", "Stripe"],
    link: "#",
  },
  {
    title: "Outil de reporting",
    description:
      "Visualisations interactives, export PDF et partage sécurisé.",
    tags: ["React", "Charts", "CI/CD"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Projets sélectionnés</h2>
            <p className="mt-2 text-gray-600">Un aperçu des travaux récents et pertinents.</p>
          </div>
          <a href="#contact" className="text-blue-600 hover:underline">Discutons de votre projet</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow">
              <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-blue-700">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
