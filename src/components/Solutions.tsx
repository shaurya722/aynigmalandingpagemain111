import { Target, Shield, Network, FileText } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Solutions() {
  const { t } = useTranslation()

  const Solutions = [
    {
      icon: Target,
      title: t('product.features.redTeamFuzzing.title'),
      description: t('product.features.redTeamFuzzing.description'),
      items: t('product.features.redTeamFuzzing.items', { returnObjects: true }) as string[],
    },
    {
      icon: Shield,
      title: t('product.features.runtimeSafety.title'),
      description: t('product.features.runtimeSafety.description'),
      items: t('product.features.runtimeSafety.items', { returnObjects: true }) as string[],
    },
    {
      icon: Network,
      title: t('product.features.agentic.title'),
      description: t('product.features.agentic.description'),
      items: t('product.features.agentic.items', { returnObjects: true }) as string[],
    },
    {
      icon: FileText,
      title: t('product.features.complianceRisk.title'),
      description: t('product.features.complianceRisk.description'),
      items: t('product.features.complianceRisk.items', { returnObjects: true }) as string[],
    },
  ]
  return (
    <section id='solutions' className='py-24 bg-[var(--surface)]/30'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <div className='inline-block px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--brand-border-weak)] mb-6'>
            <span className='text-sm text-[var(--brand-primary)] font-semibold'>
              {t('product.badge')}
            </span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            {t('product.title')}{' '}
            <span className='text-[var(--brand-accent)]'>
              {t('product.titleHighlight')}
            </span>
          </h2>
          <p className='text-sm text-[var(--brand-foreground-soft)] uppercase tracking-wider'>
            {t('product.subtitle')}
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
          {Solutions.map((feature, idx) => (
            <div
              key={idx}
              className='group relative p-8 rounded-2xl bg-[var(--brand-bg)] border border-[var(--brand-border-weak)] hover:border-[var(--brand-accent)] transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--brand-accent)]/20 overflow-hidden'
            >
              <div
                className='absolute top-0 right-0 w-64 h-64 opacity-0 group-hover:opacity-20 transition-opacity duration-500'
                style={{
                  background:
                    'radial-gradient(circle, var(--brand-accent) 0%, transparent 70%)',
                  filter: 'blur(60px)',
                  animation: 'float-3d 10s ease-in-out infinite',
                }}
              />

              <div className='relative'>
                <div className='flex items-start gap-4 mb-4'>
                  <div className='relative p-3 rounded-xl bg-[var(--surface)] border border-[var(--brand-border-weak)] group-hover:border-[var(--brand-primary)] transition-all duration-300 group-hover:scale-110'>
                    <feature.icon className='w-6 h-6 text-[var(--brand-primary)] relative z-10' />
                    <div
                      className='absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                      style={{
                        background: 'var(--brand-primary)',
                        filter: 'blur(15px)',
                      }}
                    />
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-xl font-bold mb-2 group-hover:text-[var(--brand-accent)] transition-colors duration-300'>
                      {feature.title}
                    </h3>
                    <p className='text-[var(--brand-foreground-soft)] text-sm leading-relaxed'>
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div className='h-px bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-accent)] to-transparent opacity-30 my-6' />

                <ul className='space-y-3 mt-6'>
                  {feature.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className='flex items-center gap-3 text-sm group/item hover:translate-x-2 transition-transform duration-300'
                    >
                      <div className='relative'>
                        <div className='w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)] relative z-10' />
                        <div
                          className='absolute inset-0 rounded-full bg-[var(--brand-accent)] opacity-0 group-hover/item:opacity-100 transition-opacity duration-300'
                          style={{
                            filter: 'blur(6px)',
                            transform: 'scale(3)',
                          }}
                        />
                      </div>
                      <span className='text-[var(--brand-foreground-soft)] group-hover/item:text-white transition-colors duration-300'>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='absolute bottom-4 right-4 flex gap-2'>
                {[0, 1, 2].map((i) => (
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
          ))}
        </div>
      </div>
    </section>
  )
}
