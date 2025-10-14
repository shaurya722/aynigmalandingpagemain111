import { Globe, Building2, CheckCircle, Zap } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function WhyAynigma() {
  const { t } = useTranslation()

  const reasons = [
    {
      icon: Globe,
      title: t('whyAynigma.items.saudiGlobal.title'),
      description: t('whyAynigma.items.saudiGlobal.description'),
    },
    {
      icon: Building2,
      title: t('whyAynigma.items.enterpriseGrade.title'),
      description: t('whyAynigma.items.enterpriseGrade.description'),
    },
    {
      icon: CheckCircle,
      title: t('whyAynigma.items.complianceReady.title'),
      description: t('whyAynigma.items.complianceReady.description'),
    },
    {
      icon: Zap,
      title: t('whyAynigma.items.futureProof.title'),
      description: t('whyAynigma.items.futureProof.description'),
    },
  ]
  return (
    <section id='why' className='py-24 relative overflow-hidden'>
      <div
        className='absolute top-0 right-0 w-96 h-96 opacity-20'
        style={{
          background: `radial-gradient(circle, var(--brand-accent) 0%, transparent 70%)`,
          filter: 'blur(100px)',
        }}
      />

      <div className='container mx-auto px-6 relative z-10'>
        <div className='max-w-3xl mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            {t('whyAynigma.title')}{' '}
            <span className='text-[var(--brand-primary)]'>
              {t('whyAynigma.titleHighlight')}
            </span>
          </h2>
          <p className='text-xl text-[var(--brand-foreground-soft)]'>
            {t('whyAynigma.description')}
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className='p-6 rounded-xl bg-[var(--surface)] border border-[var(--brand-border-weak)] hover:border-[var(--brand-primary)] transition-all duration-300 group'
            >
              <reason.icon className='w-10 h-10 text-[var(--brand-primary)] mb-4 group-hover:scale-110 transition-transform duration-300' />
              <h3 className='text-lg font-bold mb-2'>{reason.title}</h3>
              <p className='text-sm text-[var(--brand-foreground-soft)] leading-relaxed'>
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
