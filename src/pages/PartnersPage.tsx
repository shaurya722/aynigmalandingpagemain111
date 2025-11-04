import { Heart } from 'lucide-react';
import CompanyPage from '../components/CompanyPage';

export default function PartnersPage() {
  const partnersData = {
    title: "Building a Secure Ecosystem Together",
    subtitle: "Aynigma collaborates with global leaders, Saudi institutions, and innovators to advance AI and cybersecurity resilience.",
    badgeText: "Partnerships",
    badgeIcon: Heart,
    badgeIconColor: "text-purple-500",
    sections: [
      {
        title: "Our Partnership Philosophy",
        content: "We believe that securing the future of AI requires collaboration. Aynigma partners with technology vendors, research institutions, and government entities to build integrated, compliant, and scalable defense ecosystems.\n\nThrough partnerships, we accelerate innovation, enhance local capacity, and ensure every solution aligns with Saudi Arabia's strategic digital objectives."
      },
      {
        title: "Our Partner Network Includes",
        items: [
          "Technology Partners: Cloud, AI, and cybersecurity vendors integrating Aynigma security layers into their platforms.",
          "Government & Enterprise Partners: Collaborations with ministries, national data centers, and Vision 2030 projects to strengthen cyber resilience.",
          "Academic & Training Partners: Joint programs with Saudi universities to develop cybersecurity and AI expertise locally."
        ]
      },
      {
        title: "Partnership Benefits",
        items: [
          "Access to Aynigma's AI defense and compliance frameworks",
          "Co-development and research collaboration opportunities",
          "Visibility through joint participation in national tech events (e.g., LEAP, Black Hat MEA)",
          "Shared mission to advance sovereign AI security capabilities"
        ]
      }
    ],
    ctaTitle: "Collaborate with Aynigma. Connect with our partnerships team at partners@aynigma.com to explore opportunities.",
    ctaSubtitle: "Build the future of AI security together.",
    trustIndicators: [
      { text: "Strategic Alliances", delay: 0 },
      { text: "Joint Innovation", delay: 0.5 },
      { text: "National Impact", delay: 1 },
    ],
  };

  return <CompanyPage {...partnersData} />;
}
