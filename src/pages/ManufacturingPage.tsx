import { Building2 } from 'lucide-react';
import IndustryPage from '../components/IndustryPage';

export default function ManufacturingPage() {
  const manufacturingData = {
    title: "Protecting Smart Factories and Industrial AI",
    subtitle: "Cyber-physical security for connected manufacturing systems and AI-driven production lines.",
    badgeText: "Manufacturing Security",
    badgeIcon: Building2,
    badgeIconColor: "text-orange-400",
    challengeContent: "As Saudi Arabia's industrial sector embraces Industry 4.0 and smart automation, factories are exposed to threats targeting both IT and OT (Operational Technology) networks. Disruption can mean production loss and safety hazards.",
    solutionContent: "Aynigma provides end-to-end protection for connected manufacturing — securing IoT sensors, AI predictive maintenance models, and factory control systems. We bridge IT-OT visibility and safeguard supply chain integrity.",
    keyCapabilities: [
      {
        title: "ICS Security",
        description: "Industrial control system (ICS) and SCADA security",
        icon: Building2,
      },
      {
        title: "AI Model Integrity",
        description: "AI model integrity for predictive and quality-control systems",
        icon: Building2,
      },
      {
        title: "Network Threat Detection",
        description: "Threat detection across OT, IoT, and IT networks",
        icon: Building2,
      },
      {
        title: "Supply Chain Analysis",
        description: "Supply chain and software composition analysis for industrial automation",
        icon: Building2,
      },
    ],
    businessOutcomes: [
      {
        title: "Operational Continuity",
        description: "Ensure operational continuity and workforce safety",
      },
      {
        title: "Downtime Prevention",
        description: "Prevent costly downtime from ransomware or sabotage",
      },
      {
        title: "IP Protection",
        description: "Safeguard intellectual property and production data",
      },
      {
        title: "Standards Alignment",
        description: "Align with national industrial cybersecurity standards",
      },
    ],
    ctaTitle: "Defend your smart manufacturing operations.",
    ctaSubtitle: "Partner with Aynigma for secure Industry 4.0 transformation.",
    trustIndicators: [
      { text: "ICS Protected", delay: 0 },
      { text: "OT Security", delay: 0.5 },
      { text: "24/7 Monitoring", delay: 1 },
    ],
  };

  return <IndustryPage {...manufacturingData} />;
}
