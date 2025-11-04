import { Heart, Shield, Activity, Users } from 'lucide-react';
import IndustryPage from '../components/IndustryPage';

export default function HealthcarePage() {
  const healthcareData = {
    title: "Protecting Patient Data and Medical AI with Precision",
    subtitle: "Securing the future of digital health through AI-aware cybersecurity and compliance with PDPL and NCA standards.",
    badgeText: "Healthcare Security",
    badgeIcon: Heart,
    badgeIconColor: "text-red-400",
    challengeContent: "Saudi Arabia's healthcare transformation under Vision 2030 depends on digital hospitals, telemedicine, and AI diagnostics. These advancements also introduce new attack surfaces — from connected devices to AI models processing patient data.",
    solutionContent: "Aynigma safeguards healthcare ecosystems through end-to-end AI and cybersecurity. We protect electronic health records (EHRs), medical IoT devices, and AI diagnostic systems with compliance to PDPL and NCA standards.",
    keyCapabilities: [
      {
        title: "AI Model Security",
        description: "AI model security for diagnostics and imaging systems",
        icon: Shield,
      },
      {
        title: "PDPL Compliance",
        description: "PDPL-compliant patient data protection and encryption",
        icon: Activity,
      },
      {
        title: "IoT Security",
        description: "Medical IoT and connected device vulnerability management",
        icon: Users,
      },
      {
        title: "Compliance Monitoring",
        description: "Continuous compliance monitoring for MOH and NCA standards",
        icon: Shield,
      },
    ],
    businessOutcomes: [
      {
        title: "Patient Confidentiality",
        description: "Protect patient confidentiality and clinical trust",
        additionalInfo: "Critical for healthcare compliance",
      },
      {
        title: "Operational Continuity",
        description: "Prevent operational downtime from ransomware or breaches",
        additionalInfo: "Minimize disruption to patient care",
      },
      {
        title: "Regulatory Compliance",
        description: "Support regulatory compliance for health data sovereignty",
        additionalInfo: "PDPL and NCA standards alignment",
      },
      {
        title: "AI Innovation",
        description: "Enable secure AI-driven innovation in medical care",
        additionalInfo: "Future-proof healthcare technology",
      },
    ],
    ctaTitle: "Secure your digital health infrastructure.",
    ctaSubtitle: "Contact Aynigma to protect patients and AI systems alike.",
    trustIndicators: [
      { text: "PDPL Compliant", delay: 0 },
      { text: "NCA Certified", delay: 0.5 },
      { text: "24/7 Support", delay: 1 },
    ],
  };

  return <IndustryPage {...healthcareData} />;
}
