import { Code2 } from 'lucide-react';
import IndustryPage from '../components/IndustryPage';

export default function AISASTPage() {
  const aiSASTData = {
    title: "Secure AI Code at the Source",
    subtitle: "Analyze and harden your AI codebase, APIs, and serving logic before deployment.",
    badgeText: "AI SAST",
    badgeIcon: Code2,
    badgeIconColor: "text-orange-500",
    challengeContent: "As AI pipelines evolve rapidly, insecure coding practices and exposed APIs remain a top risk. Detecting these issues late can lead to major breaches or compliance failures.",
    solutionContent: "Aynigma's AI SAST solution applies deep static analysis to AI-related code — from model-serving scripts to orchestration layers — detecting injection flaws, unsafe dependencies, and logic vulnerabilities early in development.",
    keyCapabilities: [
      {
        title: "Automated Scanning",
        description: "Automated scanning of Python, JavaScript, and AI framework code",
        icon: Code2,
      },
      {
        title: "Pattern Detection",
        description: "Pattern-based detection of data leakage and injection risks",
        icon: Code2,
      },
      {
        title: "Secure Coding",
        description: "Secure coding recommendations aligned with OWASP ML guidelines",
        icon: Code2,
      },
      {
        title: "DevSecOps Integration",
        description: "Integration into GitHub, GitLab, and CI/CD pipelines",
        icon: Code2,
      },
    ],
    businessOutcomes: [
      {
        title: "Early Detection",
        description: "Shift security left with early detection",
      },
      {
        title: "Cost Reduction",
        description: "Reduce cost of fixing vulnerabilities post-release",
      },
      {
        title: "Faster Development",
        description: "Accelerate secure development cycles",
      },
      {
        title: "Exploitation Prevention",
        description: "Strengthen AI systems against data and code exploitation",
      },
    ],
    ctaTitle: "Build secure AI from day one.",
    ctaSubtitle: "Integrate Aynigma's AI SAST into your DevSecOps pipeline.",
    trustIndicators: [
      { text: "OWASP Aligned", delay: 0 },
      { text: "DevSecOps Ready", delay: 0.5 },
      { text: "Early Detection", delay: 1 },
    ],
  };

  return <IndustryPage {...aiSASTData} />;
}
