'use client';

import { Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import CompanyPage from '../../components/CompanyPage';

export default function CareersPage() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const careersData = isArabic
    ? {
        title: "شكل مستقبل أمان الذكاء الاصطناعي",
        subtitle: "انضم إلى فريق يعيد تعريف كيفية حماية الذكاء الاصطناعي والأنظمة الرقمية في العالم.",
        badgeText: "فرص العمل",
        badgeIcon: Briefcase,
        badgeIconColor: "text-green-500",
        sections: [
          {
            title: "لماذا العمل معنا",
            content: "تعد Aynigma Security Solutions المكان الذي يلتقي فيه الابتكار العالمي مع الهدف الوطني. نحن نبني فريقًا من المتخصصين في الأمن السيبراني، والذكاء الاصطناعي، والحوسبة السحابية الذين يكرسون جهودهم لتأمين التقنيات الذكية التي تدعم رؤية المملكة العربية السعودية 2030.\n\nفي Aynigma، ستعمل على مشاريع متطورة تؤثر في مجالات حيوية مثل الرعاية الصحية، والمالية، والحكومة. سواء كنت باحثًا في مجال الهجوم الإلكتروني، أو عالِم بيانات، أو خبيرًا في الامتثال، سيشكل عملك مستقبل الذكاء الاصطناعي الموثوق."
          },
          {
            title: "ما نقدمه",
            items: [
              "ثقافة ديناميكية وموجهة نحو المهمة تركز على الابتكار والأثر",
              "فرص للتعاون مع شركاء عالميين ومؤسسات سعودية",
              "دعم مستمر للتطوير المهني والشهادات",
              "تعويضات تنافسية ومرونة في العمل الهجين"
            ]
          },
          {
            title: "مسارات الوظائف",
            items: [
              "مهندس أمان الذكاء الاصطناعي",
              "محلل تهديدات سيبرانية",
              "أخصائي الامتثال والحوكمة",
              "مهندس أمان السحابة",
              "مدير تطوير الأعمال والشراكات"
            ]
          },
          {
            title: "تطوير المواهب في Aynigma",
            content: "نستثمر في المواهب السعودية. من خلال شراكات مع الجامعات والأكاديميات الوطنية للأمن السيبراني، نقدم الإرشاد للجيل القادم من المتخصصين في الذكاء الاصطناعي والأمن السيبراني، مما يضمن توفير قوة عاملة مهرة ومستدامة للمملكة."
          }
        ],
        ctaTitle: "كن جزءًا من شيء أكبر. استكشف الوظائف الشاغرة أو أرسل سيرتك الذاتية إلى careers@aynigma.com.",
        ctaSubtitle: "شكل مستقبل أمان الذكاء الاصطناعي معنا.",
        trustIndicators: [
          { text: "أثر رؤية 2030", delay: 0 },
          { text: "تطوير المواهب", delay: 0.5 },
          { text: "تركيز على الابتكار", delay: 1 },
        ],
      }
    : {
        title: "Shape the Future of AI Security",
        subtitle: "Join a team redefining how the world protects artificial intelligence and digital systems.",
        badgeText: "Careers",
        badgeIcon: Briefcase,
        badgeIconColor: "text-green-500",
        sections: [
          {
            title: "Why Work With Us",
            content: "Aynigma Security Solutions is where global innovation meets national purpose. We're building a team of passionate cybersecurity, AI, and cloud professionals dedicated to securing intelligent technologies that power Saudi Arabia's Vision 2030.\n\nAt Aynigma, you'll work on cutting-edge projects that matter — defending AI systems used in healthcare, finance, government, and more. Whether you're a red team researcher, data scientist, or compliance expert, your work will directly shape the future of trusted AI."
          },
          {
            title: "What We Offer",
            items: [
              "Dynamic, mission-driven culture focused on innovation and impact",
              "Opportunities to collaborate with global partners and Saudi institutions",
              "Continuous professional development and certification support",
              "Competitive compensation and hybrid work flexibility"
            ]
          },
          {
            title: "Career Paths",
            items: [
              "AI Security Engineer",
              "Cyber Threat Analyst",
              "Compliance & Governance Specialist",
              "Cloud Security Architect",
              "Business Development & Partnerships Manager"
            ]
          },
          {
            title: "Aynigma Talent Development",
            content: "We invest in Saudi talent. Through partnerships with universities and national cybersecurity academies, we mentor the next generation of AI and cyber specialists — ensuring a sustainable, skilled workforce for the Kingdom."
          }
        ],
        ctaTitle: "Be part of something bigger. Explore open roles or send your CV to careers@aynigma.com.",
        ctaSubtitle: "Shape the future of AI security with us.",
        trustIndicators: [
          { text: "Vision 2030 Impact", delay: 0 },
          { text: "Talent Development", delay: 0.5 },
          { text: "Innovation Focus", delay: 1 },
        ],
      };

  return <CompanyPage {...careersData} />;
}
