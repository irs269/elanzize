import { ArrowRight } from "lucide-react";
import portrait from "@/assets/portrait.png";

export function Hero() {
  return (
    <section id="accueil" className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-24 lg:px-8">
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-60" />

      <div className="relative w-full max-w-6xl">
        <div className="relative grid grid-cols-1 overflow-hidden border border-white/10 bg-surface shadow-2xl lg:grid-cols-12">
          {/* Ambient glows */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />

          {/* Left content */}
          <div className="relative z-10 flex flex-col justify-center border-b border-white/10 p-8 lg:col-span-7 lg:border-b-0 lg:border-r lg:p-16">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Disponible pour missions & collaborations
              </span>
            </div>

            <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Ingénieur en
              <br />
              <span className="text-primary">application web</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Bonjour, je suis{" "}
              <span className="font-medium text-foreground">Mohamed Irsoid Abdou El-Anzize</span>{" "}
              — basé à Moroni, aux Comores. Certifié{" "}
              <span className="font-mono text-primary">OpenIMIS</span>, je conçois et déploie des
              systèmes critiques : plateformes bancaires, applications mobiles et systèmes
              d'information de santé.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-primary px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition hover:bg-primary/90"
              >
                Me contacter
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#experiences"
                className="inline-flex items-center gap-2 border border-white/10 px-8 py-4 text-sm font-bold uppercase tracking-wider text-foreground transition hover:bg-white/5"
              >
                Voir mes projets
              </a>
            </div>
          </div>

          {/* Right technical grid */}
          <div className="relative min-h-[480px] bg-background lg:col-span-5 lg:min-h-full">
            {/* Grid pattern */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(232, 93, 58, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(232, 93, 58, 0.2) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            {/* Portrait with glow */}
            <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
              <div className="absolute -inset-8 bg-primary/10 blur-[90px]" />
              <img
                src={portrait}
                alt="Mohamed Irsoid Abdou El-Anzize"
                width={411}
                height={610}
                className="relative h-[56vh] max-h-[420px] w-auto object-contain opacity-95 drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)] sm:h-[50vh] lg:h-[56vh]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-transparent" />
            </div>

            {/* Info blocks */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 lg:p-8">
              <div className="z-10 space-y-3">
                <div className="glass p-4">
                  <div className="mb-1 font-mono text-xs uppercase tracking-widest text-primary">
                    Core Expertise
                  </div>
                  <div className="font-display text-base font-bold text-foreground lg:text-lg">
                    Fullstack · OpenIMIS · DevOps
                  </div>
                </div>
                <div className="glass translate-x-3 p-4 lg:translate-x-4">
                  <div className="mb-1 font-mono text-xs uppercase tracking-widest text-primary">
                    Terrain
                  </div>
                  <div className="font-display text-base font-bold text-foreground lg:text-lg">
                    Comores · Madagascar · Mali
                  </div>
                </div>
              </div>

              <div className="z-10 grid grid-cols-2 gap-3 lg:gap-4">
                <div className="glass p-4">
                  <div className="font-display text-2xl font-bold text-foreground lg:text-3xl">7+</div>
                  <div className="text-[10px] font-semibold uppercase tracking-tighter text-muted-foreground">
                    Certifications
                  </div>
                </div>
                <div className="glass p-4">
                  <div className="font-display text-2xl font-bold text-foreground lg:text-3xl">3</div>
                  <div className="text-[10px] font-semibold uppercase tracking-tighter text-muted-foreground">
                    Pays d'intervention
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative circles */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20 spin-slow" />
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/40 spin-slow-reverse" />
          </div>

          {/* Bottom accent line */}
          <div className="col-span-full h-1 bg-gradient-to-r from-primary via-surface to-background" />
        </div>
      </div>
    </section>
  );
}
