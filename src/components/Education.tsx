import { SectionHeader } from "./About";
import { GraduationCap, Award } from "lucide-react";

const formations = [
  { title: "Master 2 en Informatique", school: "UPH Madagascar", year: "2022" },
  { title: "Licence en Informatique", school: "E-Media Madagascar", year: "2019" },
  { title: "Baccalauréat C", school: "Groupe scolaire Avenir", year: "2015" },
];

const certifications = [
  "Développeur OpenIMIS certifié",
  "Expert WinDev",
  "Access avancé",
  "Administration réseaux",
  "Cybersécurité",
  "Maintenance informatique",
  "Configuration routeurs/switch Microtik",
  "Configuration serveur VPN",
];

export function Education() {
  return (
    <section id="formation" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader kicker="04 / formation" title="Diplômes & certifications." />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-primary" />
              <h3 className="font-display text-xl font-semibold">Formation académique</h3>
            </div>
            <div className="space-y-3">
              {formations.map((f) => (
                <div key={f.title} className="glass card-hover rounded-xl p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-semibold">{f.title}</h4>
                      <div className="mt-1 text-sm text-muted-foreground">{f.school}</div>
                    </div>
                    <div className="font-mono text-xs text-primary">{f.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-3">
              <Award className="h-5 w-5 text-primary" />
              <h3 className="font-display text-xl font-semibold">Certifications & formations</h3>
            </div>
            <div className="glass rounded-xl p-5">
              <ul className="space-y-3">
                {certifications.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
