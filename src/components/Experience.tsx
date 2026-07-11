import { SectionHeader } from "./About";

type Exp = {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  tags?: string[];
};

const experiences: Exp[] = [
  {
    role: "Développeur Système Bancaire",
    company: "Exim Bank Comores",
    period: "Mai 2026 — Aujourd'hui",
    description:
      "Développement et maintenance du système d'information bancaire. Fiabilité, sécurité et performance des services financiers.",
    tags: ["FinTech", "Sécurité", "Backend"],
  },
  {
    role: "Ingénieur IT",
    company: "Arkeup Id Comores — Groupe Arkeup",
    period: "Août 2024 — Mars 2026",
    description:
      "Administration systèmes, développement de solutions IT sur mesure et gestion de projets techniques.",
    tags: ["Sys Admin", "Gestion projet"],
  },
  {
    role: "Développeur — Application Ankiba",
    company: "Projet personnel · Mobile",
    period: "2024",
    description:
      "Création complète d'une application mobile de suivi des dépenses, avec analyse financière et conseils d'épargne personnalisés.",
    tags: ["Flutter", "Mobile", "FinTech"],
  },
  {
    role: "Développeur OpenIMIS Certifié",
    company: "Santé numérique",
    period: "2024",
    description:
      "Installation, configuration, personnalisation et développement de modules OpenIMIS pour les systèmes d'assurance maladie.",
    tags: ["OpenIMIS", "HealthTech"],
  },
  {
    role: "Formateur — Développeurs OpenIMIS",
    company: "Projet PAAMG",
    period: "Juil — Août 2024",
    description:
      "Formation de développeurs dans le cadre du Projet d'Appui à l'Assurance Maladie Généralisée (PAAMG).",
    tags: ["Formation", "OpenIMIS"],
  },
  {
    role: "Ingénieur IT",
    company: "Uwezo — Comwork Partners",
    period: "Fév 2023 — Juil 2024",
    description:
      "Gestion du parc matériel, logiciel et télécoms. Support technique et administration des réseaux et serveurs.",
    tags: ["Sys Admin", "Réseau"],
  },
  {
    role: "Stagiaire — Service Informatique",
    company: "URGCC (Union des Sanduk)",
    period: "Oct 2022 — Jan 2023",
    description:
      "Maintenance réseau et système, installation de la plateforme RIA.",
    tags: ["Support", "Réseau"],
  },
  {
    role: "Co-développeur — Daria",
    company: "Comores & Mali",
    period: "2019 — 2020",
    description:
      "Application de géolocalisation d'entreprises comoriennes et maliennes.",
    tags: ["Géolocalisation", "Mobile"],
  },
];

export function Experience() {
  return (
    <section id="experiences" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader kicker="02 / parcours" title="Un parcours entre code, banque & santé." />

        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:left-1/2" />

          <ol className="space-y-10">
            {experiences.map((exp, i) => (
              <li
                key={i}
                className={`relative grid gap-4 md:grid-cols-2 md:gap-10 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
                }`}
              >
                {/* Dot */}
                <span className="absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-primary pulse-dot md:left-1/2" />

                <div
                  className={`pl-10 md:pl-0 ${
                    i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10 md:col-start-2"
                  }`}
                >
                  <div className="glass card-hover rounded-2xl p-5">
                    <div className="font-mono text-xs text-primary">{exp.period}</div>
                    <h3 className="mt-2 font-display text-lg font-semibold">{exp.role}</h3>
                    <div className="mt-1 text-sm text-muted-foreground">{exp.company}</div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>
                    {exp.tags && (
                      <div className={`mt-4 flex flex-wrap gap-1.5 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                        {exp.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] text-primary"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
