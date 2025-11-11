'use client';

import { Gavel } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import IndustryPage from '../../components/IndustryPage';

export default function LegalPage() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const legalData = isArabic
    ? {
        title: "حماية البيانات السرية وسير العمل القانوني المدعوم بالذكاء الاصطناعي",
        subtitle:
          "احمِ سمعة مكتبك وثقة عملائك من خلال حلول متقدمة لحماية البيانات والامتثال في بيئات الذكاء الاصطناعي.",
        badgeText: "أمن القطاع القانوني",
        badgeIcon: Gavel,
        badgeIconColor: "text-purple-400",
        challengeContent:
          "تتعامل مكاتب المحاماة والأقسام القانونية مع بيانات شديدة الحساسية تُعالج بشكل متزايد باستخدام أدوات الذكاء الاصطناعي في البحث، والصياغة، والتحليل. هذه الأنظمة قد تُعرّض البيانات لمخاطر مثل تسرب المعلومات من خلال النماذج، أو الوصول غير المصرح به، أو الاستخدام غير المنظم للذكاء الاصطناعي.",
        solutionContent:
          "تعمل Aynigma على تأمين البيئات القانونية المعززة بالذكاء الاصطناعي عبر التشفير، وتطبيق السياسات الأمنية، والمراقبة في الوقت الفعلي. يضمن محرك الامتثال لدينا الالتزام التام بمتطلبات PDPL وسرية العملاء في جميع التفاعلات.",
        keyCapabilities: [
          {
            title: "التحكم في استخدام الذكاء الاصطناعي",
            description: "مراقبة وضبط استخدام أدوات الذكاء الاصطناعي ومعالجة البيانات القانونية بأمان",
            icon: Gavel,
          },
          {
            title: "مراقبة تسرب البيانات",
            description: "مراقبة مستمرة لاكتشاف تسرب البيانات أو هجمات الحقن النصي (Prompt Injection)",
            icon: Gavel,
          },
          {
            title: "الوصول القائم على الدور",
            description: "تحديد صلاحيات الوصول وتسجيل الأنشطة للقضايا الحساسة",
            icon: Gavel,
          },
          {
            title: "تقارير الامتثال",
            description: "توليد تقارير امتثال تلقائية لأنظمة PDPL وسرية العملاء",
            icon: Gavel,
          },
        ],
        businessOutcomes: [
          {
            title: "منع تسرب البيانات",
            description: "منع تسرب البيانات أو خرق السرية الناتج عن استخدام الذكاء الاصطناعي",
          },
          {
            title: "ثقة العملاء",
            description: "تعزيز ثقة العملاء من خلال إثبات الالتزام بمعايير السرية",
          },
          {
            title: "استخدام آمن للذكاء الاصطناعي",
            description: "تمكين الاستخدام الآمن للذكاء الاصطناعي في البحث والمراجعة القانونية",
          },
          {
            title: "حماية السمعة",
            description: "حماية سمعة المؤسسة والالتزام بالأخلاقيات المهنية",
          },
        ],
        ctaTitle: "احمِ كل تفاعل قانوني.",
        ctaSubtitle: "اكتشف مجموعة حلول أمن الذكاء الاصطناعي القانونية من Aynigma.",
        trustIndicators: [
          { text: "متوافق مع PDPL", delay: 0 },
          { text: "سرية العملاء", delay: 0.5 },
          { text: "ذكاء اصطناعي آمن", delay: 1 },
        ],
      }
    : {
        title: "Safeguarding Confidential Data and AI-Driven Legal Workflows",
        subtitle:
          "Protect your firm's reputation and client trust with advanced AI data protection and compliance controls.",
        badgeText: "Legal Security",
        badgeIcon: Gavel,
        badgeIconColor: "text-purple-400",
        challengeContent:
          "Law firms and legal departments handle highly confidential data increasingly processed by AI tools for research, drafting, and analytics. These systems risk data exposure through prompt leaks, unauthorized access, or ungoverned AI use.",
        solutionContent:
          "Aynigma secures AI-enabled legal environments with data encryption, policy enforcement, and real-time monitoring. Our compliance engine ensures PDPL and confidentiality requirements are upheld in every interaction.",
        keyCapabilities: [
          {
            title: "AI Usage Control",
            description:
              "AI usage control and secure data handling for legal tools",
            icon: Gavel,
          },
          {
            title: "Data Leak Monitoring",
            description:
              "Continuous monitoring for data leaks or prompt injection",
            icon: Gavel,
          },
          {
            title: "Role-Based Access",
            description:
              "Role-based access and activity logging for sensitive cases",
            icon: Gavel,
          },
          {
            title: "Compliance Reporting",
            description:
              "Automated PDPL and client confidentiality compliance reporting",
            icon: Gavel,
          },
        ],
        businessOutcomes: [
          {
            title: "Data Leakage Prevention",
            description:
              "Prevent AI-assisted data leakage or confidentiality breaches",
          },
          {
            title: "Client Trust",
            description:
              "Strengthen client trust through demonstrable compliance",
          },
          {
            title: "Secure AI Use",
            description:
              "Enable secure use of generative AI in legal research and document review",
          },
          {
            title: "Reputation Protection",
            description:
              "Protect reputation and meet professional ethics obligations",
          },
        ],
        ctaTitle: "Protect every legal interaction.",
        ctaSubtitle: "Explore Aynigma's Legal AI Security suite.",
        trustIndicators: [
          { text: "PDPL Compliant", delay: 0 },
          { text: "Client Confidentiality", delay: 0.5 },
          { text: "AI Secure", delay: 1 },
        ],
      };

  return <IndustryPage {...legalData} />;
}
