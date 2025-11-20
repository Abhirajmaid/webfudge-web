export type AdminProjectStatus = "Discovery" | "Design" | "Development" | "Live";

export type AdminProject = {
  id: string;
  title: string;
  client: string;
  service: string;
  status: AdminProjectStatus;
  owner: string;
  tags: string[];
  spotlight: string;
  liveUrl?: string;
  deckUrl?: string;
};

export const sampleProjects: AdminProject[] = [
  {
    id: "PRJ-204",
    title: "Astra Influencer Hub",
    client: "Astra Drinks",
    service: "Influencer Marketing",
    status: "Design",
    owner: "Lena O",
    tags: ["Launch film", "Creator pods"],
    spotlight: "+180% brand mentions",
    liveUrl: "https://astra.example.com",
    deckUrl: "#",
  },
  {
    id: "PRJ-183",
    title: "Pluto Wallet 3.0",
    client: "Pluto Finance",
    service: "Web Development",
    status: "Development",
    owner: "Marcus V",
    tags: ["SaaS", "Product"],
    spotlight: "Design-to-dev in 4.2 weeks",
    liveUrl: "https://pluto.example.com",
  },
  {
    id: "PRJ-177",
    title: "Nourish Rebrand",
    client: "Nourish Health",
    service: "Branding",
    status: "Discovery",
    owner: "Ivy K",
    tags: ["Brand system"],
    spotlight: "Gen-Z wellness refresh",
    deckUrl: "#",
  },
  {
    id: "PRJ-161",
    title: "Orbit SaaS Site",
    client: "Orbit CRM",
    service: "Marketing Site",
    status: "Live",
    owner: "Dev Squad",
    tags: ["Webflow", "CMS"],
    spotlight: "+214% demo uplift",
    liveUrl: "https://orbitcrm.com",
  },
];

