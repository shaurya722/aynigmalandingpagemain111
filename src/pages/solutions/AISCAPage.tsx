'use client';

import { Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import IndustryPage from '../../components/IndustryPage';

export default function AISCAPage() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const aiSCAData = isArabic
    ? {
        title: "اعرف ما بداخل بنية الذكاء الاصطناعي الخاصة بك",
        subtitle:
          "افحص بنية الذكاء الاصطناعي لديك واكتشف نقاط الضعف والمخاطر في سلسلة التوريد الخاصة بالنماذج والبيانات.",
        badgeText: "تحليل مكونات الذكاء الاصطناعي (AI SCA)",
        badgeIcon: Search,
        badgeIconColor: "text-purple-500",
        challengeContent:
          "تعتمد أنظمة الذكاء الاصطناعي الحديثة على عدد لا يُحصى من النماذج مفتوحة المصدر ومجموعات البيانات والمكتبات — العديد منها غير موثوق أو قديم. يمكن أن يؤدي رابط واحد ضعيف إلى تعريض منظومة الذكاء الاصطناعي بأكملها للخطر.",
        solutionContent:
          "يقوم حل Aynigma لتحليل مكونات الذكاء الاصطناعي (AI SCA) بفحص بيئتك لاكتشاف الثغرات المعروفة ومخاطر التراخيص ومشكلات السلامة عبر التبعيات وأوزان النماذج والحزم البرمجية. كما يضمن تتبع المصدر الآمن والمراقبة المستمرة لسلسلة توريد برمجيات الذكاء الاصطناعي.",
        keyCapabilities: [
          {
            title: "فحص الثغرات الأمنية",
            description:
              "فحص المكتبات البرمجية الخاصة ببايثون وتعلم الآلة والذكاء الاصطناعي بحثًا عن الثغرات الأمنية",
            icon: Search,
          },
          {
            title: "إنشاء SBOM",
            description:
              "إنشاء والتحقق من قائمة مكونات البرمجيات (SBOM)",
            icon: Search,
          },
          {
            title: "تتبع مخاطر التراخيص",
            description:
              "تتبع المخاطر المرتبطة بالتراخيص والتبعيات",
            icon: Search,
          },
          {
            title: "تكامل مع خطوط CI/CD",
            description:
              "تكامل كامل مع خطوط CI/CD وعمليات نشر النماذج",
            icon: Search,
          },
        ],
        businessOutcomes: [
          {
            title: "منع الاستغلال",
            description:
              "منع استغلال الثغرات في المكونات مفتوحة المصدر",
          },
          {
            title: "شفافية سلسلة التوريد",
            description:
              "زيادة الشفافية وقابلية التدقيق في مكونات الذكاء الاصطناعي",
          },
          {
            title: "معايير الامتثال",
            description:
              "ضمان الامتثال لمعايير سلسلة التوريد الآمنة",
          },
          {
            title: "ثقة الإصدار",
            description:
              "تعزيز الثقة في إصدارات منتجات الذكاء الاصطناعي",
          },
        ],
        ctaTitle: "اكتشف كل المخاطر في بيئة الذكاء الاصطناعي الخاصة بك.",
        ctaSubtitle: "اطلب تقييمًا لحل AI SCA من Aynigma.",
        trustIndicators: [
          { text: "جاهز لـ SBOM", delay: 0 },
          { text: "متكامل مع CI/CD", delay: 0.5 },
          { text: "خالٍ من الثغرات", delay: 1 },
        ],
      }
    : {
        title: "Know What's Inside Your AI Stack",
        subtitle:
          "Scan your AI architecture to uncover vulnerabilities and supply chain risks across models and data.",
        badgeText: "AI SCA",
        badgeIcon: Search,
        badgeIconColor: "text-purple-500",
        challengeContent:
          "Modern AI pipelines rely on countless open-source models, datasets, and dependencies — many unverified or outdated. One weak link can expose your entire AI workflow.",
        solutionContent:
          "Aynigma's AI SCA scans your AI ecosystem for known vulnerabilities, license risks, and integrity issues across dependencies, model weights, and packages. It ensures secure provenance and continuous monitoring of your AI software supply chain.",
        keyCapabilities: [
          {
            title: "Vulnerability Scanning",
            description:
              "Vulnerability scanning of Python, ML, and AI libraries",
            icon: Search,
          },
          {
            title: "SBOM Generation",
            description:
              "SBOM (Software Bill of Materials) generation and validation",
            icon: Search,
          },
          {
            title: "License Risk Tracking",
            description:
              "License risk and dependency tracking",
            icon: Search,
          },
          {
            title: "CI/CD Integration",
            description:
              "Integration with CI/CD and model deployment pipelines",
            icon: Search,
          },
        ],
        businessOutcomes: [
          {
            title: "Vulnerability Prevention",
            description:
              "Prevent exploitation via open-source vulnerabilities",
          },
          {
            title: "Supply Chain Transparency",
            description:
              "Increase transparency and auditability of AI components",
          },
          {
            title: "Compliance Standards",
            description:
              "Maintain compliance with secure supply chain standards",
          },
          {
            title: "Release Confidence",
            description:
              "Enhance confidence in AI product releases",
          },
        ],
        ctaTitle: "Discover every risk in your AI stack.",
        ctaSubtitle: "Request an AI SCA evaluation.",
        trustIndicators: [
          { text: "SBOM Ready", delay: 0 },
          { text: "CI/CD Integrated", delay: 0.5 },
          { text: "Vulnerability Free", delay: 1 },
        ],
      };

  return <IndustryPage {...aiSCAData} />;
}
