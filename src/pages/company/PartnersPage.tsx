'use client';

import { Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import CompanyPage from '../../components/CompanyPage';

export default function PartnersPage() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const partnersData = isArabic
    ? {
        title: "بناء نظام بيئي آمن معًا",
        subtitle: "تتعاون Aynigma مع رواد العالم، والمؤسسات السعودية، والمبتكرين لتعزيز مرونة الذكاء الاصطناعي والأمن السيبراني.",
        badgeText: "الشراكات",
        badgeIcon: Heart,
        badgeIconColor: "text-purple-500",
        sections: [
          {
            title: "فلسفة شراكتنا",
            content: "نؤمن بأن تأمين مستقبل الذكاء الاصطناعي يتطلب التعاون. تتعاون Aynigma مع بائعي التكنولوجيا، والمؤسسات البحثية، والهيئات الحكومية لبناء أنظمة دفاع متكاملة ومتوافقة وقابلة للتوسع.\n\nمن خلال الشراكات، نسرع الابتكار، ونعزز القدرات المحلية، ونضمن أن كل حل يتماشى مع الأهداف الرقمية الاستراتيجية للمملكة العربية السعودية."
          },
          {
            title: "شبكة شركائنا تشمل",
            items: [
              "شركاء التكنولوجيا: بائعو السحابة، والذكاء الاصطناعي، والأمن السيبراني الذين يدمجون طبقات الأمان من Aynigma في منصاتهم.",
              "شركاء الحكومة والمؤسسات: التعاون مع الوزارات، والمراكز الوطنية للبيانات، ومشاريع رؤية 2030 لتعزيز المرونة السيبرانية.",
              "شركاء أكاديميون وتدريبيون: برامج مشتركة مع الجامعات السعودية لتطوير الخبرات المحلية في مجال الأمن السيبراني والذكاء الاصطناعي."
            ]
          },
          {
            title: "فوائد الشراكة",
            items: [
              "الوصول إلى أطر الدفاع والامتثال الخاصة بـ Aynigma",
              "فرص التعاون في تطوير الأبحاث والشراكة",
              "الرؤية من خلال المشاركة المشتركة في الفعاليات التقنية الوطنية (مثل LEAP، Black Hat MEA)",
              "مهمة مشتركة لتعزيز قدرات الذكاء الاصطناعي السيادي"
            ]
          }
        ],
        ctaTitle: "تعاون مع Aynigma. تواصل مع فريق الشراكات لدينا عبر partners@aynigma.com لاستكشاف الفرص.",
        ctaSubtitle: "ابنِ مستقبل أمان الذكاء الاصطناعي معًا.",
        trustIndicators: [
          { text: "التحالفات الاستراتيجية", delay: 0 },
          { text: "الابتكار المشترك", delay: 0.5 },
          { text: "الأثر الوطني", delay: 1 },
        ],
      }
    : {
        title: "Building a Secure Ecosystem Together",
        subtitle: "Aynigma collaborates with global leaders, Saudi institutions, and innovators to advance AI and cybersecurity resilience.",
        badgeText: "Partnerships",
        badgeIcon: Heart,
        badgeIconColor: "text-purple-500",
        sections: [
          {
            title: "Our Partnership Philosophy",
            content: "We believe that securing the future of AI requires collaboration. Aynigma partners with technology vendors, research institutions, and government entities to build integrated, compliant, and scalable defense ecosystems.\n\nThrough partnerships, we accelerate innovation, enhance local capacity, and ensure every solution aligns with Saudi Arabia's strategic digital objectives."
          },
          {
            title: "Our Partner Network Includes",
            items: [
              "Technology Partners: Cloud, AI, and cybersecurity vendors integrating Aynigma security layers into their platforms.",
              "Government & Enterprise Partners: Collaborations with ministries, national data centers, and Vision 2030 projects to strengthen cyber resilience.",
              "Academic & Training Partners: Joint programs with Saudi universities to develop cybersecurity and AI expertise locally."
            ]
          },
          {
            title: "Partnership Benefits",
            items: [
              "Access to Aynigma's AI defense and compliance frameworks",
              "Co-development and research collaboration opportunities",
              "Visibility through joint participation in national tech events (e.g., LEAP, Black Hat MEA)",
              "Shared mission to advance sovereign AI security capabilities"
            ]
          }
        ],
        ctaTitle: "Collaborate with Aynigma. Connect with our partnerships team at partners@aynigma.com to explore opportunities.",
        ctaSubtitle: "Build the future of AI security together.",
        trustIndicators: [
          { text: "Strategic Alliances", delay: 0 },
          { text: "Joint Innovation", delay: 0.5 },
          { text: "National Impact", delay: 1 },
        ],
      };

  return <CompanyPage {...partnersData} />;
}
