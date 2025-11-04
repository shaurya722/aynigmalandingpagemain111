import { CheckCircle } from 'lucide-react';
import IndustryPage from '../components/IndustryPage';

export default function ComplianceMonitoringPage() {
  const complianceMonitoringData = {
    title: "Stay Compliant. Stay Ahead.",
    subtitle: "Automate cybersecurity and data protection compliance with AI-powered continuous monitoring.",
    badgeText: "Compliance Monitoring",
    badgeIcon: CheckCircle,
    badgeIconColor: "text-green-500",
    challengeContent: "Saudi organizations face complex, overlapping regulations — from NCA's Essential Cybersecurity Controls to PDPL's data privacy mandates. Manual compliance tracking is costly and error-prone.",
    solutionContent: "Aynigma Compliance Monitoring automates compliance mapping and reporting through AI-driven analytics. It continuously scans your systems for control gaps, policy violations, and data exposure risks — ensuring continuous alignment with Saudi and global frameworks.",
    keyCapabilities: [
      {
        title: "Automated Mapping",
        description: "Automated NCA, PDPL, and ISO 27001 control mapping",
        icon: CheckCircle,
      },
      {
        title: "Evidence Collection",
        description: "Continuous evidence collection and audit readiness",
        icon: CheckCircle,
      },
      {
        title: "Violation Detection",
        description: "AI-based detection of data protection violations",
        icon: CheckCircle,
      },
      {
        title: "Compliance Dashboards",
        description: "Real-time compliance dashboards for leadership teams",
        icon: CheckCircle,
      },
    ],
    businessOutcomes: [
      {
        title: "Simplified Audits",
        description: "Simplify and accelerate audits",
      },
      {
        title: "Penalty Prevention",
        description: "Avoid regulatory penalties and reputational damage",
      },
      {
        title: "Investor Confidence",
        description: "Demonstrate continuous compliance for investors and regulators",
      },
      {
        title: "Strategic Focus",
        description: "Free up internal teams for strategic security work",
      },
    ],
    ctaTitle: "Automate your compliance journey.",
    ctaSubtitle: "Contact Aynigma for a compliance readiness demo.",
    trustIndicators: [
      { text: "NCA Compliant", delay: 0 },
      { text: "PDPL Ready", delay: 0.5 },
      { text: "AI-Powered", delay: 1 },
    ],
  };

  return <IndustryPage {...complianceMonitoringData} />;
}
