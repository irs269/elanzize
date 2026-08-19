import { Code2, Server, MapPin } from "lucide-react";

export function About() {
  return (
    <section id="apropos" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader kicker="01 / à propos" title="Ingénieur, bâtisseur, formateur." />

        <div className="mt-14 grid gap-8 md:grid-cols-12">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:col-span-7 md:text-lg">
            <p>
              Développeur polyvalent, j'interviens sur l'ensemble du cycle de vie d'une
              application — de la conception à la mise en production — avec une prédilection
              pour les <span className="text-foreground">systèmes critiques</span> :
              plateformes bancaires, applications mobiles et systèmes d'information de santé.
            </p>
            <p>
              Certifié <span className="font-mono text-primary">OpenIMIS</span>, j'ai formé
              d'autres développeurs dans le cadre du Projet d'Appui à l'Assurance Maladie
              Généralisée (PAAMG). Mon expertise combine développement logiciel et
              administration systèmes/réseaux — une double casquette qui me permet de
              comprendre l'infrastructure autant que le code.
            </p>
            <p>
              Basé aux <span className="text-foreground">Comores</span>, j'ai contribué à des
              projets régionaux couvrant les Comores, Madagascar et le Mali.
            </p>
          </div>

          <div className="space-y-4 md:col-span-5">
            <InfoCard icon={<Code2 className="h-5 w-5" />} title="Fullstack">
              Python · Java · React · Angular · Django · Symfony · Flutter
            </InfoCard>
            <InfoCard icon={<Server className="h-5 w-5" />} title="Infra & Sys">
              Docker · Linux · Microtik · VPN · PostgreSQL
            </InfoCard>
            <InfoCard icon={<MapPin className="h-5 w-5" />} title="Terrain">
              Comores · Madagascar · Mali · Tanzanie
            </InfoCard>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div>
      <div className="font-mono text-xs uppercase tracking-widest text-primary">{kicker}</div>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <div className="mt-4 h-px w-16 bg-gradient-to-r from-primary to-transparent" />
    </div>
  );
}

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="glass card-hover rounded-xl p-5">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center border border-primary/20 bg-primary/10 text-primary">
          {icon}
        </div>
        <div className="font-display font-semibold">{title}</div>
      </div>
      <div className="mt-3 font-mono text-xs text-muted-foreground">{children}</div>
    </div>
  );
}
