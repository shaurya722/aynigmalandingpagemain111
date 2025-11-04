import { Briefcase } from 'lucide-react';
import CompanyPage from '../components/CompanyPage';

export default function CareersPage() {
  const careersData = {
    title: "Shape the Future of AI Security",
    subtitle: "Join a team redefining how the world protects artificial intelligence and digital systems.",
    badgeText: "Careers",
    badgeIcon: Briefcase,
    badgeIconColor: "text-green-500",
    sections: [
      {
        title: "Why Work With Us",
        content: "Aynigma Security Solutions is where global innovation meets national purpose. We're building a team of passionate cybersecurity, AI, and cloud professionals dedicated to securing intelligent technologies that power Saudi Arabia's Vision 2030.\n\nAt Aynigma, you'll work on cutting-edge projects that matter — defending AI systems used in healthcare, finance, government, and more. Whether you're a red team researcher, data scientist, or compliance expert, your work will directly shape the future of trusted AI."
      },
      {
        title: "What We Offer",
        items: [
          "Dynamic, mission-driven culture focused on innovation and impact",
          "Opportunities to collaborate with global partners and Saudi institutions",
          "Continuous professional development and certification support",
          "Competitive compensation and hybrid work flexibility"
        ]
      },
      {
        title: "Career Paths",
        items: [
          "AI Security Engineer",
          "Cyber Threat Analyst",
          "Compliance & Governance Specialist",
          "Cloud Security Architect",
          "Business Development & Partnerships Manager"
        ]
      },
      {
        title: "Aynigma Talent Development",
        content: "We invest in Saudi talent. Through partnerships with universities and national cybersecurity academies, we mentor the next generation of AI and cyber specialists — ensuring a sustainable, skilled workforce for the Kingdom."
      }
    ],
    ctaTitle: "Be part of something bigger. Explore open roles or send your CV to careers@aynigma.com.",
    ctaSubtitle: "Shape the future of AI security with us.",
    trustIndicators: [
      { text: "Vision 2030 Impact", delay: 0 },
      { text: "Talent Development", delay: 0.5 },
      { text: "Innovation Focus", delay: 1 },
    ],
  };

  return <CompanyPage {...careersData} />;
}
