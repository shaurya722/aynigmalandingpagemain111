import { Users } from 'lucide-react';
import CompanyPage from '../components/CompanyPage';

export default function AboutUsPage() {
  const aboutUsData = {
    title: "Securing the Intelligent Future",
    subtitle: "Aynigma Security Solutions Corp is a cybersecurity and AI defense company safeguarding intelligent systems across Saudi Arabia and beyond.",
    badgeText: "About Aynigma",
    badgeIcon: Users,
    badgeIconColor: "text-blue-500",
    sections: [
      {
        title: "Who We Are",
        content: "Aynigma Security Solutions Corp was founded to protect the next generation of intelligent technologies — from AI-driven platforms to critical national infrastructure. With headquarters in Saudi Arabia and the United States, we combine international expertise with local commitment to build trust in AI and digital transformation.\n\nOur mission is to make AI systems secure, ethical, and compliant by design. We work alongside enterprises, governments, and innovators to ensure that every digital interaction — from a chatbot to a national data platform — operates safely and transparently."
      },
      {
        title: "Our Vision",
        content: "To be the leading force in AI and cybersecurity innovation across the Middle East, empowering secure digital transformation in alignment with Saudi Arabia's Vision 2030."
      },
      {
        title: "Our Core Values",
        items: [
          "Integrity: We build solutions that prioritize trust and transparency.",
          "Innovation: We use AI to defend AI — combining creativity with precision.",
          "Compliance: We uphold the highest standards of NCA, PDPL, and global regulations.",
          "Collaboration: We partner with government, academia, and industry to advance national resilience."
        ]
      },
      {
        title: "Key Differentiators",
        items: [
          "Dual presence in the U.S. and Saudi Arabia for global best practices and local compliance.",
          "Expertise in both cybersecurity and AI model protection.",
          "Alignment with Vision 2030's digital economy goals.",
          "Active contributor to Saudi's growing AI and cyber innovation ecosystem."
        ]
      }
    ],
    ctaTitle: "Partner with Aynigma to secure the foundation of tomorrow's intelligent systems.",
    ctaSubtitle: "Join us in building a safer, more trustworthy AI ecosystem.",
    trustIndicators: [
      { text: "Saudi Founded", delay: 0 },
      { text: "Vision 2030 Aligned", delay: 0.5 },
      { text: "Global Reach", delay: 1 },
    ],
  };

  return <CompanyPage {...aboutUsData} />;
}
