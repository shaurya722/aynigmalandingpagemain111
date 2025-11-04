import { Eye } from 'lucide-react';
import IndustryPage from '../components/IndustryPage';

export default function AIRuntimeSecurityPage() {
  const aiRuntimeSecurityData = {
    title: "Real-Time Defense for Intelligent Systems",
    subtitle: "Monitor, detect, and contain malicious or abnormal behavior during live AI operations.",
    badgeText: "AI Runtime Security",
    badgeIcon: Eye,
    badgeIconColor: "text-cyan-400",
    challengeContent: "Once deployed, AI models face continuous threats — from input manipulation and data exfiltration to malicious retraining attempts. Static testing is not enough; runtime visibility is essential.",
    solutionContent: "Aynigma's AI Runtime Security continuously monitors model behavior, user interactions, and inference outputs to detect real-time threats. Our system integrates with your SOC and SIEM tools to isolate compromised sessions and enforce policy-level guardrails automatically.",
    keyCapabilities: [
      {
        title: "Anomaly Detection",
        description: "Real-time anomaly detection using behavioral baselines",
        icon: Eye,
      },
      {
        title: "AI Shield",
        description: "AI shield for prompt injection and malicious query blocking",
        icon: Eye,
      },
      {
        title: "Session Isolation",
        description: "Automated isolation and containment of compromised sessions",
        icon: Eye,
      },
      {
        title: "SOC Integration",
        description: "SOC and SIEM integration for unified incident response",
        icon: Eye,
      },
    ],
    businessOutcomes: [
      {
        title: "Exploit Prevention",
        description: "Prevent prompt-based exploits and live model abuse",
      },
      {
        title: "Continuous Compliance",
        description: "Ensure continuous compliance and uptime",
      },
      {
        title: "Trust Strengthening",
        description: "Strengthen AI trustworthiness and response accuracy",
      },
      {
        title: "Faster Response",
        description: "Reduce Mean Time to Detect (MTTD) and Mean Time to Respond (MTTR)",
      },
    ],
    ctaTitle: "Protect your AI models at runtime.",
    ctaSubtitle: "Deploy Aynigma's AI Shield today.",
    trustIndicators: [
      { text: "Real-Time Monitoring", delay: 0 },
      { text: "SOC Integrated", delay: 0.5 },
      { text: "24/7 Protection", delay: 1 },
    ],
  };

  return <IndustryPage {...aiRuntimeSecurityData} />;
}
