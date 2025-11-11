'use client';

import { TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import IndustryPage from '../../components/IndustryPage';

export default function FinancePage() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const financeData = isArabic
    ? {
        title: "أمّن مستقبل الخدمات المالية الرقمية",
        subtitle:
          "حلول شاملة للأمان المالي مدعومة بالذكاء الاصطناعي لحماية البنوك، والتطبيقات المصرفية، وأنظمة الاحتيال الذكية وفقًا لمعايير SAMA وPDPL.",
        badgeText: "أمن القطاع المالي",
        badgeIcon: TrendingUp,
        badgeIconColor: "text-green-400",
        challengeContent:
          "تواجه البنوك والمؤسسات المالية في المملكة العربية السعودية هجمات متزايدة تستهدف المنصات الرقمية، والخدمات المصرفية عبر الهاتف، وأنظمة اكتشاف الاحتيال بالذكاء الاصطناعي. يضيف الامتثال للوائح البنك المركزي السعودي (SAMA) ونظام حماية البيانات الشخصية (PDPL) تعقيدًا إلى عمليات الأمن السيبراني الحالية.",
        solutionContent:
          "تقدم Aynigma حلولًا مدعومة بالذكاء الاصطناعي للكشف عن التهديدات ومنع الاحتيال وأتمتة الامتثال للمؤسسات المالية. تعمل منصتنا على تعزيز مرونة الأنظمة المصرفية الرقمية، وتأمين أنظمة التداول المعتمدة على الذكاء الاصطناعي، وضمان التعافي السريع من الحوادث الأمنية.",
        keyCapabilities: [
          {
            title: "كشف الاحتيال بالذكاء الاصطناعي",
            description: "اكتشاف الاحتيال والشذوذ في المعاملات باستخدام الذكاء الاصطناعي",
            icon: TrendingUp,
          },
          {
            title: "انعدام الثقة (Zero Trust)",
            description: "حماية شاملة للمنصات المصرفية الرقمية وتطبيقات الجوال",
            icon: TrendingUp,
          },
          {
            title: "خرائط الامتثال",
            description: "مراقبة مستمرة للامتثال لأطر عمل SAMA وNCA",
            icon: TrendingUp,
          },
          {
            title: "الاستجابة للحوادث",
            description: "استجابة وتعافٍ سريع للحوادث السيبرانية المالية",
            icon: TrendingUp,
          },
        ],
        businessOutcomes: [
          {
            title: "منع الاحتيال",
            description: "منع عمليات الاحتيال المالي ومحاولات اختراق الحسابات",
          },
          {
            title: "استمرارية العمليات",
            description: "ضمان استمرار العمليات المصرفية بثقة وموثوقية",
          },
          {
            title: "جاهزية الامتثال",
            description: "تسهيل عمليات الامتثال والاستعداد للتدقيق",
          },
          {
            title: "حماية الابتكار",
            description: "حماية الابتكار الرقمي في مجالات التكنولوجيا المالية والمدفوعات",
          },
        ],
        ctaTitle: "دافع عن أنظمتك المالية بثقة.",
        ctaSubtitle: "تواصل مع خبراء الأمن السيبراني المالي من Aynigma.",
        trustIndicators: [
          { text: "متوافق مع SAMA", delay: 0 },
          { text: "معتمد من PDPL", delay: 0.5 },
          { text: "مراقبة على مدار الساعة", delay: 1 },
        ],
      }
    : {
        title: "Secure the Future of Digital Finance",
        subtitle:
          "AI-powered financial security solutions protecting banks, mobile banking, and fraud systems — aligned with SAMA and PDPL standards.",
        badgeText: "Financial Security",
        badgeIcon: TrendingUp,
        badgeIconColor: "text-green-400",
        challengeContent:
          "Banks and financial institutions in Saudi Arabia face targeted attacks on digital platforms, mobile banking, and AI fraud systems. Compliance with SAMA's cybersecurity and PDPL mandates adds complexity to already strained security operations.",
        solutionContent:
          "Aynigma provides AI-enhanced threat detection, fraud prevention, and compliance automation for financial organizations. Our solutions strengthen digital banking resilience, secure AI-driven trading systems, and support rapid recovery in case of incidents.",
        keyCapabilities: [
          {
            title: "AI Fraud Detection",
            description:
              "AI-driven fraud and anomaly detection for transactions",
            icon: TrendingUp,
          },
          {
            title: "Zero Trust",
            description:
              "Zero-trust protection for digital and mobile banking platforms",
            icon: TrendingUp,
          },
          {
            title: "Compliance Mapping",
            description:
              "Continuous compliance mapping to SAMA and NCA frameworks",
            icon: TrendingUp,
          },
          {
            title: "Incident Response",
            description:
              "Incident response and recovery for financial cyber incidents",
            icon: TrendingUp,
          },
        ],
        businessOutcomes: [
          {
            title: "Fraud Prevention",
            description: "Prevent financial fraud and account takeover attempts",
          },
          {
            title: "Operational Continuity",
            description:
              "Maintain uninterrupted banking operations and customer trust",
          },
          {
            title: "Compliance Readiness",
            description: "Streamline compliance and audit readiness",
          },
          {
            title: "Innovation Protection",
            description:
              "Protect digital innovation in fintech and payment systems",
          },
        ],
        ctaTitle: "Defend your financial systems with confidence.",
        ctaSubtitle:
          "Talk to Aynigma's financial cybersecurity experts.",
        trustIndicators: [
          { text: "SAMA Compliant", delay: 0 },
          { text: "PDPL Certified", delay: 0.5 },
          { text: "24/7 Monitoring", delay: 1 },
        ],
      };

  return <IndustryPage {...financeData} />;
}
