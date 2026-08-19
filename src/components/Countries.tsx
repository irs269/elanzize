import { useState } from "react";
import { SectionHeader } from "./About";

type Country = {
  code: string;
  flag: string;
  name: string;
  capital: string;
  note: string;
  /** Position en % sur le panneau carte */
  x: number;
  y: number;
};

const countries: Country[] = [
  {
    code: "KM",
    flag: "🇰🇲",
    name: "Comores",
    capital: "Moroni",
    note: "Base — systèmes bancaires & santé numérique",
    x: 72,
    y: 62,
  },
  {
    code: "MG",
    flag: "🇲🇬",
    name: "Madagascar",
    capital: "Antananarivo",
    note: "Formation universitaire & projets logiciels",
    x: 78,
    y: 78,
  },
  {
    code: "ML",
    flag: "🇲🇱",
    name: "Mali",
    capital: "Bamako",
    note: "Application Daria — géolocalisation d'entreprises",
    x: 24,
    y: 26,
  },
  {
    code: "TZ",
    flag: "🇹🇿",
    name: "Tanzanie",
    capital: "Dodoma",
    note: "Missions régionales & collaborations techniques",
    x: 62,
    y: 58,
  },
];

export function Countries() {
  const [activeCode, setActiveCode] = useState<string>(countries[0].code);
  const active = countries.find((c) => c.code === activeCode) ?? countries[0];

  return (
    <section id="terrain" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader kicker="02 / terrain" title="4 pays d'intervention." />

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          {/* Cartes pays */}
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-2">
            {countries.map((c) => {
              const isActive = c.code === activeCode;
              return (
                <li key={c.code}>
                  <button
                    type="button"
                    onMouseEnter={() => setActiveCode(c.code)}
                    onFocus={() => setActiveCode(c.code)}
                    onClick={() => setActiveCode(c.code)}
                    aria-pressed={isActive}
                    className={`glass card-hover h-full w-full rounded-xl p-5 text-left transition ${
                      isActive ? "border-primary/40 bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl leading-none" aria-hidden="true">
                        {c.flag}
                      </span>
                      <div>
                        <div className="font-display font-semibold">{c.name}</div>
                        <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                          {c.code} · {c.capital}
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.note}</p>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Panneau carte */}
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-surface p-6 lg:col-span-5">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.14]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(232, 93, 58, 0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(232, 93, 58, 0.25) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-primary/10 blur-[90px]" />

            <div className="relative font-mono text-xs uppercase tracking-widest text-primary">
              Zone d'intervention
            </div>

            <div className="relative mt-5 aspect-square w-full">
              {/* Cercles décoratifs */}
              <div className="pointer-events-none absolute inset-6 rounded-full border border-primary/15" />
              <div className="pointer-events-none absolute inset-16 rounded-full border border-primary/25" />

              {countries.map((c) => {
                const isActive = c.code === activeCode;
                return (
                  <button
                    key={c.code}
                    type="button"
                    aria-label={c.name}
                    title={c.name}
                    onMouseEnter={() => setActiveCode(c.code)}
                    onFocus={() => setActiveCode(c.code)}
                    onClick={() => setActiveCode(c.code)}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${c.x}%`, top: `${c.y}%` }}
                  >
                    <span
                      className={`block rounded-full transition-all ${
                        isActive
                          ? "h-4 w-4 bg-primary shadow-[0_0_0_6px_rgba(232,93,58,0.18)]"
                          : "h-2.5 w-2.5 bg-primary/50 hover:bg-primary"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <div className="relative mt-5 border-t border-white/10 pt-4">
              <div className="flex items-center gap-2">
                <span className="text-xl leading-none" aria-hidden="true">
                  {active.flag}
                </span>
                <span className="font-display font-semibold">{active.name}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{active.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
