// Public portfolio content exposed through the MCP server.
// Mirrors what is already rendered on the public website.

export const profile = {
  name: "Mohamed Irsoid Abdou El-Anzize",
  title: "Ingénieur en application web",
  location: "Moroni, Comores",
  summary:
    "Développeur fullstack et ingénieur IT spécialisé dans les applications bancaires, les applications mobiles et les systèmes de santé numérique (OpenIMIS), avec une solide expertise en administration systèmes et réseaux.",
  languages: ["Français", "Anglais", "Comorien"],
} as const;

export const contact = {
  email: "abdouelanzize95@gmail.com",
  phone: "+2693899872",
  github: "https://github.com/irs269",
  linkedin: "https://www.linkedin.com/in/mohamedirsoidabdouelanzize/",
  location: "Moroni, Comores",
} as const;

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
};

export const experiences: Experience[] = [
  {
    role: "Développeur Système Bancaire",
    company: "Exim Bank Comores",
    period: "Mai 2026 — Aujourd'hui",
    description:
      "Développement et maintenance du système d'information bancaire. Fiabilité, sécurité et performance des services financiers.",
    tags: ["FinTech", "Sécurité", "Backend"],
  },
  {
    role: "Ingénieur IT",
    company: "Arkeup Id Comores — Groupe Arkeup",
    period: "Août 2024 — Mars 2026",
    description:
      "Administration systèmes, développement de solutions IT sur mesure et gestion de projets techniques.",
    tags: ["Sys Admin", "Gestion projet"],
  },
  {
    role: "Développeur — Application Ankiba",
    company: "Projet personnel · Mobile",
    period: "2024",
    description:
      "Création complète d'une application mobile de suivi des dépenses, avec analyse financière et conseils d'épargne personnalisés.",
    tags: ["Flutter", "Mobile", "FinTech"],
  },
  {
    role: "Développeur OpenIMIS Certifié",
    company: "Santé numérique",
    period: "2024",
    description:
      "Installation, configuration, personnalisation et développement de modules OpenIMIS pour les systèmes d'assurance maladie.",
    tags: ["OpenIMIS", "HealthTech"],
  },
  {
    role: "Ingénieur IT",
    company: "Uwezo — Comwork Partners",
    period: "Fév 2023 — Juil 2024",
    description:
      "Gestion du parc matériel, logiciel et télécoms. Support technique et administration des réseaux et serveurs.",
    tags: ["Sys Admin", "Réseau"],
  },
  {
    role: "Stagiaire — Service Informatique",
    company: "URGCC (Union des Sanduk)",
    period: "Oct 2022 — Jan 2023",
    description: "Maintenance réseau et système, installation de la plateforme RIA.",
    tags: ["Support", "Réseau"],
  },
  {
    role: "Co-développeur — Daria",
    company: "Comores & Mali",
    period: "2019 — 2020",
    description: "Application de géolocalisation d'entreprises comoriennes et maliennes.",
    tags: ["Géolocalisation", "Mobile"],
  },
];

export const skillCategories = [
  {
    category: "Langages & Frameworks",
    items: ["Python", "Java", "React JS", "Angular", "Symfony", "Django", "Flutter", "WinDev Mobile"],
  },
  { category: "Bases de données", items: ["SQL", "PostgreSQL", "GraphQL"] },
  {
    category: "DevOps & Infrastructure",
    items: ["Docker", "Linux Server", "Microtik", "VPN Server", "Réseaux"],
  },
  { category: "CMS & ERP", items: ["WordPress", "Odoo ERP", "OpenIMIS"] },
  { category: "Sécurité & Autres", items: ["Cybersécurité", "Admin réseaux", "Maintenance"] },
];

export const formations = [
  { title: "Master 2 en Informatique", school: "UPH Madagascar", year: "2022" },
  { title: "Licence en Informatique", school: "E-Media Madagascar", year: "2019" },
  { title: "Baccalauréat C", school: "Groupe scolaire Avenir", year: "2015" },
];

export const certifications = [
  "Développeur OpenIMIS certifié",
  "Expert WinDev",
  "Access avancé",
  "Administration réseaux",
  "Cybersécurité",
  "Maintenance informatique",
  "Configuration routeurs/switch Microtik",
  "Configuration serveur VPN",
];
