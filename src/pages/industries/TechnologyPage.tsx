'use client';

import { Code } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import IndustryPage from '../../components/IndustryPage';

export default function TechnologyPage() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const technologyData = isArabic
    ? {
        title: "أمّن مستقبل الابتكار التقني",
        subtitle:
          "حلول شاملة للأمان في قطاع التكنولوجيا، من الحوسبة السحابية إلى الذكاء الاصطناعي، لضمان الامتثال لأنظمة PDPL وNCA.",
        badgeText: "أمن التكنولوجيا",
        badgeIcon: Code,
        badgeIconColor: "text-blue-400",
        challengeContent:
          "يشهد قطاع التكنولوجيا في المملكة العربية السعودية نموًا سريعًا — من مزودي الخدمات السحابية إلى الشركات الناشئة — مما يجعله عرضة لتحديات في تأمين دورات الابتكار السريعة، والاعتماد على البرمجيات مفتوحة المصدر، وتطبيقات الذكاء الاصطناعي، مع الالتزام بلوائح PDPL وNCA.",
        solutionContent:
          "تتعاون Aynigma مع شركات التكنولوجيا لدمج الأمان في مراحل التطوير والنشر وإدارة البيانات. بدءًا من اختبار أمان الذكاء الاصطناعي إلى تحليل الكود الآمن، نضمن أن الابتكار لا يأتي على حساب الحماية.",
        keyCapabilities: [
          {
            title: "سلسلة توريد آمنة",
            description: "تأمين سلسلة توريد البرمجيات باستخدام تكامل SAST وSCA المدعوم بالذكاء الاصطناعي",
            icon: Code,
          },
          {
            title: "أمن DevSecOps",
            description: "أطر عمل أمان للحوسبة السحابية وDevSecOps",
            icon: Code,
          },
          {
            title: "حوكمة البيانات",
            description: "التحكم في دورة حياة النماذج والحوكمة الشاملة للبيانات",
            icon: Code,
          },
          {
            title: "حماية تشغيل الذكاء الاصطناعي",
            description: "حماية أثناء تشغيل النماذج الذكية وأتمتة الامتثال",
            icon: Code,
          },
        ],
        businessOutcomes: [
          {
            title: "ابتكار آمن",
            description: "تسريع الابتكار بأمان بما يتماشى مع أهداف رؤية 2030",
          },
          {
            title: "منع الاستغلال",
            description: "منع استغلال البرمجيات ونماذج الذكاء الاصطناعي",
          },
          {
            title: "تعزيز الثقة",
            description: "بناء الثقة مع المستثمرين والعملاء في المنتجات الرقمية",
          },
          {
            title: "تسريع الوصول إلى السوق",
            description: "تقليل وقت الإطلاق مع الحفاظ على ضمانات الأمان",
          },
        ],
        ctaTitle: "ابتكر بأمان.",
        ctaSubtitle: "ابنِ إنجازك القادم على حماية Aynigma الموثوقة.",
        trustIndicators: [
          { text: "متوافق مع PDPL", delay: 0 },
          { text: "معتمد من NCA", delay: 0.5 },
          { text: "أمن سحابي", delay: 1 },
        ],
      }
    : {
        title: "Secure the Future of Innovation",
        subtitle:
          "Comprehensive cybersecurity for technology — from cloud to AI — ensuring PDPL and NCA compliance.",
        badgeText: "Technology Security",
        badgeIcon: Code,
        badgeIconColor: "text-blue-400",
        challengeContent:
          "Saudi Arabia's booming tech sector — from cloud providers to startups — faces challenges in securing rapid innovation cycles, open-source dependencies, and AI-driven applications while meeting PDPL and NCA requirements.",
        solutionContent:
          "Aynigma partners with technology companies to embed security into their development, deployment, and data pipelines. From AI red teaming to secure code analysis, we ensure innovation never compromises protection.",
        keyCapabilities: [
          {
            title: "Secure Supply Chain",
            description:
              "Secure software supply chain (AI SCA + SAST integration)",
            icon: Code,
          },
          {
            title: "DevSecOps",
            description: "Cloud-native and DevSecOps security frameworks",
            icon: Code,
          },
          {
            title: "Data Governance",
            description: "Model lifecycle and data governance controls",
            icon: Code,
          },
          {
            title: "AI Runtime Defense",
            description: "AI runtime defense and compliance automation",
            icon: Code,
          },
        ],
        businessOutcomes: [
          {
            title: "Secure Innovation",
            description:
              "Accelerate innovation securely in compliance with Vision 2030 goals",
          },
          {
            title: "Exploitation Prevention",
            description: "Prevent software and AI model exploitation",
          },
          {
            title: "Trust Building",
            description:
              "Strengthen investor and customer trust in digital products",
          },
          {
            title: "Time-to-Market",
            description:
              "Reduce time-to-market while maintaining security assurance",
          },
        ],
        ctaTitle: "Innovate securely.",
        ctaSubtitle: "Build your next breakthrough on Aynigma's trusted protection.",
        trustIndicators: [
          { text: "PDPL Compliant", delay: 0 },
          { text: "NCA Certified", delay: 0.5 },
          { text: "Cloud Security", delay: 1 },
        ],
      };

  return <IndustryPage {...technologyData} />;
}
