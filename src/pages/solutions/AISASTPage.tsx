'use client';

import { Code2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import IndustryPage from '../../components/IndustryPage';

export default function AISASTPage() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const aiSASTData = isArabic
    ? {
        title: "أمّن كود الذكاء الاصطناعي من المصدر",
        subtitle:
          "حل شامل لتحليل التعليمات البرمجية الخاصة بالذكاء الاصطناعي واكتشاف الثغرات قبل التنفيذ.",
        badgeText: "تحليل الأمان الثابت للذكاء الاصطناعي (AI SAST)",
        badgeIcon: Code2,
        badgeIconColor: "text-orange-500",
        challengeContent:
          "مع التطور السريع في أنظمة الذكاء الاصطناعي، تظل ممارسات الترميز غير الآمنة وواجهات البرمجة المكشوفة من أبرز المخاطر. اكتشاف هذه المشكلات في المراحل المتأخرة قد يؤدي إلى خروقات أمنية أو فشل في الامتثال.",
        solutionContent:
          "يطبق حل Aynigma AI SAST تحليلًا ثابتًا متقدمًا على الكود المتعلق بالذكاء الاصطناعي — بدءًا من نصوص تقديم النماذج إلى طبقات التنسيق — لاكتشاف ثغرات الحقن، والتبعيات غير الآمنة، ونقاط الضعف المنطقية في مراحل التطوير المبكرة.",
        keyCapabilities: [
          {
            title: "الفحص التلقائي",
            description:
              "فحص تلقائي للكود المكتوب بلغة Python وJavaScript وأطر الذكاء الاصطناعي",
            icon: Code2,
          },
          {
            title: "كشف الأنماط",
            description:
              "اكتشاف الأنماط التي تشير إلى تسرب البيانات ومخاطر الحقن",
            icon: Code2,
          },
          {
            title: "البرمجة الآمنة",
            description:
              "توصيات بالبرمجة الآمنة متوافقة مع إرشادات OWASP ML",
            icon: Code2,
          },
          {
            title: "تكامل DevSecOps",
            description:
              "تكامل كامل مع GitHub وGitLab وخطوط CI/CD",
            icon: Code2,
          },
        ],
        businessOutcomes: [
          {
            title: "الاكتشاف المبكر",
            description: "انقل الأمان إلى اليسار باكتشاف الثغرات مبكرًا",
          },
          {
            title: "خفض التكاليف",
            description: "تقليل تكاليف إصلاح الثغرات بعد الإصدار",
          },
          {
            title: "تطوير أسرع",
            description: "تسريع دورات التطوير الآمن",
          },
          {
            title: "منع الاستغلال",
            description: "تعزيز أنظمة الذكاء الاصطناعي ضد استغلال البيانات والكود",
          },
        ],
        ctaTitle: "ابدأ ببناء ذكاء اصطناعي آمن من اليوم الأول.",
        ctaSubtitle:
          "ادمج حل Aynigma AI SAST في خط تطوير DevSecOps الخاص بك.",
        trustIndicators: [
          { text: "متوافق مع OWASP", delay: 0 },
          { text: "جاهز لـ DevSecOps", delay: 0.5 },
          { text: "اكتشاف مبكر", delay: 1 },
        ],
      }
    : {
        title: "Secure AI Code at the Source",
        subtitle:
          "A complete static analysis solution to detect vulnerabilities in AI code before execution.",
        badgeText: "AI SAST",
        badgeIcon: Code2,
        badgeIconColor: "text-orange-500",
        challengeContent:
          "As AI pipelines evolve rapidly, insecure coding practices and exposed APIs remain a top risk. Detecting these issues late can lead to major breaches or compliance failures.",
        solutionContent:
          "Aynigma's AI SAST solution applies deep static analysis to AI-related code — from model-serving scripts to orchestration layers — detecting injection flaws, unsafe dependencies, and logic vulnerabilities early in development.",
        keyCapabilities: [
          {
            title: "Automated Scanning",
            description:
              "Automated scanning of Python, JavaScript, and AI framework code",
            icon: Code2,
          },
          {
            title: "Pattern Detection",
            description:
              "Pattern-based detection of data leakage and injection risks",
            icon: Code2,
          },
          {
            title: "Secure Coding",
            description:
              "Secure coding recommendations aligned with OWASP ML guidelines",
            icon: Code2,
          },
          {
            title: "DevSecOps Integration",
            description:
              "Integration into GitHub, GitLab, and CI/CD pipelines",
            icon: Code2,
          },
        ],
        businessOutcomes: [
          {
            title: "Early Detection",
            description: "Shift security left with early detection",
          },
          {
            title: "Cost Reduction",
            description:
              "Reduce cost of fixing vulnerabilities post-release",
          },
          {
            title: "Faster Development",
            description: "Accelerate secure development cycles",
          },
          {
            title: "Exploitation Prevention",
            description:
              "Strengthen AI systems against data and code exploitation",
          },
        ],
        ctaTitle: "Build secure AI from day one.",
        ctaSubtitle:
          "Integrate Aynigma's AI SAST into your DevSecOps pipeline.",
        trustIndicators: [
          { text: "OWASP Aligned", delay: 0 },
          { text: "DevSecOps Ready", delay: 0.5 },
          { text: "Early Detection", delay: 1 },
        ],
      };

  return <IndustryPage {...aiSASTData} />;
}
