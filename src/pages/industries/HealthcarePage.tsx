'use client';

import { Heart, Shield, Activity, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import IndustryPage from '../../components/IndustryPage';

export default function HealthcarePage() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const healthcareData = isArabic
    ? {
        title: "أمّن مستقبل الرعاية الصحية الرقمية",
        subtitle:
          "حلول شاملة لحماية المستشفيات الرقمية والتطبيب عن بعد والذكاء الاصطناعي الطبي وفقًا لمعايير الهيئة الوطنية للأمن السيبراني (NCA) ونظام حماية البيانات الشخصية (PDPL).",
        badgeText: "أمن الرعاية الصحية",
        badgeIcon: Heart,
        badgeIconColor: "text-red-400",
        challengeContent:
          "تعتمد التحولات الصحية في المملكة العربية السعودية ضمن رؤية 2030 على المستشفيات الرقمية، التطبيب عن بعد، والتشخيص بالذكاء الاصطناعي. هذه الابتكارات تفتح مجالات جديدة للهجمات – من الأجهزة الطبية المتصلة إلى النماذج الذكية التي تعالج بيانات المرضى.",
        solutionContent:
          "تحمي منصة Aynigma منظومات الرعاية الصحية من خلال الأمن السيبراني الشامل والذكاء الاصطناعي الآمن. نؤمّن السجلات الصحية الإلكترونية (EHRs) والأجهزة الطبية المتصلة ونظم التشخيص بالذكاء الاصطناعي، مع التوافق الكامل مع معايير PDPL وNCA.",
        keyCapabilities: [
          {
            title: "أمان النماذج الذكية",
            description: "تأمين نماذج الذكاء الاصطناعي الخاصة بالتشخيص والتصوير الطبي",
            icon: Shield,
          },
          {
            title: "الامتثال لـ PDPL",
            description: "حماية بيانات المرضى وتشفيرها بما يتماشى مع PDPL",
            icon: Activity,
          },
          {
            title: "أمن الأجهزة المتصلة",
            description: "إدارة الثغرات في الأجهزة الطبية وإنترنت الأشياء",
            icon: Users,
          },
          {
            title: "مراقبة الامتثال",
            description: "مراقبة مستمرة للامتثال لمعايير وزارة الصحة وNCA",
            icon: Shield,
          },
        ],
        businessOutcomes: [
          {
            title: "سرية المرضى",
            description: "حماية سرية بيانات المرضى والحفاظ على الثقة الطبية",
          },
          {
            title: "استمرارية التشغيل",
            description:
              "منع التوقفات التشغيلية الناتجة عن الهجمات أو برامج الفدية",
          },
          {
            title: "الامتثال التنظيمي",
            description: "الامتثال لمعايير سيادة بيانات الرعاية الصحية",
          },
          {
            title: "الابتكار الآمن بالذكاء الاصطناعي",
            description: "تمكين الابتكار الطبي الآمن عبر تقنيات الذكاء الاصطناعي",
          },
        ],
        ctaTitle: "أمّن بنية الرعاية الصحية الرقمية الخاصة بك.",
        ctaSubtitle: "تواصل مع Aynigma لحماية المرضى والأنظمة الذكية معًا.",
        trustIndicators: [
          { text: "متوافق مع PDPL", delay: 0 },
          { text: "معتمد من NCA", delay: 0.5 },
          { text: "دعم على مدار الساعة", delay: 1 },
        ],
      }
    : {
        title: "Secure the Future of Digital Healthcare",
        subtitle:
          "Comprehensive protection for digital hospitals, telemedicine, and AI diagnostics in compliance with NCA and PDPL standards.",
        badgeText: "Healthcare Security",
        badgeIcon: Heart,
        badgeIconColor: "text-red-400",
        challengeContent:
          "Saudi Arabia's healthcare transformation under Vision 2030 depends on digital hospitals, telemedicine, and AI diagnostics. These advancements also introduce new attack surfaces — from connected devices to AI models processing patient data.",
        solutionContent:
          "Aynigma safeguards healthcare ecosystems through end-to-end AI and cybersecurity. We protect electronic health records (EHRs), medical IoT devices, and AI diagnostic systems with compliance to PDPL and NCA standards.",
        keyCapabilities: [
          {
            title: "AI Model Security",
            description:
              "AI model security for diagnostics and imaging systems",
            icon: Shield,
          },
          {
            title: "PDPL Compliance",
            description:
              "PDPL-compliant patient data protection and encryption",
            icon: Activity,
          },
          {
            title: "IoT Security",
            description:
              "Medical IoT and connected device vulnerability management",
            icon: Users,
          },
          {
            title: "Compliance Monitoring",
            description:
              "Continuous compliance monitoring for MOH and NCA standards",
            icon: Shield,
          },
        ],
        businessOutcomes: [
          {
            title: "Patient Confidentiality",
            description: "Protect patient confidentiality and clinical trust",
          },
          {
            title: "Operational Continuity",
            description:
              "Prevent operational downtime from ransomware or breaches",
          },
          {
            title: "Regulatory Compliance",
            description:
              "Support regulatory compliance for health data sovereignty",
          },
          {
            title: "AI Innovation",
            description:
              "Enable secure AI-driven innovation in medical care",
          },
        ],
        ctaTitle: "Secure your digital health infrastructure.",
        ctaSubtitle:
          "Contact Aynigma to protect patients and AI systems alike.",
        trustIndicators: [
          { text: "PDPL Compliant", delay: 0 },
          { text: "NCA Certified", delay: 0.5 },
          { text: "24/7 Support", delay: 1 },
        ],
      };

  return <IndustryPage {...healthcareData} />;
}
