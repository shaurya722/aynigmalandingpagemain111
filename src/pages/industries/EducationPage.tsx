'use client';

import { GraduationCap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import IndustryPage from '../../components/IndustryPage';

export default function EducationPage() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const educationData = isArabic
    ? {
        title: "أمّن النظام التعليمي الرقمي",
        subtitle:
          "تسارع الجامعات والمدارس في التحول الرقمي — من خلال تبني المعلمين الافتراضيين، ومنصات إدارة التعلم، والاختبارات عبر الإنترنت. هذه الأنظمة تخزن بيانات حساسة للطلاب وهي هدف رئيسي للهجمات أو التلاعب.",
        badgeText: "أمن التعليم",
        badgeIcon: GraduationCap,
        badgeIconColor: "text-teal-400",
        challengeContent:
          "تسارع المدارس والجامعات في التحول الرقمي، بما في ذلك المعلمين الذكيين، ومنصات إدارة التعلم، والاختبارات عبر الإنترنت. تحتوي هذه الأنظمة على بيانات حساسة للطلاب، ما يجعلها أهدافًا رئيسية للتهديدات أو التلاعب.",
        solutionContent:
          "توفر Aynigma حلول الأمان والحماية باستخدام الذكاء الاصطناعي المخصصة للمؤسسات التعليمية. نحن نؤمن منصات إدارة التعلم، والأدوات المدعومة بالذكاء الاصطناعي، والبيانات المؤسسية وفقًا لمعايير حماية البيانات الشخصية (PDPL) ومعايير تكنولوجيا المعلومات الوطنية في التعليم.",
        keyCapabilities: [
          {
            title: "تشفير البيانات",
            description: "تشفير بيانات الطلاب وأعضاء هيئة التدريس والتحكم في الوصول",
            icon: GraduationCap,
          },
          {
            title: "فحص نزاهة الذكاء الاصطناعي",
            description: "فحص نزاهة نظم الذكاء الاصطناعي للأدوات التعليمية",
            icon: GraduationCap,
          },
          {
            title: "مراقبة المنصات",
            description: "مراقبة مستمرة لمنصات إدارة التعلم والتعليم الإلكتروني",
            icon: GraduationCap,
          },
          {
            title: "التدريب على الأمان",
            description: "تدريب على التصيد الاحتيالي وزيادة الوعي للموظفين والطلاب",
            icon: GraduationCap,
          },
        ],
        businessOutcomes: [
          {
            title: "حماية الخصوصية",
            description: "حماية خصوصية الطلاب وسمعة المؤسسات التعليمية",
          },
          {
            title: "استمرارية التعلم",
            description: "ضمان استمرارية التعلم الرقمي والاختبارات",
          },
          {
            title: "الذكاء الاصطناعي المسؤول",
            description: "تشجيع الاستخدام المسؤول للذكاء الاصطناعي في بيئات التعليم",
          },
          {
            title: "الامتثال للمعايير",
            description: "الامتثال لمعايير حماية البيانات ومعايير وزارة التعليم",
          },
        ],
        ctaTitle: "أمّن بيئة التعلم الخاصة بك.",
        ctaSubtitle: "تمكن من التعليم الرقمي مع حماية Aynigma.",
        trustIndicators: [
          { text: "خصوصية الطلاب", delay: 0 },
          { text: "امتثال PDPL", delay: 0.5 },
          { text: "أمن الذكاء الاصطناعي", delay: 1 },
        ],
      }
    : {
        title: "Secure the Digital Education System",
        subtitle:
          "Schools and universities are rapidly digitizing — adopting AI tutors, LMS platforms, and online exams. These systems store sensitive student data and are prime targets for breaches or manipulation.",
        badgeText: "Education Security",
        badgeIcon: GraduationCap,
        badgeIconColor: "text-teal-400",
        challengeContent:
          "Schools and universities are rapidly digitizing — adopting AI tutors, LMS platforms, and online exams. These systems store sensitive student data and are prime targets for breaches or manipulation.",
        solutionContent:
          "Aynigma provides cybersecurity and AI protection tailored for education institutions. We secure learning management systems, AI-powered tools, and institutional data in compliance with PDPL and national education IT standards.",
        keyCapabilities: [
          {
            title: "Data Encryption",
            description: "Student and faculty data encryption and access controls",
            icon: GraduationCap,
          },
          {
            title: "AI Integrity Checks",
            description: "AI system integrity checks for education tools",
            icon: GraduationCap,
          },
          {
            title: "Platform Monitoring",
            description: "Continuous monitoring of LMS and e-learning platforms",
            icon: GraduationCap,
          },
          {
            title: "Security Training",
            description: "Phishing and awareness training for staff and students",
            icon: GraduationCap,
          },
        ],
        businessOutcomes: [
          {
            title: "Privacy Safeguarding",
            description: "Safeguard student privacy and institutional reputation",
          },
          {
            title: "Learning Continuity",
            description: "Maintain continuity of digital learning and exams",
          },
          {
            title: "Responsible AI",
            description: "Promote responsible AI use in academic environments",
          },
          {
            title: "Standards Compliance",
            description: "Meet data protection and Ministry of Education standards",
          },
        ],
        ctaTitle: "Secure your learning ecosystem.",
        ctaSubtitle: "Empower digital education with Aynigma's protection.",
        trustIndicators: [
          { text: "Student Privacy", delay: 0 },
          { text: "PDPL Compliant", delay: 0.5 },
          { text: "AI Secure", delay: 1 },
        ],
      };

  return <IndustryPage {...educationData} />;
}
