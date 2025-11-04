import { AlertTriangle } from 'lucide-react';
import IndustryPage from '../components/IndustryPage';

export default function AIIncidentResponsePage() {
  const aiIncidentResponseData = {
    title: "Respond Faster. Recover Smarter.",
    subtitle: "AI-assisted incident response to detect, contain, and remediate cyber and AI-specific threats.",
    badgeText: "AI Incident Response",
    badgeIcon: AlertTriangle,
    badgeIconColor: "text-yellow-500",
    challengeContent: "Traditional incident response teams are unprepared for AI-specific attacks — from model manipulation to inference abuse. Response times are critical, but expertise is scarce.",
    solutionContent: "Aynigma's AI Incident Response combines automation with expert analysis to manage breaches in both traditional and AI-driven environments. Our platform leverages AI to correlate alerts, automate containment, and generate forensic insights in real time.",
    keyCapabilities: [
      {
        title: "Automated Detection",
        description: "Automated detection and triage of AI-related incidents",
        icon: AlertTriangle,
      },
      {
        title: "Investigation Playbooks",
        description: "AI-guided investigation playbooks for SOC teams",
        icon: AlertTriangle,
      },
      {
        title: "Forensic Analysis",
        description: "Forensic analysis of model logs and inference data",
        icon: AlertTriangle,
      },
      {
        title: "Recovery Reports",
        description: "Root-cause and recovery reports aligned with NCA standards",
        icon: AlertTriangle,
      },
    ],
    businessOutcomes: [
      {
        title: "Rapid Containment",
        description: "Rapid containment of breaches and model compromise",
      },
      {
        title: "Downtime Minimization",
        description: "Minimized operational downtime and data loss",
      },
      {
        title: "Regulatory Compliance",
        description: "Improved regulatory reporting and audit readiness",
      },
      {
        title: "Continuous Learning",
        description: "Strengthened resilience through continuous post-incident learning",
      },
    ],
    ctaTitle: "Be ready before it happens.",
    ctaSubtitle: "Engage Aynigma's Incident Response team today.",
    trustIndicators: [
      { text: "NCA Aligned", delay: 0 },
      { text: "AI-Assisted", delay: 0.5 },
      { text: "24/7 Response", delay: 1 },
    ],
  };

  return <IndustryPage {...aiIncidentResponseData} />;
}
