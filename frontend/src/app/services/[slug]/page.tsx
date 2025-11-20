"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

const serviceData = {
  "ui-ux-design": {
    title: "UI/UX Design",
    icon: "🎨",
    category: "Design",
    description: "Create intuitive and engaging user interfaces that provide exceptional user experiences.",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design & Branding",
      "Usability Testing",
      "Responsive Design",
      "Design Systems"
    ],
    process: [
      "Discovery & Research",
      "Information Architecture",
      "Wireframing",
      "Visual Design",
      "Prototyping",
      "Testing & Iteration"
    ]
  },
  "product-audit": {
    title: "Product Audit",
    icon: "📋",
    category: "Design",
    description: "Comprehensive analysis of your product's usability, design, and user experience.",
    features: [
      "Usability Analysis",
      "Design Review",
      "User Journey Mapping",
      "Accessibility Audit",
      "Performance Review",
      "Competitive Analysis"
    ],
    process: [
      "Initial Assessment",
      "User Testing",
      "Design Analysis",
      "Report Generation",
      "Recommendations",
      "Implementation Plan"
    ]
  },
  "branding": {
    title: "Branding",
    icon: "🏷️",
    category: "Design",
    description: "Develop a strong brand identity that resonates with your target audience.",
    features: [
      "Brand Strategy",
      "Logo Design",
      "Visual Identity",
      "Brand Guidelines",
      "Marketing Materials",
      "Brand Implementation"
    ],
    process: [
      "Brand Discovery",
      "Strategy Development",
      "Visual Identity",
      "Guidelines Creation",
      "Asset Development",
      "Brand Rollout"
    ]
  },
  "rebranding": {
    title: "Rebranding",
    icon: "🔄",
    category: "Design",
    description: "Transform your existing brand to better align with your business goals and market position.",
    features: [
      "Brand Assessment",
      "Market Research",
      "Identity Refresh",
      "Guidelines Update",
      "Asset Migration",
      "Brand Launch"
    ],
    process: [
      "Current Brand Analysis",
      "Market Positioning",
      "New Identity Design",
      "Guidelines Update",
      "Asset Migration",
      "Launch Strategy"
    ]
  },
  "web-design": {
    title: "Web Design",
    icon: "💻",
    category: "Design",
    description: "Create stunning, responsive websites that convert visitors into customers.",
    features: [
      "Responsive Design",
      "User Experience",
      "Visual Design",
      "Performance Optimization",
      "SEO-Friendly Structure",
      "Cross-Browser Compatibility"
    ],
    process: [
      "Discovery & Planning",
      "Wireframing",
      "Visual Design",
      "Prototyping",
      "Development Handoff",
      "Quality Assurance"
    ]
  },
  "web-development": {
    title: "Web Development",
    icon: "🌐",
    category: "Development",
    description: "Build robust, scalable web applications using modern technologies.",
    features: [
      "Frontend Development",
      "Backend Development",
      "Database Design",
      "API Development",
      "Performance Optimization",
      "Security Implementation"
    ],
    process: [
      "Requirements Analysis",
      "Architecture Planning",
      "Development",
      "Testing",
      "Deployment",
      "Maintenance"
    ]
  },
  "webflow-development": {
    title: "Webflow Development",
    icon: "< />",
    category: "Development",
    description: "Create custom websites using Webflow's powerful visual development platform.",
    features: [
      "Visual Development",
      "Custom Interactions",
      "CMS Integration",
      "E-commerce Setup",
      "Responsive Design",
      "Performance Optimization"
    ],
    process: [
      "Design to Code",
      "Custom Interactions",
      "CMS Configuration",
      "Testing",
      "Launch",
      "Training"
    ]
  },
  "mvp-development": {
    title: "MVP Development",
    icon: "⚙️",
    category: "Development",
    description: "Build minimum viable products quickly to validate your business idea.",
    features: [
      "Rapid Prototyping",
      "Core Features Only",
      "Scalable Architecture",
      "User Feedback Integration",
      "Iterative Development",
      "Cost-Effective Solution"
    ],
    process: [
      "Idea Validation",
      "Feature Prioritization",
      "Rapid Development",
      "User Testing",
      "Iteration",
      "Scale Planning"
    ]
  },
  "cms-development": {
    title: "CMS Development",
    icon: "📚",
    category: "Development",
    description: "Build custom content management systems for easy content updates.",
    features: [
      "Custom CMS",
      "Content Management",
      "User Roles",
      "Media Management",
      "SEO Tools",
      "Analytics Integration"
    ],
    process: [
      "Requirements Analysis",
      "CMS Architecture",
      "Development",
      "Content Migration",
      "User Training",
      "Ongoing Support"
    ]
  },
  "software-development": {
    title: "Software Development",
    icon: "{ }",
    category: "Development",
    description: "Develop custom software solutions tailored to your business needs.",
    features: [
      "Custom Applications",
      "Desktop Software",
      "Mobile Apps",
      "API Development",
      "Integration Services",
      "Maintenance & Support"
    ],
    process: [
      "Requirements Gathering",
      "System Design",
      "Development",
      "Testing",
      "Deployment",
      "Maintenance"
    ]
  }
};

export default function ServicePage() {
  const params = useParams();
  const serviceSlug = params.slug as string;
  const service = serviceData[serviceSlug as keyof typeof serviceData];

  if (!service) {
    return (
      <div className="min-h-screen bg-[#100C2A] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link href="/" className="text-blue-400 hover:text-blue-300">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#100C2A] text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-white"></div>
          </div>
          <span className="text-white font-bold text-xl">HALO LAB</span>
        </Link>
        
        <div className="flex items-center gap-8">
          <Link href="/" className="text-white hover:text-gray-300">Home</Link>
          <Link href="/#services" className="text-white hover:text-gray-300">Services</Link>
          <Link href="/#contact" className="text-white hover:text-gray-300">Contact</Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        
        {/* Service Header */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 mx-auto mb-6 border-2 border-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-blue-500 text-4xl">{service.icon}</span>
          </div>
          
          <div className="mb-4">
            <span className="text-blue-400 font-bold text-lg uppercase tracking-wider">
              {service.category}
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            {service.title}
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Features and Process */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          
          {/* Features */}
          <div className="bg-white/5 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">What We Offer</h2>
            <div className="space-y-4">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="bg-white/5 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Our Process</h2>
            <div className="space-y-4">
              {service.process.map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <span className="text-gray-300">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Let's discuss your {service.title.toLowerCase()} project and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact"
                className="bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition"
              >
                BOOK A CALL
              </Link>
              <Link 
                href="/#services"
                className="border border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
              >
                VIEW ALL SERVICES
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


