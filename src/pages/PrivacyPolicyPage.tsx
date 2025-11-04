import { Shield, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      title: "Policy Overview",
      content: "This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website, engage our services, or communicate with our team."
    },
    {
      title: "Information We Collect",
      content: "We may collect:",
      subsections: [
        {
          title: "Contact Information",
          content: "Contact details (name, email, organization, phone number) when you inquire about our services."
        },
        {
          title: "Technical Information",
          content: "Technical information such as IP address, browser type, and usage data for security and analytics purposes."
        },
        {
          title: "Business Information",
          content: "Business information provided voluntarily through proposals, contracts, or career applications."
        }
      ]
    },
    {
      title: "How We Use Your Information",
      items: [
        "Provide, improve, and customize our services.",
        "Respond to inquiries and business requests.",
        "Comply with legal, contractual, and regulatory obligations."
      ]
    },
    {
      title: "Data Protection and Security",
      content: "We implement robust administrative, technical, and physical safeguards to prevent unauthorized access, disclosure, or misuse of your information. Aynigma complies with Saudi PDPL, NCA Essential Cybersecurity Controls, and applicable international data protection laws."
    },
    {
      title: "Data Retention",
      content: "We retain personal data only for as long as necessary to fulfill the purpose of collection or as required by law."
    },
    {
      title: "Your Rights",
      content: "Under PDPL, you have the right to access, correct, and request deletion of your personal data. To exercise these rights, contact privacy@aynigma.com."
    },
    {
      title: "International Data Transfers",
      content: "For global operations, Aynigma may transfer data between our Saudi and U.S. offices with adequate safeguards to maintain privacy compliance."
    },
    {
      title: "Policy Updates",
      content: "We may update this Privacy Policy periodically. The latest version will always be available on this page."
    },
    {
      title: "Contact Us",
      content: "For any questions about our privacy practices, please contact: privacy@aynigma.com"
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--brand-bg)] relative overflow-hidden">
      {/* Animated Background */}
      <div
        className='absolute inset-0 opacity-20'
        style={{
          backgroundImage: `radial-gradient(circle at 30% 20%, var(--brand-primary) 0%, transparent 50%),
                           radial-gradient(circle at 70% 80%, var(--brand-accent) 0%, transparent 50%)`,
          filter: 'blur(100px)',
        }}
      />

      {/* Animated Glowing Lines */}
      <div
        className='absolute left-0 top-1/4 w-1 h-96 bg-gradient-to-b from-transparent via-[var(--brand-primary)] to-transparent opacity-40'
        style={{
          animation: 'glow-pan 6s ease-in-out infinite',
        }}
      />

      <div
        className='absolute right-0 bottom-1/4 w-1 h-80 bg-gradient-to-b from-transparent via-[var(--brand-accent)] to-transparent opacity-40'
        style={{
          animation: 'glow-pan 8s ease-in-out infinite',
          animationDelay: '3s',
        }}
      />

      {/* Hero Section */}
      <section className="relative py-16 text-center bg-gradient-to-b from-[var(--surface)]/50 to-transparent">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface)]/80 border border-[var(--brand-border-weak)] mb-6 backdrop-blur-sm">
            <Shield className="w-4 h-4 text-indigo-500" />
            <span className="text-sm text-[var(--brand-foreground-soft)] font-semibold">
              Privacy Policy
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            <span className="bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)]">
              Your Privacy. Our Commitment.
            </span>
          </h1>

          <p className="text-lg text-[var(--brand-foreground-soft)] mb-6 max-w-3xl mx-auto leading-relaxed">
            Aynigma Security Solutions Corp is committed to protecting your personal information in accordance with the Saudi Personal Data Protection Law (PDPL) and global privacy standards.
          </p>
        </div>
      </section>

      {/* Content Section with Sidebar */}
      <section className="py-8">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 bg-[var(--surface)] rounded-xl p-6 border border-[var(--brand-border-weak)]">
                <h3 className="text-lg font-bold mb-4 text-[var(--brand-primary)]">Table of Contents</h3>
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
                      <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-transform ${
                        activeSection === index ? 'rotate-90' : ''
                      }`} />
                      <span className="text-sm font-medium">{section.title}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-[var(--surface)] rounded-xl p-8 border border-[var(--brand-border-weak)] min-h-[600px]">
                {/* Section Header */}
                <div className="mb-8 pb-4 border-b border-[var(--brand-border-weak)]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-[var(--brand-primary)] rounded-lg flex items-center justify-center">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-[var(--brand-primary)]">
                      {sections[activeSection].title}
                    </h2>
                  </div>
                  <div className="w-16 h-1 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)] rounded-full"></div>
                </div>

                {/* Section Content */}
                <div className="prose prose-lg max-w-none text-[var(--brand-foreground-soft)]">
                  {sections[activeSection].content && (
                    <div className="mb-6">
                      {sections[activeSection].content.split('\n').map((paragraph, pIndex) => (
                        <p key={pIndex} className="mb-4 leading-relaxed text-base">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}

                  {sections[activeSection].items && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-4 text-[var(--brand-accent)]">Key Points:</h4>
                      <ul className="space-y-3">
                        {sections[activeSection].items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-[var(--brand-primary)] mt-2 flex-shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {sections[activeSection].subsections && (
                    <div className="space-y-6">
                      {sections[activeSection].subsections.map((subsection, subIndex) => (
                        <div key={subIndex} className="border-l-4 border-[var(--brand-accent)] pl-6 bg-[var(--brand-bg)]/30 rounded-r-lg p-4">
                          <h4 className="text-xl font-semibold mb-3 text-[var(--brand-accent)]">{subsection.title}</h4>
                          <p className="text-[var(--brand-foreground-soft)] leading-relaxed">
                            {subsection.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Navigation */}
                <div className="mt-12 pt-6 border-t border-[var(--brand-border-weak)] flex justify-between">
                  <button
                    onClick={() => setActiveSection(Math.max(0, activeSection - 1))}
                    disabled={activeSection === 0}
                    className="px-4 py-2 bg-[var(--brand-border-weak)] hover:bg-[var(--brand-primary)] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-all duration-200"
                  >
                    ← Previous
                  </button>
                  <span className="text-sm text-[var(--brand-foreground-soft)] self-center">
                    {activeSection + 1} of {sections.length}
                  </span>
                  <button
                    onClick={() => setActiveSection(Math.min(sections.length - 1, activeSection + 1))}
                    disabled={activeSection === sections.length - 1}
                    className="px-4 py-2 bg-[var(--brand-border-weak)] hover:bg-[var(--brand-primary)] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-all duration-200"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)] text-white overflow-hidden">
        {/* Animated particles in CTA */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
            <Shield className="w-4 h-4 text-white" />
            <span className="text-sm text-white font-semibold">
              Privacy Policy
            </span>
          </div>

          <h2 className="text-3xl font-bold mb-4">
            Your trust is our foundation. Learn more about how Aynigma protects your data and privacy.
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Contact privacy@aynigma.com for any privacy-related inquiries.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-6 py-3 bg-white text-[var(--brand-primary)] font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105">
              Get Started
              <Shield className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </button>
            <button className="px-6 py-3 bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm">
              Talk to an Expert
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              PDPL Compliant
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              Data Protected
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              Transparent
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
