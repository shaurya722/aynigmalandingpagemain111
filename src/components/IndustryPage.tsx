import { useTranslation } from 'react-i18next';
import { LucideIcon } from 'lucide-react';

interface IndustryPageProps {
  title: string;
  subtitle: string;
  badgeText: string;
  badgeIcon: LucideIcon;
  badgeIconColor: string;
  challengeContent: string;
  solutionContent: string;
  keyCapabilities: Array<{
    title: string;
    description: string;
    icon: LucideIcon;
  }>;
  businessOutcomes: Array<{
    title: string;
    description: string;
    additionalInfo?: string;
  }>;
  ctaTitle: string;
  ctaSubtitle: string;
  trustIndicators: Array<{
    text: string;
    delay?: number;
  }>;
}

export default function IndustryPage({
  title,
  subtitle,
  badgeText,
  badgeIcon: BadgeIcon,
  badgeIconColor,
  challengeContent,
  solutionContent,
  keyCapabilities,
  businessOutcomes,
  ctaTitle,
  ctaSubtitle,
  trustIndicators
}: IndustryPageProps) {
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
      <section className="relative py-24 text-center bg-gradient-to-b from-[var(--surface)]/50 to-transparent">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface)]/80 border border-[var(--brand-border-weak)] mb-8 backdrop-blur-sm">
            <BadgeIcon className={`w-4 h-4 ${badgeIconColor}`} />
            <span className="text-sm text-[var(--brand-foreground-soft)] font-semibold">
              {badgeText}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)]">
              {title}
            </span>
          </h1>

          <p className="text-xl text-[var(--brand-foreground-soft)] mb-8 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Challenge & Solution Section */}
      <section className="py-16 bg-[var(--surface)]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Challenge Section */}
            <div className="bg-[var(--brand-bg)] rounded-2xl p-6 border border-[var(--brand-border-weak)]">
              <h2 className="text-2xl font-bold mb-4 text-[var(--brand-primary)]">{t('common.challenge', 'Challenge')}</h2>
              <p className="text-[var(--brand-foreground-soft)] leading-relaxed">
                {challengeContent}
              </p>
            </div>

            {/* Solution Section */}
            <div className="bg-[var(--brand-bg)] rounded-2xl p-6 border border-[var(--brand-border-weak)]">
              <h2 className="text-2xl font-bold mb-4 text-[var(--brand-accent)]">{t('common.solution', 'Solution')}</h2>
              <p className="text-[var(--brand-foreground-soft)] leading-relaxed">
                {solutionContent}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-16 bg-[var(--surface)]">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('common.keyCapabilities', 'Key Capabilities')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {keyCapabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <div key={index} className="group relative p-6 rounded-xl bg-[var(--brand-bg)] border border-[var(--brand-border-weak)] hover:border-[var(--brand-primary)] transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--brand-primary)]/20 overflow-hidden">
                  <div
                    className='absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-20 transition-opacity duration-500'
                    style={{
                      background: 'radial-gradient(circle, var(--brand-primary) 0%, transparent 70%)',
                      filter: 'blur(30px)',
                      animation: `float-3d ${8 + index * 2}s ease-in-out infinite`,
                    }}
                  />
                  <div className="relative flex items-start gap-4">
                    <div className='relative p-3 rounded-lg bg-[var(--surface)] border border-[var(--brand-border-weak)] group-hover:border-[var(--brand-primary)] transition-all duration-300 group-hover:scale-110'>
                      <IconComponent className='w-6 h-6 text-[var(--brand-primary)] relative z-10' />
                      <div
                        className='absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                        style={{
                          background: 'var(--brand-primary)',
                          filter: 'blur(10px)',
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 text-[var(--brand-primary)]">{capability.title}</h3>
                      <p className="text-[var(--brand-foreground-soft)]">{capability.description}</p>
                    </div>
                  </div>
                  <div className='absolute bottom-4 right-4 flex gap-1'>
                    {[0, 1].map((i) => (
                      <div
                        key={i}
                        className='w-1 h-1 rounded-full bg-[var(--brand-primary)] opacity-0 group-hover:opacity-100 transition-all duration-300'
                        style={{
                          animationDelay: `${i * 0.2}s`,
                          animation: 'pulse-glow 2s ease-in-out infinite',
                        }}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Outcomes */}
      <section className="py-16 bg-[var(--brand-bg)]">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('common.businessOutcomes', 'Business Outcomes')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {businessOutcomes.map((outcome, index) => (
              <div key={index} className="group relative bg-[var(--surface)] rounded-xl p-6 border border-[var(--brand-border-weak)] hover:border-[var(--brand-primary)] transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--brand-primary)]/10 overflow-hidden">
                <div
                  className='absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-10 transition-opacity duration-500'
                  style={{
                    background: 'radial-gradient(circle, var(--brand-primary) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                    animation: `float-3d ${12 + index * 2}s ease-in-out infinite`,
                  }}
                />
                <div className="relative">
                  <h3 className="text-lg font-semibold mb-3 text-[var(--brand-primary)]">{outcome.title}</h3>
                  <p className="text-[var(--brand-foreground-soft)]">{outcome.description}</p>
                  {outcome.additionalInfo && (
                    <>
                      <div className="h-px bg-gradient-to-r from-[var(--brand-primary)] via-transparent to-transparent opacity-30 my-4" />
                      <div className="flex items-center gap-2 text-xs text-[var(--brand-foreground-soft)]">
                        <div className="w-2 h-2 rounded-full bg-[var(--brand-primary)] animate-pulse" />
                        {outcome.additionalInfo}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)] text-white overflow-hidden">
        {/* Animated particles in CTA */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 backdrop-blur-sm">
            <BadgeIcon className={`w-4 h-4 text-white`} />
            <span className="text-sm text-white font-semibold">
              {badgeText} Solutions
            </span>
          </div>

          <h2 className="text-4xl font-bold mb-6">
            {ctaTitle}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {ctaSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-white text-[var(--brand-primary)] font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105">
              {t('header.buttons.getStarted', 'Get Started')}
              <BadgeIcon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm">
              {t('hero.buttons.talkToExpert', 'Talk to an Expert')}
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm opacity-80">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: `${indicator.delay || index * 0.5}s` }} />
                {indicator.text}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
