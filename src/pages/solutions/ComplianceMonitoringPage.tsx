'use client';

import { CheckCircle } from 'lucide-react';
import IndustryPage from '../../components/IndustryPage';
import { useTranslation } from 'react-i18next';

export default function ComplianceMonitoringPage() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const complianceMonitoringData = isArabic
    ? {
        title: "ابقَ متوافقًا. وابقَ في الصدارة.",
        subtitle:
          "قم بأتمتة الامتثال للأمن السيبراني وحماية البيانات باستخدام المراقبة المستمرة المدعومة بالذكاء الاصطناعي.",
        badgeText: "مراقبة الامتثال",
        badgeIcon: CheckCircle,
        badgeIconColor: "text-green-500",
        challengeContent:
          "تواجه المؤسسات السعودية لوائح معقدة ومتداخلة — من الضوابط الأساسية للأمن السيبراني التابعة للهيئة الوطنية للأمن السيبراني إلى متطلبات خصوصية البيانات وفقًا لـ PDPL. تتسبب عملية تتبع الامتثال اليدوي في تكاليف مرتفعة وأخطاء متكررة.",
        solutionContent:
          "يقوم حل Aynigma لمراقبة الامتثال بأتمتة رسم خرائط الضوابط وإعداد التقارير من خلال تحليلات مدعومة بالذكاء الاصطناعي. فهو يراقب أنظمتك باستمرار لاكتشاف الثغرات والسياسات غير المتوافقة ومخاطر كشف البيانات — مما يضمن توافقًا مستمرًا مع الأطر السعودية والعالمية.",
        keyCapabilities: [
          {
            title: "رسم خرائط آلي",
            description: "رسم خرائط تلقائي لضوابط NCA وPDPL وISO 27001",
            icon: CheckCircle,
          },
          {
            title: "جمع الأدلة",
            description: "جمع الأدلة بشكل مستمر وجاهزية للتدقيق",
            icon: CheckCircle,
          },
          {
            title: "اكتشاف الانتهاكات",
            description: "اكتشاف انتهاكات حماية البيانات باستخدام الذكاء الاصطناعي",
            icon: CheckCircle,
          },
          {
            title: "لوحات تحكم الامتثال",
            description: "لوحات تحكم في الوقت الفعلي لفِرَق القيادة",
            icon: CheckCircle,
          },
        ],
        businessOutcomes: [
          {
            title: "تبسيط عمليات التدقيق",
            description: "تبسيط وتسريع عمليات التدقيق الأمني",
          },
          {
            title: "منع العقوبات",
            description: "تجنب الغرامات التنظيمية والأضرار السمعة",
          },
          {
            title: "ثقة المستثمرين",
            description: "إظهار الامتثال المستمر للمستثمرين والمنظمين",
          },
          {
            title: "تركيز استراتيجي",
            description: "توفير وقت الفرق الداخلية للتركيز على الأعمال الاستراتيجية",
          },
        ],
        ctaTitle: "قم بأتمتة رحلة الامتثال الخاصة بك.",
        ctaSubtitle: "تواصل مع Aynigma للحصول على عرض توضيحي لجاهزية الامتثال.",
        trustIndicators: [
          { text: "متوافق مع NCA", delay: 0 },
          { text: "جاهز لـ PDPL", delay: 0.5 },
          { text: "مدعوم بالذكاء الاصطناعي", delay: 1 },
        ],
      }
    : {
        title: "Stay Compliant. Stay Ahead.",
        subtitle:
          "Automate cybersecurity and data protection compliance with AI-powered continuous monitoring.",
        badgeText: "Compliance Monitoring",
        badgeIcon: CheckCircle,
        badgeIconColor: "text-green-500",
        challengeContent:
          "Saudi organizations face complex, overlapping regulations — from NCA's Essential Cybersecurity Controls to PDPL's data privacy mandates. Manual compliance tracking is costly and error-prone.",
        solutionContent:
          "Aynigma Compliance Monitoring automates compliance mapping and reporting through AI-driven analytics. It continuously scans your systems for control gaps, policy violations, and data exposure risks — ensuring continuous alignment with Saudi and global frameworks.",
        keyCapabilities: [
          {
            title: "Automated Mapping",
            description: "Automated NCA, PDPL, and ISO 27001 control mapping",
            icon: CheckCircle,
          },
          {
            title: "Evidence Collection",
            description: "Continuous evidence collection and audit readiness",
            icon: CheckCircle,
          },
          {
            title: "Violation Detection",
            description: "AI-based detection of data protection violations",
            icon: CheckCircle,
          },
          {
            title: "Compliance Dashboards",
            description: "Real-time compliance dashboards for leadership teams",
            icon: CheckCircle,
          },
        ],
        businessOutcomes: [
          {
            title: "Simplified Audits",
            description: "Simplify and accelerate audits",
          },
          {
            title: "Penalty Prevention",
            description: "Avoid regulatory penalties and reputational damage",
          },
          {
            title: "Investor Confidence",
            description:
              "Demonstrate continuous compliance for investors and regulators",
          },
          {
            title: "Strategic Focus",
            description:
              "Free up internal teams for strategic security work",
          },
        ],
        ctaTitle: "Automate your compliance journey.",
        ctaSubtitle:
          "Contact Aynigma for a compliance readiness demo.",
        trustIndicators: [
          { text: "NCA Compliant", delay: 0 },
          { text: "PDPL Ready", delay: 0.5 },
          { text: "AI-Powered", delay: 1 },
        ],
      };

  return <IndustryPage {...complianceMonitoringData} />;
}
