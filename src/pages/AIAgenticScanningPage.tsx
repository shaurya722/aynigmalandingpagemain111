import { Bot } from 'lucide-react';
import IndustryPage from '../components/IndustryPage';

export default function AIAgenticScanningPage() {
  const aiAgenticScanningData = {
    title: "Secure the Next Generation of Autonomous Agents",
    subtitle: "Detect and mitigate emerging risks in agentic and multi-AI systems before they act beyond intent.",
    badgeText: "AI Agentic Scanning",
    badgeIcon: Bot,
    badgeIconColor: "text-indigo-400",
    challengeContent: "AI agents capable of autonomous decision-making can execute unintended or unsafe actions if manipulated or misaligned. Traditional security tools can't see or interpret agentic behavior.",
    solutionContent: "Aynigma's AI Agentic Scanning evaluates the security posture of AI agents, copilots, and orchestration frameworks. It tracks chain-of-thought logic, behavioral drift, and unsafe API calls to ensure compliance and prevent rogue operations.",
    keyCapabilities: [
      {
        title: "Policy Enforcement",
        description: "Behavioral policy enforcement for AI agent frameworks",
        icon: Bot,
      },
      {
        title: "Continuous Scanning",
        description: "Continuous scanning for unsafe or unapproved actions",
        icon: Bot,
      },
      {
        title: "Decision Flow Monitoring",
        description: "Monitoring of agent collaboration and decision flow",
        icon: Bot,
      },
      {
        title: "Framework Compatibility",
        description: "Compatibility with LangChain, AutoGen, and MCP environments",
        icon: Bot,
      },
    ],
    businessOutcomes: [
      {
        title: "Safe Actions",
        description: "Prevent unsafe agent actions before execution",
      },
      {
        title: "Regulatory Transparency",
        description: "Increase transparency and explainability for regulators",
      },
      {
        title: "Secure Autonomous Systems",
        description: "Secure autonomous AI systems in smart cities, defense, and finance",
      },
      {
        title: "Trust Building",
        description: "Build trust in agent-driven decision-making",
      },
    ],
    ctaTitle: "Ensure your AI agents act safely and predictably.",
    ctaSubtitle: "Book an Agentic Security assessment.",
    trustIndicators: [
      { text: "Multi-Agent Secure", delay: 0 },
      { text: "Framework Compatible", delay: 0.5 },
      { text: "Real-Time Monitoring", delay: 1 },
    ],
  };

  return <IndustryPage {...aiAgenticScanningData} />;
}
