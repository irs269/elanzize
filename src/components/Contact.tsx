import { useState } from "react";
import { SectionHeader } from "./About";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Nom : ${form.name}\nEmail : ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:abdouelanzize95@gmail.com?subject=Contact via portfolio&body=${body}`;
    setStatus("sent");
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-40" />
      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeader kicker="05 / contact" title="Un projet en tête ? Discutons-en." />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Je réponds sous 48h. N'hésitez pas à me joindre directement par email ou
              téléphone.
            </p>

            <ContactLink
              icon={<Mail className="h-5 w-5" />}
              label="Email"
              value="abdouelanzize95@gmail.com"
              href="mailto:abdouelanzize95@gmail.com"
            />
            <ContactLink
              icon={<Phone className="h-5 w-5" />}
              label="Téléphone"
              value="+269 38 99 87 2"
              href="tel:+2693899872"
            />
            <ContactLink
              icon={<MapPin className="h-5 w-5" />}
              label="Localisation"
              value="Moroni, Comores"
            />
          </div>

          <form onSubmit={submit} className="glass-strong rounded-2xl p-6 space-y-4">
            <Field
              label="Nom"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              required
            />
            <Field
              label="Email"
              type="email"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
              required
            />
            <div>
              <label className="font-mono text-xs text-muted-foreground">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm outline-none transition focus:border-primary/60 focus:bg-white/[0.05]"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90 glow"
            >
              <Send className="h-4 w-4" />
              {status === "sent" ? "Message préparé" : "Envoyer le message"}
            </button>
          </form>
        </div>
      </div>

      <footer className="mt-24 border-t border-border/50 py-8">
        <div className="mx-auto max-w-6xl px-4 flex flex-col items-center gap-2 text-center font-mono text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <div>© {new Date().getFullYear()} Mohamed Irsoid Abdou El-Anzize</div>
          <div>Conçu & développé avec <span className="text-primary">◆</span> à Moroni</div>
        </div>
      </footer>
    </section>
  );
}

function ContactLink({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="glass card-hover flex items-center gap-4 rounded-xl p-4">
      <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          {label}
        </div>
        <div className="truncate text-sm">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="font-mono text-xs text-muted-foreground">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm outline-none transition focus:border-primary/60 focus:bg-white/[0.05]"
      />
    </div>
  );
}
