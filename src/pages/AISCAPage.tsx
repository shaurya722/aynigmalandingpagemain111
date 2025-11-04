import { Search } from 'lucide-react';
import IndustryPage from '../components/IndustryPage';

export default function AISCAPage() {
  const aiSCAData = {
    title: "Know What's Inside Your AI Stack",
    subtitle: "Uncover and fix vulnerabilities in open-source and third-party components powering your AI systems.",
    badgeText: "AI SCA",
    badgeIcon: Search,
    badgeIconColor: "text-purple-500",
    challengeContent: "Modern AI pipelines rely on countless open-source models, datasets, and dependencies — many unverified or outdated. One weak link can expose your entire AI workflow.",
    solutionContent: "Aynigma's AI SCA scans your AI ecosystem for known vulnerabilities, license risks, and integrity issues across dependencies, model weights, and packages. It ensures secure provenance and continuous monitoring of your AI software supply chain.",
    keyCapabilities: [
      {
        title: "Vulnerability Scanning",
        description: "Vulnerability scanning of Python, ML, and AI libraries",
        icon: Search,
      },
      {
        title: "SBOM Generation",
        description: "SBOM (Software Bill of Materials) generation and validation",
        icon: Search,
      },
      {
        title: "License Risk Tracking",
        description: "License risk and dependency tracking",
        icon: Search,
      },
      {
        title: "CI/CD Integration",
        description: "Integration with CI/CD and model deployment pipelines",
        icon: Search,
      },
    ],
    businessOutcomes: [
      {
        title: "Vulnerability Prevention",
        description: "Prevent exploitation via open-source vulnerabilities",
      },
      {
        title: "Supply Chain Transparency",
        description: "Increase transparency and auditability of AI components",
      },
      {
        title: "Compliance Standards",
        description: "Maintain compliance with secure supply chain standards",
      },
      {
        title: "Release Confidence",
        description: "Enhance confidence in AI product releases",
      },
    ],
    ctaTitle: "Discover every risk in your AI stack.",
    ctaSubtitle: "Request an AI SCA evaluation.",
    trustIndicators: [
      { text: "SBOM Ready", delay: 0 },
      { text: "CI/CD Integrated", delay: 0.5 },
      { text: "Vulnerability Free", delay: 1 },
    ],
  };

  return <IndustryPage {...aiSCAData} />;
}
