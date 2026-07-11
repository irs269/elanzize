import { useEffect, useState } from "react";
import { ArrowDown, Download, Mail } from "lucide-react";

const roles = [
  "Ingénieur en application web",
  "Développeur Système Bancaire",
  "Expert OpenIMIS certifié",
  "Administrateur systèmes & réseaux",
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
    <section id="accueil" className="relative min-h-screen overflow-hidden pt-28">
      <div className="pointer-events-none absolute inset-0 mesh-bg" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px] float-slow" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-mono text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-400 pulse-dot" />
              Disponible pour missions & collaborations
            </div>

            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Mohamed Irsoid<br />
              <span className="text-gradient">Abdou El-Anzize</span>
            </h1>

            <div className="mt-6 flex items-baseline gap-1 font-mono text-lg text-muted-foreground min-h-[2rem]">
              <span className="text-primary">$</span>
              <span className="text-foreground">{text}</span>
              <span className="cursor-blink h-5" />
            </div>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Développeur fullstack basé à Moroni, aux Comores. Je conçois des applications
              robustes — du système d'information bancaire aux plateformes de santé{" "}
              <span className="font-mono text-foreground">OpenIMIS</span> — en combinant
              ingénierie logicielle et administration systèmes.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90 glow"
              >
                <Mail className="h-4 w-4" />
                Me contacter
              </a>
              <a
                href="mailto:abdouelanzize95@gmail.com?subject=Demande de CV"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-5 py-3 text-sm font-medium transition hover:bg-white/10"
              >
                <Download className="h-4 w-4" />
                Télécharger mon CV
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs text-muted-foreground">
              <div><span className="text-primary">→</span> Moroni, Comores</div>
              <div><span className="text-primary">→</span> FR · EN · AR</div>
              <div><span className="text-primary">→</span> +269 435 98 72</div>
            </div>
          </div>

          {/* Terminal card */}
          <div className="reveal" style={{ animationDelay: "150ms" }}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/30 via-primary/5 to-transparent blur-2xl" />
              <div className="relative glass-strong rounded-2xl p-1 shadow-2xl">
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
                  <span className="h-3 w-3 rounded-full bg-red-500/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                  <span className="h-3 w-3 rounded-full bg-green-500/70" />
                  <span className="ml-3 font-mono text-xs text-muted-foreground">~/portfolio</span>
                </div>
                <div className="p-5 font-mono text-[13px] leading-relaxed">
                  <div className="text-muted-foreground">
                    <span className="text-primary">const</span>{" "}
                    <span className="text-foreground">dev</span> ={" "}
                    <span className="text-foreground">{"{"}</span>
                  </div>
                  <div className="pl-4 text-muted-foreground">
                    name: <span className="text-emerald-400">'Mohamed'</span>,
                  </div>
                  <div className="pl-4 text-muted-foreground">
                    role: <span className="text-emerald-400">'Ingénieur Web'</span>,
                  </div>
                  <div className="pl-4 text-muted-foreground">
                    stack: [
                    <span className="text-emerald-400">'Python'</span>,{" "}
                    <span className="text-emerald-400">'React'</span>,{" "}
                    <span className="text-emerald-400">'Django'</span>],
                  </div>
                  <div className="pl-4 text-muted-foreground">
                    domains: [
                    <span className="text-emerald-400">'FinTech'</span>,{" "}
                    <span className="text-emerald-400">'HealthTech'</span>],
                  </div>
                  <div className="pl-4 text-muted-foreground">
                    focus: <span className="text-emerald-400">'reliability'</span>,
                  </div>
                  <div className="text-foreground">{"};"}</div>
                  <div className="mt-3 text-primary">
                    → <span className="text-muted-foreground">dev.build()</span>
                    <span className="cursor-blink h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#apropos"
          className="mt-16 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition hover:text-foreground"
        >
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" /> scroll
        </a>
      </div>
    </section>
  );
}
