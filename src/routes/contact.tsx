import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Github, Linkedin, CheckCircle2 } from "lucide-react";

import { Nav } from "@/components/Nav";
import { getMcpContact } from "@/lib/contact.functions";

export const Route = createFileRoute("/contact")({
  loader: () => getMcpContact(),
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Mohamed Irsoid Abdou El-Anzize" },
      {
        name: "description",
        content:
          "Coordonnées de Mohamed Irsoid Abdou El-Anzize, ingénieur en application web à Moroni : email, téléphone, GitHub et LinkedIn.",
      },
      { property: "og:title", content: "Contact — Mohamed Irsoid Abdou El-Anzize" },
      {
        property: "og:description",
        content:
          "Écrivez-moi : email, téléphone, GitHub et LinkedIn de Mohamed Irsoid Abdou El-Anzize, ingénieur en application web.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

function ContactPage() {
  const { contact, message, tool } = Route.useLoaderData();

  const rows = [
    { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: Phone, label: "Téléphone", value: contact.phone, href: `tel:${contact.phone}` },
    { icon: Github, label: "GitHub", value: contact.github, href: contact.github },
    { icon: Linkedin, label: "LinkedIn", value: contact.linkedin, href: contact.linkedin },
    { icon: MapPin, label: "Localisation", value: contact.location },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Contact</p>
        <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl">
          Parlons de votre <span className="text-gradient">projet</span>
        </h1>

        <div className="glass mt-8 flex items-start gap-3 rounded-xl p-4">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <div>
            <p className="text-sm text-foreground">{message}</p>
            <p className="mt-1 font-mono text-xs text-muted-foreground">
              source : serveur MCP · outil {tool}
            </p>
          </div>
        </div>

        <ul className="mt-10 space-y-3">
          {rows.map(({ icon: Icon, label, value, href }) => (
            <li key={label} className="glass rounded-xl p-4 transition-colors hover:border-primary/40">
              <div className="flex items-center gap-4">
                <span className="grid h-10 w-10 place-items-center border border-primary/20 bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="block truncate text-sm text-foreground hover:text-primary"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="truncate text-sm text-foreground">{value}</p>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
