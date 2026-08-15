import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { ParticleField } from "./ParticleField";
import portrait from "@/assets/portrait.png";

const roles = [
  "des applications web",
  "des systèmes bancaires",
  "des plateformes OpenIMIS",
  "des infrastructures fiables",
];

export function Hero() {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const speed = deleting ? 40 : 80;
    const t = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1600);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % roles.length);
        return;
      }
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, roleIdx]);

  return (
    <section id="accueil" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 mesh-bg" />
      <ParticleField className="pointer-events-none absolute inset-0 h-full w-full opacity-70" />
      <div className="pointer-events-none absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-primary/25 blur-[120px]" />
      {/* Portrait — cutout anchored to the bottom-right, clear of the side dock */}
      <div className="pointer-events-none absolute bottom-0 right-16 hidden select-none lg:block xl:right-24">
        <div className="relative">
          <div className="absolute bottom-12 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-primary/25 blur-[90px] xl:bottom-16 xl:h-[360px] xl:w-[360px]" />
          <img
            src={portrait}
            alt="Mohamed Irsoid Abdou El-Anzize"
            width={411}
            height={610}
            className="relative h-[52vh] max-h-[520px] w-auto object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.55)]"
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background via-background/70 to-transparent" />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto w-full max-w-[1600px] px-5 pt-20 pb-16 md:px-10 md:pt-16">
        <div className="max-w-2xl reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-dot" />
            Disponible pour missions & collaborations
          </div>

          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
            Je conçois
            <br />
            <span className="text-gradient">{text}</span>
            <span className="cursor-blink h-9 md:h-12" />
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Bonjour, je suis <span className="text-foreground">Mohamed Irsoid Abdou El-Anzize</span> —
            ingénieur en application web basé à Moroni, aux Comores. Certifié{" "}
            <span className="font-mono text-primary">OpenIMIS</span>, j'interviens de la conception
            à la mise en production sur des systèmes critiques : plateformes bancaires, applications
            mobiles et systèmes d'information de santé.
          </p>

          <div className="mt-8 flex items-center gap-6">
            <a
              href="#experiences"
              className="group relative grid h-32 w-32 place-items-center rounded-full border border-white/15 transition hover:border-primary/60"
              aria-label="Voir mes projets"
            >
              <span className="absolute inset-0 spin-slow">
                <svg viewBox="0 0 128 128" className="h-full w-full">
                  <defs>
                    <path id="circlePath" d="M64,64 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
                  </defs>
                  <text className="fill-current font-mono text-[9px] uppercase tracking-[0.35em]">
                    <textPath href="#circlePath">mes projets · mes projets ·</textPath>
                  </text>
                </svg>
              </span>
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1 group-hover:text-primary" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition hover:opacity-90 glow"
            >
              Me contacter
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs text-muted-foreground">
            <div><span className="text-primary">→</span> Moroni, Comores</div>
            <div><span className="text-primary">→</span> FR · EN · AR</div>
            <div><span className="text-primary">→</span> +269 38 99 87 2</div>
          </div>
        </div>
      </div>
    </section>
  );
}
