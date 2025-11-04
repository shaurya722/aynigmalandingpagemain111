import { Shield } from 'lucide-react';
import IndustryPage from '../components/IndustryPage';

export default function AIRedTeamingPage() {
  const aiRedTeamingData = {
    title: "Expose AI Weaknesses Before Attackers Do",
    subtitle: "Simulate real-world adversarial attacks to uncover hidden vulnerabilities across your AI models, pipelines, and agents.",
    badgeText: "AI Red Teaming",
    badgeIcon: Shield,
    badgeIconColor: "text-red-500",
    challengeContent: "AI systems are uniquely exposed — from prompt injection to data leakage and model inversion. Without adversarial testing, even the most advanced LLMs and AI workflows can be manipulated or exfiltrated.",
    solutionContent: "Aynigma's AI Red Teaming delivers structured, repeatable, and customizable adversarial testing to reveal vulnerabilities before they become breaches. Using both automated and human-in-the-loop probes, we assess how your AI systems respond to malicious intent, policy evasion, and unauthorized data extraction.",
    keyCapabilities: [
      {
        title: "Simulated Attacks",
        description: "Simulated attacks aligned with OWASP Top 10 for LLMs",
        icon: Shield,
      },
      {
        title: "Customizable Probes",
        description: "Customizable probe policies for prompt injection, data leakage, and jailbreaks",
        icon: Shield,
      },
      {
        title: "Automated Scoring",
        description: "Automated scoring of model resilience and defense coverage",
        icon: Shield,
      },
      {
        title: "Safe Sandbox",
        description: "Safe sandbox environments to test without risking production systems",
        icon: Shield,
      },
    ],
    businessOutcomes: [
      {
        title: "Early Vulnerability Detection",
        description: "Identify and close exploitable AI vulnerabilities early",
      },
      {
        title: "Enhanced Trust",
        description: "Strengthen model trust, compliance, and brand reputation",
      },
      {
        title: "Regulatory Support",
        description: "Support NCA and PDPL security mandates for responsible AI",
      },
      {
        title: "Cost Reduction",
        description: "Reduce time and cost of post-deployment incident remediation",
      },
    ],
    ctaTitle: "Run adversarial simulations before your attackers do.",
    ctaSubtitle: "Contact Aynigma to schedule a Red Team assessment.",
    trustIndicators: [
      { text: "OWASP Aligned", delay: 0 },
      { text: "NCA Compliant", delay: 0.5 },
      { text: "Safe Testing", delay: 1 },
    ],
  };

  return <IndustryPage {...aiRedTeamingData} />;
}
