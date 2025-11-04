import { Code } from 'lucide-react';
import IndustryPage from '../components/IndustryPage';

export default function TechnologyPage() {
  const technologyData = {
    title: "Empowering Secure Digital Innovation",
    subtitle: "Protecting AI, data, and software ecosystems that power the Kingdom's tech-driven growth.",
    badgeText: "Technology Security",
    badgeIcon: Code,
    badgeIconColor: "text-blue-400",
    challengeContent: "Saudi Arabia's booming tech sector — from cloud providers to startups — faces challenges in securing rapid innovation cycles, open-source dependencies, and AI-driven applications while meeting PDPL and NCA requirements.",
    solutionContent: "Aynigma partners with technology companies to embed security into their development, deployment, and data pipelines. From AI red teaming to secure code analysis, we ensure innovation never compromises protection.",
    keyCapabilities: [
      {
        title: "Secure Supply Chain",
        description: "Secure software supply chain (AI SCA + SAST integration)",
        icon: Code,
      },
      {
        title: "DevSecOps",
        description: "Cloud-native and DevSecOps security frameworks",
        icon: Code,
      },
      {
        title: "Data Governance",
        description: "Model lifecycle and data governance controls",
        icon: Code,
      },
      {
        title: "AI Runtime Defense",
        description: "AI runtime defense and compliance automation",
        icon: Code,
      },
    ],
    businessOutcomes: [
      {
        title: "Secure Innovation",
        description: "Accelerate innovation securely in compliance with Vision 2030 goals",
      },
      {
        title: "Exploitation Prevention",
        description: "Prevent software and AI model exploitation",
      },
      {
        title: "Trust Building",
        description: "Strengthen investor and customer trust in digital products",
      },
      {
        title: "Time-to-Market",
        description: "Reduce time-to-market while maintaining security assurance",
      },
    ],
    ctaTitle: "Innovate securely.",
    ctaSubtitle: "Build your next breakthrough on Aynigma's trusted protection.",
    trustIndicators: [
      { text: "PDPL Compliant", delay: 0 },
      { text: "NCA Certified", delay: 0.5 },
      { text: "Cloud Security", delay: 1 },
    ],
  };

  return <IndustryPage {...technologyData} />;
}
