import { useRef, useState } from "react";
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

const focusRing =
  "outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function Countries() {
  const [activeCode, setActiveCode] = useState<string>(countries[0].code);
  const active = countries.find((c) => c.code === activeCode) ?? countries[0];
  const cardRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const dotRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const move = (
    e: React.KeyboardEvent,
    refs: React.MutableRefObject<Record<string, HTMLButtonElement | null>>,
  ) => {
    const keys = ["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp", "Home", "End"];
    if (!keys.includes(e.key)) return;
    e.preventDefault();
    const i = countries.findIndex((c) => c.code === activeCode);
    let next = i;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (i + 1) % countries.length;
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (i - 1 + countries.length) % countries.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = countries.length - 1;
    const code = countries[next].code;
    setActiveCode(code);
    refs.current[code]?.focus();
  };

  return (
    <section id="terrain" aria-labelledby="terrain-title" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader kicker="02 / terrain" title="4 pays d'intervention." />

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          {/* Cartes pays */}
          <div
            role="radiogroup"
            aria-label="Sélectionner un pays d'intervention"
            className="grid gap-4 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-2"
            onKeyDown={(e) => move(e, cardRefs)}
          >
            {countries.map((c) => {
              const isActive = c.code === activeCode;
              return (
                <button
                  key={c.code}
                  ref={(el) => {
                    cardRefs.current[c.code] = el;
                  }}
                  type="button"
                  role="radio"
                  aria-checked={isActive}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveCode(c.code)}
                  className={`glass card-hover h-full w-full rounded-xl p-5 text-left transition ${focusRing} ${
                    isActive ? "border-primary/40 bg-primary/5" : ""
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-2xl leading-none" aria-hidden="true">
                      {c.flag}
                    </span>
                    <span className="block">
                      <span className="block font-display font-semibold">{c.name}</span>
                      <span className="block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                        {c.code} · Capitale {c.capital}
                      </span>
                    </span>
                  </span>
                  <span className="mt-3 block text-sm leading-relaxed text-muted-foreground">{c.note}</span>
                </button>
              );
            })}
          </div>

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

            <h3
              id="terrain-title"
              className="relative font-mono text-xs uppercase tracking-widest text-primary"
            >
              Zone d'intervention
            </h3>

            <div
              role="group"
              aria-label="Carte schématique des pays d'intervention. Utilisez les flèches pour changer de pays."
              className="relative mt-5 aspect-square w-full"
              onKeyDown={(e) => move(e, dotRefs)}
            >
              {/* Cercles décoratifs */}
              <div className="pointer-events-none absolute inset-6 rounded-full border border-primary/15" />
              <div className="pointer-events-none absolute inset-16 rounded-full border border-primary/25" />

              {countries.map((c) => {
                const isActive = c.code === activeCode;
                return (
                  <button
                    key={c.code}
                    ref={(el) => {
                      dotRefs.current[c.code] = el;
                    }}
                    type="button"
                    aria-label={`${c.name} — ${c.capital}`}
                    aria-pressed={isActive}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveCode(c.code)}
                    className={`absolute grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full ${focusRing}`}
                    style={{ left: `${c.x}%`, top: `${c.y}%` }}
                  >
                    <span
                      aria-hidden="true"
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

            <div
              className="relative mt-5 border-t border-white/10 pt-4"
              aria-live="polite"
              aria-atomic="true"
            >
              <div className="flex items-center gap-2">
                <span className="text-xl leading-none" aria-hidden="true">
                  {active.flag}
                </span>
                <span className="font-display font-semibold">{active.name}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {active.capital} — {active.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
