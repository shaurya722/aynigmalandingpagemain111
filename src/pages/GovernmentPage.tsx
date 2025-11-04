import { Building } from 'lucide-react';
import IndustryPage from '../components/IndustryPage';

export default function GovernmentPage() {
  const governmentData = {
    title: "Empowering Cyber-Resilient Governance",
    subtitle: "AI-driven security and compliance solutions for critical national infrastructure and government transformation.",
    badgeText: "Government Security",
    badgeIcon: Building,
    badgeIconColor: "text-slate-400",
    challengeContent: "Saudi Arabia's e-government and smart city initiatives demand secure digital infrastructure. Government agencies manage massive citizen data and AI-driven public services — attractive targets for state-sponsored and cybercriminal attacks.",
    solutionContent: "Aynigma partners with government bodies to protect critical systems, secure sovereign data, and ensure compliance with NCA Essential Cybersecurity Controls. Our AI defense technologies safeguard both traditional IT and emerging AI-driven services.",
    keyCapabilities: [
      {
        title: "AI Red Teaming",
        description: "National-level AI red teaming and model security assessments",
        icon: Building,
      },
      {
        title: "Compliance Monitoring",
        description: "Continuous monitoring for compliance with NCA and PDPL",
        icon: Building,
      },
      {
        title: "Cloud Security",
        description: "Secure cloud and data center protection for government workloads",
        icon: Building,
      },
      {
        title: "Digital Forensics",
        description: "Incident response and digital forensics for public sector systems",
        icon: Building,
      },
    ],
    businessOutcomes: [
      {
        title: "National Resilience",
        description: "Strengthen national cyber resilience and data sovereignty",
      },
      {
        title: "Citizen Trust",
        description: "Protect citizen trust in digital governance systems",
      },
      {
        title: "Secure AI Adoption",
        description: "Enable secure AI adoption across ministries and agencies",
      },
      {
        title: "Vision 2030 Alignment",
        description: "Align with Vision 2030's digital government transformation goals",
      },
    ],
    ctaTitle: "Fortify your digital nation.",
    ctaSubtitle: "Partner with Aynigma to secure government innovation.",
    trustIndicators: [
      { text: "NCA Compliant", delay: 0 },
      { text: "National Security", delay: 0.5 },
      { text: "Data Sovereignty", delay: 1 },
    ],
  };

  return <IndustryPage {...governmentData} />;
}
