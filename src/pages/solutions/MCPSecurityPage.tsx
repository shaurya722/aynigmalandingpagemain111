'use client';

import { Network } from 'lucide-react';
import IndustryPage from '../../components/IndustryPage';
import { useTranslation } from 'react-i18next';

export default function MCPSecurityPage() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const mcpSecurityData = isArabic
    ? {
        title: "الثقة في البنية التحتية وراء التعاون بين أنظمة الذكاء الاصطناعي",
        subtitle: "قم بتأمين طبقة نموذج سياق البروتوكول (MCP) التي تربط أنظمة الذكاء الاصطناعي والبيانات والبشر.",
        badgeText: "أمان MCP",
        badgeIcon: Network,
        badgeIconColor: "text-emerald-400",
        challengeContent:
          "مع اعتماد المؤسسات لبروتوكول MCP لربط النماذج وتدفقات العمل، يستهدف المهاجمون طبقة السياق المشتركة — حيث تتقاطع البيانات الحساسة والموجهات.",
        solutionContent:
          "يوفر حل أمان MCP من Aynigma المصادقة وفرض الحدود ومراقبة الأنشطة عبر عقد MCP. يضمن أن المكونات الموثوقة فقط هي التي يمكنها قراءة أو كتابة أو تعديل بيانات السياق — مما يحمي نسيج تكامل الذكاء الاصطناعي لديك.",
        keyCapabilities: [
          {
            title: "عزل السياق",
            description: "عزل السياق الآمن بين النماذج والأدوات والمستخدمين",
            icon: Network,
          },
          {
            title: "التحكم في الوصول",
            description: "التحكم في الوصول والتحقق من الرموز لعقد MCP",
            icon: Network,
          },
          {
            title: "مراقبة النشاط",
            description: "مراقبة محاولات التلاعب بالسياق في الوقت الفعلي",
            icon: Network,
          },
          {
            title: "تشفير PDPL",
            description: "تشفير وتسجيل كامل للامتثال الكامل لمعيار PDPL",
            icon: Network,
          },
        ],
        businessOutcomes: [
          {
            title: "منع تسرب البيانات",
            description: "منع تسرب البيانات والتلاعب عبر السياقات",
          },
          {
            title: "تعاون آمن",
            description: "الحفاظ على التعاون الآمن بين أنظمة الذكاء الاصطناعي والبشر",
          },
          {
            title: "أمان متعدد الوكلاء",
            description: "تعزيز بنية الأنظمة متعددة الوكلاء للمؤسسات والأنظمة السيادية",
          },
          {
            title: "اعتماد الثقة الصفرية",
            description: "دعم اعتماد مبدأ الثقة الصفرية في أطر تكامل الذكاء الاصطناعي",
          },
        ],
        ctaTitle: "احمِ طبقة السياق الخاصة بالذكاء الاصطناعي.",
        ctaSubtitle: "تعرف على كيفية حماية Aynigma لتكاملات MCP الخاصة بك.",
        trustIndicators: [
          { text: "الثقة الصفرية", delay: 0 },
          { text: "متوافق مع PDPL", delay: 0.5 },
          { text: "سياق آمن", delay: 1 },
        ],
      }
    : {
        title: "Trust the Infrastructure Behind AI Collaboration",
        subtitle: "Secure the Model Context Protocol (MCP) layer that connects AI systems, data, and humans.",
        badgeText: "MCP Security",
        badgeIcon: Network,
        badgeIconColor: "text-emerald-400",
        challengeContent:
          "As organizations adopt MCP to connect AI models and workflows, attackers target the shared context layer — where sensitive data and prompts converge.",
        solutionContent:
          "Aynigma's MCP Security module provides authentication, boundary enforcement, and activity monitoring across MCP nodes. It ensures that only verified components can read, write, or modify context data — protecting your AI integration fabric.",
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
