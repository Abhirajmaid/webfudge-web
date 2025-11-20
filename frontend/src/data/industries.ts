export type Industry = {
  id: string;
  name: string;
  slug: string;
  sector: string;
  region: string;
  headline: string;
  summary: string;
  description: string;
  website?: string;
  contactEmail?: string;
  featuredImage?: string;
  heroHighlight?: string;
  tags: string[];
  insights?: string;
  stats?: { label: string; value: string }[];
  projectIds: string[];
  caseStudyLink?: string;
  createdAt: string;
  updatedAt: string;
};

export const defaultIndustries: Industry[] = [
  {
    id: "IND-001",
    name: "Healthcare & Wellness",
    slug: "healthcare-wellness",
    sector: "Healthcare",
    region: "Global",
    headline: "Digital care ecosystems, patient trust, wellness accelerators",
    summary:
      "Brand, product and growth programs for modern care providers, wellness platforms and biotech.",
    description:
      "We help health-first companies launch trusted products, build go-to-market systems and craft category-leading patient experiences.",
    website: "https://webfudge.com/industries/healthcare",
    contactEmail: "health@webfudge.com",
    featuredImage: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
    heroHighlight: "12 launches • +4.2M patient reach",
    tags: ["Biotech", "Wellness", "Femtech", "Hospitality"],
    insights:
      "Focus on regulatory-friendly storytelling, product education hubs, personalized onboarding and community-led content.",
    stats: [
      { label: "Avg NPS lift", value: "+32" },
      { label: "Launch velocity", value: "5.1 weeks" },
    ],
    projectIds: ["PRJ-177", "PRJ-204"],
    caseStudyLink: "https://webfudge.com/case-studies/healthcare",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "IND-002",
    name: "Fintech & SaaS",
    slug: "fintech-saas",
    sector: "Finance",
    region: "North America & Europe",
    headline: "Product-led growth, trust-driven onboarding, GTM playbooks",
    summary:
      "Growth architecture for SaaS and fintech teams — from acquisition flows to investor-grade storytelling.",
    description:
      "We partner with fintech founders to ship enterprise-ready design systems, modular marketing sites and lifecycle content ops.",
    website: "https://webfudge.com/industries/fintech",
    contactEmail: "fintech@webfudge.com",
    featuredImage: "https://images.unsplash.com/photo-1556740758-90de374c12ad",
    heroHighlight: "$480M capital supported • 28 launches",
    tags: ["Payments", "SaaS", "Devtools", "Web3"],
    insights:
      "Emphasis on trust signals, data visual systems, demand gen microsites and always-on investor collateral.",
    stats: [
      { label: "Avg conversion lift", value: "3.8x" },
      { label: "Markets served", value: "11" },
    ],
    projectIds: ["PRJ-183", "PRJ-161"],
    caseStudyLink: "https://webfudge.com/case-studies/fintech",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];






