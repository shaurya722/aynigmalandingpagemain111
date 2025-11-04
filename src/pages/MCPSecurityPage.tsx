import { Network } from 'lucide-react';
import IndustryPage from '../components/IndustryPage';

export default function MCPSecurityPage() {
  const mcpSecurityData = {
    title: "Trust the Infrastructure Behind AI Collaboration",
    subtitle: "Secure the Model Context Protocol (MCP) layer that connects AI systems, data, and humans.",
    badgeText: "MCP Security",
    badgeIcon: Network,
    badgeIconColor: "text-emerald-400",
    challengeContent: "As organizations adopt MCP to connect AI models and workflows, attackers target the shared context layer — where sensitive data and prompts converge.",
    solutionContent: "Aynigma's MCP Security module provides authentication, boundary enforcement, and activity monitoring across MCP nodes. It ensures that only verified components can read, write, or modify context data — protecting your AI integration fabric.",
    keyCapabilities: [
      {
        title: "Context Isolation",
        description: "Secure context isolation between models, tools, and users",
        icon: Network,
      },
      {
        title: "Access Control",
        description: "Access control and token validation for MCP nodes",
        icon: Network,
      },
      {
        title: "Activity Monitoring",
        description: "Real-time monitoring of context manipulation attempts",
        icon: Network,
      },
      {
        title: "PDPL Encryption",
        description: "Encryption and logging for full compliance with PDPL",
        icon: Network,
      },
    ],
    businessOutcomes: [
      {
        title: "Data Leakage Prevention",
        description: "Prevent cross-context data leakage and tampering",
      },
      {
        title: "Secure Collaboration",
        description: "Maintain secure AI-to-AI and human-AI collaboration",
      },
      {
        title: "Multi-Agent Security",
        description: "Strengthen multi-agent architectures for enterprise and sovereign systems",
      },
      {
        title: "Zero-Trust Adoption",
        description: "Support zero-trust adoption in AI integration frameworks",
      },
    ],
    ctaTitle: "Protect your AI context layer.",
    ctaSubtitle: "Learn how Aynigma MCP Security keeps integrations safe.",
    trustIndicators: [
      { text: "Zero-Trust", delay: 0 },
      { text: "PDPL Compliant", delay: 0.5 },
      { text: "Context Secure", delay: 1 },
    ],
  };

  return <IndustryPage {...mcpSecurityData} />;
}
