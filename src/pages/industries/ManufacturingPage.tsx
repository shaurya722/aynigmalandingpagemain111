'use client';

import { Building2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import IndustryPage from '../../components/IndustryPage';

export default function ManufacturingPage() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const manufacturingData = isArabic
    ? {
        title: "تأمين المستقبل الصناعي الذكي",
        subtitle:
          "مع تحول القطاع الصناعي في السعودية إلى الصناعة 4.0 والأتمتة الذكية، يواجه القطاع تهديدات تستهدف الشبكات التكنولوجية العملية (OT) وتقنية المعلومات (IT).",
        badgeText: "أمن التصنيع",
        badgeIcon: Building2,
        badgeIconColor: "text-orange-400",
        challengeContent:
          "مع تحول قطاع التصنيع في السعودية نحو الصناعة 4.0، تواجه المصانع تهديدات تستهدف الشبكات التكنولوجية العملية (OT) وتقنية المعلومات (IT). يمكن أن يتسبب تعطيل العمليات في خسائر في الإنتاج ومخاطر أمنية.",
        solutionContent:
          "توفر Aynigma حماية شاملة للتصنيع المتصل — تأمين أجهزة الاستشعار الذكية (IoT)، ونماذج الصيانة التنبؤية باستخدام الذكاء الاصطناعي، وأنظمة التحكم في المصانع. نربط بين الرؤية في الشبكات IT و OT ونحمي نزاهة سلسلة التوريد.",
        keyCapabilities: [
          {
            title: "أمن الأنظمة الصناعية (ICS)",
            description: "أمن الأنظمة الصناعية وأنظمة SCADA",
            icon: Building2,
          },
          {
            title: "سلامة نماذج الذكاء الاصطناعي",
            description: "سلامة نماذج الذكاء الاصطناعي لأنظمة الصيانة التنبؤية وأنظمة مراقبة الجودة",
            icon: Building2,
          },
          {
            title: "كشف التهديدات في الشبكات",
            description: "كشف التهديدات عبر شبكات OT، IoT، و IT",
            icon: Building2,
          },
          {
            title: "تحليل سلسلة التوريد",
            description: "تحليل سلسلة التوريد وبرمجيات الأتمتة الصناعية",
            icon: Building2,
          },
        ],
        businessOutcomes: [
          {
            title: "استمرارية العمليات",
            description: "ضمان استمرارية العمليات وسلامة القوى العاملة",
          },
          {
            title: "منع التوقف",
            description: "منع التوقف المكلف بسبب الفيروسات الخبيثة أو التخريب",
          },
          {
            title: "حماية الملكية الفكرية",
            description: "حماية الملكية الفكرية وبيانات الإنتاج",
          },
          {
            title: "الامتثال للمعايير",
            description: "التوافق مع معايير الأمن السيبراني الوطنية للصناعة",
          },
        ],
        ctaTitle: "دافع عن عمليات التصنيع الذكية.",
        ctaSubtitle: "شراكة مع Aynigma لتحويل صناعتك إلى صناعة 4.0 آمنة.",
        trustIndicators: [
          { text: "حماية ICS", delay: 0 },
          { text: "أمن OT", delay: 0.5 },
          { text: "مراقبة على مدار الساعة", delay: 1 },
        ],
      }
    : {
        title: "Secure the Future of Smart Manufacturing",
        subtitle:
          "As Saudi Arabia's industrial sector embraces Industry 4.0 and smart automation, factories are exposed to threats targeting both IT and OT (Operational Technology) networks.",
        badgeText: "Manufacturing Security",
        badgeIcon: Building2,
        badgeIconColor: "text-orange-400",
        challengeContent:
          "As Saudi Arabia's industrial sector embraces Industry 4.0 and smart automation, factories are exposed to threats targeting both IT and OT (Operational Technology) networks. Disruption can mean production loss and safety hazards.",
        solutionContent:
          "Aynigma provides end-to-end protection for connected manufacturing — securing IoT sensors, AI predictive maintenance models, and factory control systems. We bridge IT-OT visibility and safeguard supply chain integrity.",
        keyCapabilities: [
          {
            title: "ICS Security",
            description: "Industrial control system (ICS) and SCADA security",
            icon: Building2,
          },
          {
            title: "AI Model Integrity",
            description: "AI model integrity for predictive and quality-control systems",
            icon: Building2,
          },
          {
            title: "Network Threat Detection",
            description: "Threat detection across OT, IoT, and IT networks",
            icon: Building2,
          },
          {
            title: "Supply Chain Analysis",
            description: "Supply chain and software composition analysis for industrial automation",
            icon: Building2,
          },
        ],
        businessOutcomes: [
          {
            title: "Operational Continuity",
            description: "Ensure operational continuity and workforce safety",
          },
          {
            title: "Downtime Prevention",
            description: "Prevent costly downtime from ransomware or sabotage",
          },
          {
            title: "IP Protection",
            description: "Safeguard intellectual property and production data",
          },
          {
            title: "Standards Alignment",
            description: "Align with national industrial cybersecurity standards",
          },
        ],
        ctaTitle: "Defend your smart manufacturing operations.",
        ctaSubtitle: "Partner with Aynigma for secure Industry 4.0 transformation.",
        trustIndicators: [
          { text: "ICS Protected", delay: 0 },
          { text: "OT Security", delay: 0.5 },
          { text: "24/7 Monitoring", delay: 1 },
        ],
      };

  return <IndustryPage {...manufacturingData} />;
}
