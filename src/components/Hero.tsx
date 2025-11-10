import { Shield, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
// import AnimatedBackground from './AnimatedBackground';

export default function Hero() {
  const { t } = useTranslation()
  return (
    <section
      id='hero'
      className='relative min-h-[90vh] flex items-center justify-center overflow-hidden'
    >
      {/* <AnimatedBackground /> */}

      <div
        className='absolute inset-0 opacity-30'
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, var(--brand-primary) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, var(--brand-accent) 0%, transparent 50%)`,
          filter: 'blur(80px)',
        }}
      />

      <div
        className='absolute left-0 top-1/4 w-1 h-96 bg-gradient-to-b from-transparent via-[var(--brand-primary)] to-transparent opacity-60'
        style={{
          animation: 'glow-pan 4s ease-in-out infinite',
        }}
      />

      <div
        className='absolute right-0 bottom-1/4 w-1 h-80 bg-gradient-to-b from-transparent via-[var(--brand-accent)] to-transparent opacity-60'
        style={{
          animation: 'glow-pan 6s ease-in-out infinite',
          animationDelay: '2s',
        }}
      />

      <div className='container mx-auto px-6 relative z-10'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--brand-border-weak)] mb-8'>
            <Shield className='w-4 h-4 text-[var(--brand-primary)]' />
            <span className='text-sm text-[var(--brand-foreground-soft)]'>
              {t('hero.badge')}
            </span>
          </div>

          <h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight'>
            {t('hero.title')}
            <br />
            <span className='bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)]'>
              {t('hero.titleHighlight')}{' '}
            </span>
          </h1>

          <p className='text-xl md:text-2xl text-[var(--brand-foreground-soft)] mb-12 max-w-3xl mx-auto leading-relaxed'>
            {t('hero.description')}
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button
              className='group px-8 py-4 bg-[var(--brand-primary)] hover:bg-[var(--brand-accent)] text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2'
              onClick={() => {
                const section = document.getElementById('contact')
                if (section) section.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {t('hero.buttons.getStarted')}
              <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
            </button>
            {/* <button
              onClick={() => {
                const section = document.getElementById('contact')
                if (section) section.scrollIntoView({ behavior: 'smooth' })
              }}
              className='group px-8 py-4 bg-[var(--brand-primary)] hover:bg-[var(--brand-accent)] text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2'
            >
              <span className='flex gap-3 items-center'>
                {t('header.buttons.getStarted')}
                <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </span>
              <div
                className='absolute inset-0 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300'
                style={{
                  background:
                    'linear-gradient(45deg, var(--brand-primary), var(--brand-accent))',
                }}
              />
            </button> */}
            {/* <button className='px-8 py-4 bg-transparent border border-[var(--brand-border)] hover:bg-[var(--surface)] text-white font-semibold rounded-lg transition-all duration-300'>
              {t('hero.buttons.talkToExpert')}
            </button> */}
          </div>
        </div>
      </div>

      {/* <div className='absolute bottom-12 left-1/2 -translate-x-1/2'>
        <div className='w-6 h-10 border-2 border-[var(--brand-border)] rounded-full flex items-start justify-center p-2'>
          <div className='w-1.5 h-3 bg-[var(--brand-primary)] rounded-full animate-bounce' />
        </div>
      </div> */}
    </section>
  )
}
