import { TrendingUp } from 'lucide-react';
import IndustryPage from '../components/IndustryPage';

export default function FinancePage() {
  const financeData = {
    title: "Building Cyber Trust in the Kingdom's Financial Future",
    subtitle: "Advanced defense and compliance for banks, fintechs, and investment institutions under SAMA's cybersecurity framework.",
    badgeText: "Financial Security",
    badgeIcon: TrendingUp,
    badgeIconColor: "text-green-400",
    challengeContent: "Banks and financial institutions in Saudi Arabia face targeted attacks on digital platforms, mobile banking, and AI fraud systems. Compliance with SAMA's cybersecurity and PDPL mandates adds complexity to already strained security operations.",
    solutionContent: "Aynigma provides AI-enhanced threat detection, fraud prevention, and compliance automation for financial organizations. Our solutions strengthen digital banking resilience, secure AI-driven trading systems, and support rapid recovery in case of incidents.",
    keyCapabilities: [
      {
        title: "AI Fraud Detection",
        description: "AI-driven fraud and anomaly detection for transactions",
        icon: TrendingUp,
      },
      {
        title: "Zero Trust",
        description: "Zero-trust protection for digital and mobile banking platforms",
        icon: TrendingUp,
      },
      {
        title: "Compliance Mapping",
        description: "Continuous compliance mapping to SAMA and NCA frameworks",
        icon: TrendingUp,
      },
      {
        title: "Incident Response",
        description: "Incident response and recovery for financial cyber incidents",
        icon: TrendingUp,
      },
    ],
    businessOutcomes: [
      {
        title: "Fraud Prevention",
        description: "Prevent financial fraud and account takeover attempts",
      },
      {
        title: "Operational Continuity",
        description: "Maintain uninterrupted banking operations and customer trust",
      },
      {
        title: "Compliance Readiness",
        description: "Streamline compliance and audit readiness",
      },
      {
        title: "Innovation Protection",
        description: "Protect digital innovation in fintech and payment systems",
      },
    ],
    ctaTitle: "Defend your financial systems with confidence.",
    ctaSubtitle: "Talk to Aynigma's financial cybersecurity experts.",
    trustIndicators: [
      { text: "SAMA Compliant", delay: 0 },
      { text: "PDPL Certified", delay: 0.5 },
      { text: "24/7 Monitoring", delay: 1 },
    ],
  };

  return <IndustryPage {...financeData} />;
}
