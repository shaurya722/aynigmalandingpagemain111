'use client';

import { AlertTriangle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import IndustryPage from '../../components/IndustryPage';

export default function AIIncidentResponsePage() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const aiIncidentResponseData = isArabic
    ? {
        title: "استجب بسرعة. تعافَ بذكاء.",
        subtitle:
          "حل متكامل للاستجابة للحوادث المتعلقة بالذكاء الاصطناعي — يجمع بين الأتمتة والتحليل الخبير لإدارة الاختراقات في البيئات التقليدية والذكاء الاصطناعي.",
        badgeText: "الاستجابة لحوادث الذكاء الاصطناعي",
        badgeIcon: AlertTriangle,
        badgeIconColor: "text-yellow-500",
        challengeContent:
          "فرق الاستجابة للحوادث التقليدية غير مهيأة للتعامل مع الهجمات الخاصة بالذكاء الاصطناعي — من التلاعب بالنماذج إلى إساءة استخدام الاستدلال. الوقت عامل حاسم، لكن الخبرة نادرة.",
        solutionContent:
          "توفر Aynigma استجابة ذكية للحوادث تجمع بين الأتمتة والتحليل البشري، مما يمكّن المؤسسات من احتواء التهديدات بسرعة وتحليل السبب الجذري وتوليد رؤى جنائية في الوقت الفعلي.",
        keyCapabilities: [
          {
            title: "الكشف التلقائي",
            description: "الكشف التلقائي وفرز الحوادث المتعلقة بالذكاء الاصطناعي",
            icon: AlertTriangle,
          },
          {
            title: "أدلة التحقيق",
            description: "أدلة تحقيق موجهة بالذكاء الاصطناعي لفرق مركز العمليات الأمنية (SOC)",
            icon: AlertTriangle,
          },
          {
            title: "التحليل الجنائي",
            description: "تحليل جنائي لسجلات النماذج وبيانات الاستدلال",
            icon: AlertTriangle,
          },
          {
            title: "تقارير التعافي",
            description: "تقارير السبب الجذري والتعافي متوافقة مع معايير NCA",
            icon: AlertTriangle,
          },
        ],
        businessOutcomes: [
          {
            title: "الاحتواء السريع",
            description: "احتواء سريع للاختراقات وتلف النماذج",
          },
          {
            title: "تقليل التوقف",
            description: "تقليل وقت التعطل وفقدان البيانات",
          },
          {
            title: "الامتثال التنظيمي",
            description: "تحسين التقارير التنظيمية والاستعداد للتدقيق",
          },
          {
            title: "التعلم المستمر",
            description: "تعزيز المرونة من خلال التعلم المستمر بعد الحوادث",
          },
        ],
        ctaTitle: "كن مستعدًا قبل أن يحدث.",
        ctaSubtitle: "تواصل مع فريق الاستجابة للحوادث لدى Aynigma اليوم.",
        trustIndicators: [
          { text: "متوافق مع NCA", delay: 0 },
          { text: "مدعوم بالذكاء الاصطناعي", delay: 0.5 },
          { text: "استجابة على مدار الساعة", delay: 1 },
        ],
      }
    : {
        title: "Respond Faster. Recover Smarter.",
        subtitle:
          "A comprehensive AI Incident Response solution combining automation and expert analysis to manage breaches across traditional and AI-driven environments.",
        badgeText: "AI Incident Response",
        badgeIcon: AlertTriangle,
        badgeIconColor: "text-yellow-500",
        challengeContent:
          "Traditional incident response teams are unprepared for AI-specific attacks — from model manipulation to inference abuse. Response times are critical, but expertise is scarce.",
        solutionContent:
          "Aynigma's AI Incident Response combines automation with expert analysis to manage breaches in both traditional and AI-driven environments. Our platform leverages AI to correlate alerts, automate containment, and generate forensic insights in real time.",
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
            description:
              "Root-cause and recovery reports aligned with NCA standards",
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
            description:
              "Strengthened resilience through continuous post-incident learning",
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
