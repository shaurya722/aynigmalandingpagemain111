import { Gavel } from 'lucide-react';
import IndustryPage from '../components/IndustryPage';

export default function LegalPage() {
  const legalData = {
    title: "Safeguarding Confidential Data and AI-Driven Legal Workflows",
    subtitle: "Protect your firm's reputation and client trust with advanced AI data protection and compliance controls.",
    badgeText: "Legal Security",
    badgeIcon: Gavel,
    badgeIconColor: "text-purple-400",
    challengeContent: "Law firms and legal departments handle highly confidential data increasingly processed by AI tools for research, drafting, and analytics. These systems risk data exposure through prompt leaks, unauthorized access, or ungoverned AI use.",
    solutionContent: "Aynigma secures AI-enabled legal environments with data encryption, policy enforcement, and real-time monitoring. Our compliance engine ensures PDPL and confidentiality requirements are upheld in every interaction.",
    keyCapabilities: [
      {
        title: "AI Usage Control",
        description: "AI usage control and secure data handling for legal tools",
        icon: Gavel,
      },
      {
        title: "Data Leak Monitoring",
        description: "Continuous monitoring for data leaks or prompt injection",
        icon: Gavel,
      },
      {
        title: "Role-Based Access",
        description: "Role-based access and activity logging for sensitive cases",
        icon: Gavel,
      },
      {
        title: "Compliance Reporting",
        description: "Automated PDPL and client confidentiality compliance reporting",
        icon: Gavel,
      },
    ],
    businessOutcomes: [
      {
        title: "Data Leakage Prevention",
        description: "Prevent AI-assisted data leakage or confidentiality breaches",
      },
      {
        title: "Client Trust",
        description: "Strengthen client trust through demonstrable compliance",
      },
      {
        title: "Secure AI Use",
        description: "Enable secure use of generative AI in legal research and document review",
      },
      {
        title: "Reputation Protection",
        description: "Protect reputation and meet professional ethics obligations",
      },
    ],
    ctaTitle: "Protect every legal interaction.",
    ctaSubtitle: "Explore Aynigma's Legal AI Security suite.",
    trustIndicators: [
      { text: "PDPL Compliant", delay: 0 },
      { text: "Client Confidentiality", delay: 0.5 },
      { text: "AI Secure", delay: 1 },
    ],
  };

  return <IndustryPage {...legalData} />;
}
