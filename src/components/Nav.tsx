import { useEffect, useState } from "react";
import {
  Home,
  User,
  LayoutGrid,
  BarChart3,
  GraduationCap,
  Mail,
  Github,
  Linkedin,
  Phone,
} from "lucide-react";

const links = [
  { href: "#accueil", label: "Accueil", icon: Home },
  { href: "#apropos", label: "À propos", icon: User },
  { href: "#experiences", label: "Expériences", icon: LayoutGrid },
  { href: "#competences", label: "Compétences", icon: BarChart3 },
  { href: "#formation", label: "Formation", icon: GraduationCap },
  { href: "#contact", label: "Contact", icon: Mail },
];

const socials = [
  { href: "https://github.com/", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/", label: "LinkedIn", icon: Linkedin },
  { href: "tel:+26943598 72", label: "Téléphone", icon: Phone },
  { href: "mailto:abdouelanzize95@gmail.com", label: "Email", icon: Mail },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#accueil");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 140;
      let current = links[0].href;
      for (const l of links) {
        const el = document.querySelector(l.href) as HTMLElement | null;
        if (el && el.offsetTop <= y) current = l.href;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-6 md:px-10">
          <a href="#accueil" className="font-display text-lg font-bold tracking-[0.18em] uppercase">
            Mohamed <span className="font-light text-muted-foreground">El-Anzize</span>
          </a>

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-5 sm:flex">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="text-muted-foreground transition hover:text-primary"
                >
                  <s.icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
            <a
              href="mailto:abdouelanzize95@gmail.com"
              className="hidden rounded-full glass px-4 py-1.5 font-mono text-xs uppercase tracking-widest transition hover:border-primary/40 md:inline-block"
            >
              FR
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="rounded-md p-2 md:hidden"
              aria-label="Menu"
            >
              <div className="space-y-1.5">
                <span className={`block h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {open && (
          <div className="mx-5 rounded-2xl glass-strong p-4 md:hidden">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                >
                  <l.icon className="h-4 w-4" /> {l.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Vertical dock */}
      <nav className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-center gap-1 rounded-full glass-strong px-2 py-4 md:flex">
        {links.map((l) => {
          const isActive = active === l.href;
          return (
            <a
              key={l.href}
              href={l.href}
              aria-label={l.label}
              title={l.label}
              className={`group relative grid h-10 w-10 place-items-center rounded-full transition ${
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <l.icon className="h-[18px] w-[18px]" />
              <span className="pointer-events-none absolute right-12 whitespace-nowrap rounded-md glass px-2 py-1 font-mono text-[11px] opacity-0 transition group-hover:opacity-100">
                {l.label}
              </span>
            </a>
          );
        })}
      </nav>
    </>
  );
}
