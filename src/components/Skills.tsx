import { SectionHeader } from "./About";
import {
  Code2,
  Database,
  Cloud,
  LayoutGrid,
  ShieldCheck,
} from "lucide-react";

const categories = [
  {
    icon: <Code2 className="h-5 w-5" />,
    title: "Langages & Frameworks",
    items: ["Python", "Java", "React JS", "Angular", "Symfony", "Django", "Flutter", "WinDev Mobile"],
  },
  {
    icon: <Database className="h-5 w-5" />,
    title: "Bases de données",
    items: ["SQL", "PostgreSQL", "GraphQL"],
  },
  {
    icon: <Cloud className="h-5 w-5" />,
    title: "DevOps & Infrastructure",
    items: ["Docker", "Linux Server", "Microtik", "VPN Server", "Réseaux"],
  },
  {
    icon: <LayoutGrid className="h-5 w-5" />,
    title: "CMS & ERP",
    items: ["WordPress", "Odoo ERP", "OpenIMIS"],
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Sécurité & Autres",
    items: ["Cybersécurité", "Admin réseaux", "Maintenance"],
  },
];

export function Skills() {
  return (
    <section id="competences" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-20" />
      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeader kicker="03 / stack" title="La boîte à outils." />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div key={cat.title} className="glass card-hover group rounded-xl p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center border border-primary/20 bg-primary/10 text-primary transition group-hover:bg-primary/20">
                  {cat.icon}
                </div>
                <h3 className="font-display font-semibold">{cat.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="border border-white/8 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
