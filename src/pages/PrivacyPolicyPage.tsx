'use client';

import { Shield, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function PrivacyPolicyPage() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const [activeSection, setActiveSection] = useState(0);

  const ui = isArabic
    ? {
        policyTitle: "سياسة الخصوصية",
        heroHeading: "خصوصيتك. التزامنا.",
        heroSubtitle:
          "تلتزم شركة Aynigma Security Solutions Corp بحماية معلوماتك الشخصية وفقًا لقانون حماية البيانات الشخصية السعودي (PDPL) والمعايير العالمية للخصوصية.",
        tocTitle: "جدول المحتويات",
        prev: "السابق ←",
        next: "التالي →",
        of: "من",
        keyPoints: "النقاط الرئيسية:",
        ctaTitle: "خصوصيتك أساس ثقتنا.",
        ctaSubtitle:
          "تعرّف على كيفية حماية Aynigma لبياناتك وخصوصيتك.",
        getStarted: "ابدأ الآن",
        talkToExpert: "تحدث إلى خبير",
        trustIndicators: [
          "متوافق مع PDPL",
          "البيانات محمية",
          "شفافية كاملة",
        ],
      }
    : {
        policyTitle: "Privacy Policy",
        heroHeading: "Your Privacy. Our Commitment.",
        heroSubtitle:
          "Aynigma Security Solutions Corp is committed to protecting your personal information in accordance with the Saudi Personal Data Protection Law (PDPL) and global privacy standards.",
        tocTitle: "Table of Contents",
        prev: "← Previous",
        next: "Next →",
        of: "of",
        keyPoints: "Key Points:",
        ctaTitle: "Your trust is our foundation.",
        ctaSubtitle:
          "Learn more about how Aynigma protects your data and privacy.",
        getStarted: "Get Started",
        talkToExpert: "Talk to an Expert",
        trustIndicators: [
          "PDPL Compliant",
          "Data Protected",
          "Transparent",
        ],
      };

  const sections = isArabic
    ? [
        {
          title: "نظرة عامة على السياسة",
          content:
            "تشرح سياسة الخصوصية هذه كيفية جمعنا واستخدامنا وحماية معلوماتك عندما تقوم بزيارة موقعنا الإلكتروني أو التفاعل مع خدماتنا أو التواصل مع فريقنا.",
        },
        {
          title: "المعلومات التي نقوم بجمعها",
          content: "قد نقوم بجمع:",
          subsections: [
            {
              title: "معلومات الاتصال",
              content:
                "تفاصيل الاتصال (الاسم، البريد الإلكتروني، المؤسسة، رقم الهاتف) عندما تستفسر عن خدماتنا.",
            },
            {
              title: "المعلومات التقنية",
              content:
                "معلومات تقنية مثل عنوان IP، نوع المتصفح، وبيانات الاستخدام لأغراض الأمان والتحليل.",
            },
            {
              title: "المعلومات التجارية",
              content:
                "المعلومات التجارية التي يتم توفيرها طواعية من خلال العروض أو العقود أو طلبات التوظيف.",
            },
          ],
        },
        {
          title: "كيف نستخدم معلوماتك",
          items: [
            "تقديم وتحسين وتخصيص خدماتنا.",
            "الرد على الاستفسارات وطلبات الأعمال.",
            "الامتثال للالتزامات القانونية والعقدية والتنظيمية.",
          ],
        },
        {
          title: "حماية البيانات والأمان",
          content:
            "ننفذ تدابير قوية إدارية وتقنية وبدنية لمنع الوصول غير المصرح به أو الكشف أو سوء استخدام معلوماتك. تلتزم Aynigma بقانون حماية البيانات الشخصية السعودي (PDPL)، وضوابط الأمن السيبراني الأساسية للهيئة الوطنية للأمن السيبراني (NCA)، والقوانين الدولية لحماية البيانات.",
        },
        {
          title: "الاحتفاظ بالبيانات",
          content:
            "نحتفظ بالبيانات الشخصية فقط طالما كان ذلك ضروريًا لتحقيق الغرض من جمعها أو كما يقتضي القانون.",
        },
        {
          title: "حقوقك",
          content:
            "بموجب قانون حماية البيانات الشخصية (PDPL)، لديك الحق في الوصول إلى بياناتك الشخصية وتصحيحها وطلب حذفها. لممارسة هذه الحقوق، يرجى الاتصال بـ privacy@aynigma.com.",
        },
        {
          title: "نقل البيانات الدولي",
          content:
            "لأغراض العمليات العالمية، قد تقوم Aynigma بنقل البيانات بين مكاتبها في السعودية والولايات المتحدة مع ضمانات كافية للحفاظ على الامتثال للخصوصية.",
        },
        {
          title: "تحديثات السياسة",
          content:
            "قد نقوم بتحديث سياسة الخصوصية هذه بشكل دوري. سيكون الإصدار الأخير متاحًا دائمًا على هذه الصفحة.",
        },
        {
          title: "اتصل بنا",
          content:
            "لأي أسئلة حول ممارسات الخصوصية الخاصة بنا، يرجى الاتصال بـ privacy@aynigma.com",
        },
      ]
    : [
        {
          title: "Policy Overview",
          content:
            "This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website, engage our services, or communicate with our team.",
        },
        {
          title: "Information We Collect",
          content: "We may collect:",
          subsections: [
            {
              title: "Contact Information",
              content:
                "Contact details (name, email, organization, phone number) when you inquire about our services.",
            },
            {
              title: "Technical Information",
              content:
                "Technical information such as IP address, browser type, and usage data for security and analytics purposes.",
            },
            {
              title: "Business Information",
              content:
                "Business information provided voluntarily through proposals, contracts, or career applications.",
            },
          ],
        },
        {
          title: "How We Use Your Information",
          items: [
            "Provide, improve, and customize our services.",
            "Respond to inquiries and business requests.",
            "Comply with legal, contractual, and regulatory obligations.",
          ],
        },
        {
          title: "Data Protection and Security",
          content:
            "We implement robust administrative, technical, and physical safeguards to prevent unauthorized access, disclosure, or misuse of your information. Aynigma complies with Saudi PDPL, NCA Essential Cybersecurity Controls, and applicable international data protection laws.",
        },
        {
          title: "Data Retention",
          content:
            "We retain personal data only for as long as necessary to fulfill the purpose of collection or as required by law.",
        },
        {
          title: "Your Rights",
          content:
            "Under PDPL, you have the right to access, correct, and request deletion of your personal data. To exercise these rights, contact privacy@aynigma.com.",
        },
        {
          title: "International Data Transfers",
          content:
            "For global operations, Aynigma may transfer data between our Saudi and U.S. offices with adequate safeguards to maintain privacy compliance.",
        },
        {
          title: "Policy Updates",
          content:
            "We may update this Privacy Policy periodically. The latest version will always be available on this page.",
        },
        {
          title: "Contact Us",
          content:
            "For any questions about our privacy practices, please contact: privacy@aynigma.com",
        },
      ];

  return (
    <div
      className={`min-h-screen bg-[var(--brand-bg)] relative overflow-hidden ${
        isArabic ? 'rtl text-right' : 'ltr text-left'
      }`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {/* Animated Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 20%, var(--brand-primary) 0%, transparent 50%),
                           radial-gradient(circle at 70% 80%, var(--brand-accent) 0%, transparent 50%)`,
          filter: 'blur(100px)',
        }}
      />

      {/* Hero Section */}
      <section className="relative py-16 text-center bg-gradient-to-b from-[var(--surface)]/50 to-transparent">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface)]/80 border border-[var(--brand-border-weak)] mb-6 backdrop-blur-sm">
            <Shield className="w-4 h-4 text-indigo-500" />
            <span className="text-sm text-[var(--brand-foreground-soft)] font-semibold">
              {ui.policyTitle}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            <span className="bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)]">
              {ui.heroHeading}
            </span>
          </h1>

          <p className="text-lg text-[var(--brand-foreground-soft)] mb-6 max-w-3xl mx-auto leading-relaxed">
            {ui.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 bg-[var(--surface)] rounded-xl p-6 border border-[var(--brand-border-weak)]">
                <h3 className="text-lg font-bold mb-4 text-[var(--brand-primary)]">
                  {ui.tocTitle}
                </h3>
                <nav className="space-y-2">
                  {sections.map((section, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSection(index)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 ${
                        activeSection === index
                          ? 'bg-[var(--brand-primary)] text-white'
                          : 'text-[var(--brand-foreground-soft)] hover:bg-[var(--brand-border-weak)]'
                      }`}
                    >
                      <ChevronRight
                        className={`w-4 h-4 flex-shrink-0 transition-transform ${
                          activeSection === index ? 'rotate-90' : ''
                        }`}
                      />
                      <span className="text-sm font-medium">
                        {section.title}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Section Content */}
            <div className="lg:col-span-3">
              <div className="bg-[var(--surface)] rounded-xl p-8 border border-[var(--brand-border-weak)] min-h-[600px]">
                <div className="mb-8 pb-4 border-b border-[var(--brand-border-weak)]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-[var(--brand-primary)] rounded-lg flex items-center justify-center">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-[var(--brand-primary)]">
                      {sections[activeSection].title}
                    </h2>
                  </div>
                </div>

                {/* Section Body */}
                <div className="prose prose-lg max-w-none text-[var(--brand-foreground-soft)]">
                  {sections[activeSection].content && (
                    <p className="mb-4 leading-relaxed">
                      {sections[activeSection].content}
                    </p>
                  )}

                  {sections[activeSection].items && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-4 text-[var(--brand-accent)]">
                        {ui.keyPoints}
                      </h4>
                      <ul className="space-y-3">
                        {sections[activeSection].items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-[var(--brand-primary)] mt-2 flex-shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {sections[activeSection].subsections && (
                    <div className="space-y-6">
                      {sections[activeSection].subsections.map((sub, i) => (
                        <div
                          key={i}
                          className="border-l-4 border-[var(--brand-accent)] pl-6 bg-[var(--brand-bg)]/30 rounded-r-lg p-4"
                        >
                          <h4 className="text-xl font-semibold mb-3 text-[var(--brand-accent)]">
                            {sub.title}
                          </h4>
                          <p className="text-[var(--brand-foreground-soft)] leading-relaxed">
                            {sub.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

         
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)] text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
            <Shield className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold">{ui.policyTitle}</span>
          </div>

          <h2 className="text-3xl font-bold mb-4">{ui.ctaTitle}</h2>
          <p className="text-lg mb-6 opacity-90">{ui.ctaSubtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-6 py-3 bg-white text-[var(--brand-primary)] font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105">
              {ui.getStarted}
              <Shield className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </button>
            <button className="px-6 py-3 bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm">
              {ui.talkToExpert}
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm opacity-80">
            {ui.trustIndicators.map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <div
                  className="w-2 h-2 bg-white rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.5}s` }}
                />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
