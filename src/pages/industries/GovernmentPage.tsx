'use client';

import { Building } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import IndustryPage from '../../components/IndustryPage';

export default function GovernmentPage() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const governmentData = isArabic
    ? {
        title: "أمّن البنية التحتية الرقمية للحكومة",
        subtitle:
          "تتطلب المبادرات السعودية للحكومة الإلكترونية والمدن الذكية بنية تحتية رقمية آمنة. تدير الهيئات الحكومية كميات ضخمة من بيانات المواطنين وخدمات عامة مدفوعة بالذكاء الاصطناعي — ما يجعلها أهدافًا جذابة للهجمات من قبل دول أو مجرمي الإنترنت.",
        badgeText: "أمن الحكومة",
        badgeIcon: Building,
        badgeIconColor: "text-slate-400",
        challengeContent:
          "تتطلب مبادرات الحكومة الإلكترونية والمدن الذكية في السعودية بنية تحتية رقمية آمنة. تدير الهيئات الحكومية بيانات ضخمة للمواطنين وخدمات عامة تعتمد على الذكاء الاصطناعي، مما يجعلها أهدافًا رئيسية للهجمات المدعومة من دول أو من قبل المهاجمين السيبرانيين.",
        solutionContent:
          "تتعاون Aynigma مع الهيئات الحكومية لحماية الأنظمة الحيوية، وتأمين البيانات السيادية، وضمان الامتثال لمعايير الأمن السيبراني الأساسية الصادرة عن الهيئة الوطنية للأمن السيبراني (NCA). تقنيات الدفاع المدعومة بالذكاء الاصطناعي لدينا تحمي الأنظمة التقليدية وخدمات الذكاء الاصطناعي الناشئة.",
        keyCapabilities: [
          {
            title: "اختبار الذكاء الاصطناعي",
            description: "اختبارات الذكاء الاصطناعي على مستوى الدولة وتقييم أمان النماذج",
            icon: Building,
          },
          {
            title: "مراقبة الامتثال",
            description: "المراقبة المستمرة للامتثال لمعايير NCA و PDPL",
            icon: Building,
          },
          {
            title: "أمن السحابة",
            description: "حماية السحابة ومراكز البيانات لأنظمة الحكومة",
            icon: Building,
          },
          {
            title: "الطب الشرعي الرقمي",
            description: "استجابة للحوادث والتحقيقات الرقمية لأنظمة القطاع العام",
            icon: Building,
          },
        ],
        businessOutcomes: [
          {
            title: "المرونة الوطنية",
            description: "تعزيز المرونة السيبرانية الوطنية والسيادة على البيانات",
          },
          {
            title: "ثقة المواطنين",
            description: "حماية ثقة المواطنين في أنظمة الحكم الرقمي",
          },
          {
            title: "اعتماد الذكاء الاصطناعي الآمن",
            description: "تمكين اعتماد الذكاء الاصطناعي بأمان عبر الوزارات والهيئات الحكومية",
          },
          {
            title: "التوافق مع رؤية 2030",
            description: "التوافق مع أهداف التحول الرقمي في الحكومة ضمن رؤية 2030",
          },
        ],
        ctaTitle: "دافع عن دولتك الرقمية.",
        ctaSubtitle: "شراكة مع Aynigma لتأمين الابتكار الحكومي.",
        trustIndicators: [
          { text: "متوافق مع NCA", delay: 0 },
          { text: "أمن وطني", delay: 0.5 },
          { text: "سيادة البيانات", delay: 1 },
        ],
      }
    : {
        title: "Fortify Your Digital Government Infrastructure",
        subtitle:
          "Saudi Arabia's e-government and smart city initiatives demand secure digital infrastructure. Government agencies manage massive citizen data and AI-driven public services — attractive targets for state-sponsored and cybercriminal attacks.",
        badgeText: "Government Security",
        badgeIcon: Building,
        badgeIconColor: "text-slate-400",
        challengeContent:
          "Saudi Arabia's e-government and smart city initiatives demand secure digital infrastructure. Government agencies manage massive citizen data and AI-driven public services — attractive targets for state-sponsored and cybercriminal attacks.",
        solutionContent:
          "Aynigma partners with government bodies to protect critical systems, secure sovereign data, and ensure compliance with NCA Essential Cybersecurity Controls. Our AI defense technologies safeguard both traditional IT and emerging AI-driven services.",
        keyCapabilities: [
          {
            title: "AI Red Teaming",
            description: "National-level AI red teaming and model security assessments",
            icon: Building,
          },
          {
            title: "Compliance Monitoring",
            description: "Continuous monitoring for compliance with NCA and PDPL",
            icon: Building,
          },
          {
            title: "Cloud Security",
            description: "Secure cloud and data center protection for government workloads",
            icon: Building,
          },
          {
            title: "Digital Forensics",
            description: "Incident response and digital forensics for public sector systems",
            icon: Building,
          },
        ],
        businessOutcomes: [
          {
            title: "National Resilience",
            description: "Strengthen national cyber resilience and data sovereignty",
          },
          {
            title: "Citizen Trust",
            description: "Protect citizen trust in digital governance systems",
          },
          {
            title: "Secure AI Adoption",
            description: "Enable secure AI adoption across ministries and agencies",
          },
          {
            title: "Vision 2030 Alignment",
            description: "Align with Vision 2030's digital government transformation goals",
          },
        ],
        ctaTitle: "Fortify your digital nation.",
        ctaSubtitle: "Partner with Aynigma to secure government innovation.",
        trustIndicators: [
          { text: "NCA Compliant", delay: 0 },
          { text: "National Security", delay: 0.5 },
          { text: "Data Sovereignty", delay: 1 },
        ],
      };

  return <IndustryPage {...governmentData} />;
}
