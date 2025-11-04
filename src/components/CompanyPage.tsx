import { useTranslation } from 'react-i18next';
import { LucideIcon } from 'lucide-react';

interface CompanyPageProps {
  title: string;
  subtitle: string;
  badgeText: string;
  badgeIcon: LucideIcon;
  badgeIconColor: string;
  sections: Array<{
    title: string;
    content?: string;
    subsections?: Array<{
      title: string;
      content: string;
      items?: string[];
    }>;
    items?: string[];
  }>;
  ctaTitle: string;
  ctaSubtitle: string;
  trustIndicators?: Array<{
    text: string;
    delay?: number;
  }>;
}

export default function CompanyPage({
  title,
  subtitle,
  badgeText,
  badgeIcon: BadgeIcon,
  badgeIconColor,
  sections,
  ctaTitle,
  ctaSubtitle,
  trustIndicators = []
}: CompanyPageProps) {
  const { t } = useTranslation();

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
            <BadgeIcon className={`w-4 h-4 ${badgeIconColor}`} />
            <span className="text-sm text-[var(--brand-foreground-soft)] font-semibold">
              {badgeText}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            <span className="bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)]">
              {title}
            </span>
          </h1>

          <p className="text-lg text-[var(--brand-foreground-soft)] mb-6 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-8">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className={`grid gap-6 ${sections.length <= 4 ? 'md:grid-cols-2' : sections.length <= 6 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'}`}>
            {sections.map((section, index) => (
              <div key={index} className="bg-[var(--surface)] rounded-xl p-6 border border-[var(--brand-border-weak)]">
                <h2 className="text-2xl font-bold mb-4 text-[var(--brand-primary)]">{section.title}</h2>

                {section.content && (
                  <div className="prose prose-base max-w-none text-[var(--brand-foreground-soft)] mb-4">
                    {section.content.split('\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="mb-3 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {section.items && (
                  <ul className="space-y-2 mb-4">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-primary)] mt-2 flex-shrink-0" />
                        <span className="text-[var(--brand-foreground-soft)] leading-relaxed text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.subsections && (
                  <div className="space-y-4">
                    {section.subsections.map((subsection, subIndex) => (
                      <div key={subIndex} className="border-t border-[var(--brand-border-weak)] pt-4">
                        <h3 className="text-lg font-semibold mb-2 text-[var(--brand-accent)]">{subsection.title}</h3>

                        {subsection.content && (
                          <div className="prose prose-base max-w-none text-[var(--brand-foreground-soft)] mb-2">
                            {subsection.content.split('\n').map((paragraph, pIndex) => (
                              <p key={pIndex} className="mb-2 leading-relaxed text-sm">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        )}

                        {subsection.items && (
                          <ul className="space-y-1">
                            {subsection.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-2">
                                <div className="w-1 h-1 rounded-full bg-[var(--brand-accent)] mt-1.5 flex-shrink-0" />
                                <span className="text-[var(--brand-foreground-soft)] leading-relaxed text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
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
            <BadgeIcon className={`w-4 h-4 text-white`} />
            <span className="text-sm text-white font-semibold">
              {badgeText}
            </span>
          </div>

          <h2 className="text-3xl font-bold mb-4">
            {ctaTitle}
          </h2>
          <p className="text-lg mb-6 opacity-90">
            {ctaSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-6 py-3 bg-white text-[var(--brand-primary)] font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105">
              {t('header.buttons.getStarted', 'Get Started')}
              <BadgeIcon className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </button>
            <button className="px-6 py-3 bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm">
              {t('hero.buttons.talkToExpert', 'Talk to an Expert')}
            </button>
          </div>

          {/* Trust indicators */}
          {trustIndicators.length > 0 && (
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm opacity-80">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: `${indicator.delay || index * 0.5}s` }} />
                  {indicator.text}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
