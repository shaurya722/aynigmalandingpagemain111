import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import logo from '../assets/Frame 3020.svg'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useTranslation()

  const navigation = [
    { name: t('header.navigation.about'), href: '#about' },
    { name: t('header.navigation.solutions'), href: '#solutions' },
    { name: t('header.navigation.whyAynigma'), href: '#why' },
    { name: t('header.navigation.industries'), href: '#industries' },
    { name: t('header.navigation.contact'), href: '#contact' },
  ]

  return (
    <header className='fixed top-0 left-0 right-0 z-50 border-b border-[var(--brand-border-weak)] bg-[var(--brand-bg)]/80 backdrop-blur-xl'>
      <div
        className='absolute inset-0 opacity-30 pointer-events-none'
        style={{
          background:
            'linear-gradient(90deg, transparent, var(--brand-primary), transparent)',
          animation: 'hologram-scan 15s linear infinite',
          height: '1px',
          top: 'auto',
          bottom: 0,
        }}
      />
      <nav className='container mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2 group cursor-pointer'>
            <img src={logo} alt='logo' width={150} />
            {/* <div className="relative">
              <Shield className="w-8 h-8 text-[var(--brand-primary)] relative z-10 group-hover:scale-110 transition-transform duration-300" />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'var(--brand-primary)',
                  filter: 'blur(15px)',
                  animation: 'pulse-glow 2s ease-in-out infinite',
                }}
              />
            </div> */}
            {/* <span className="text-xl font-bold group-hover:text-[var(--brand-accent)] transition-colors duration-300">
              Aynigma Security
            </span> */}
          </div>

          <div className='hidden lg:flex items-center gap-8'>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-[var(--brand-foreground-soft)] hover:text-[var(--brand-primary)] transition-colors duration-200'
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className='hidden lg:flex items-center gap-4'>
            <LanguageSwitcher />
            <button className='px-4 py-2 text-[var(--brand-foreground-soft)] hover:text-white transition-colors relative group/btn'>
              {t('header.buttons.login')}
              <div className='absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--brand-primary)] group-hover/btn:w-full transition-all duration-300' />
            </button>
            <button className='relative px-6 py-2 bg-[var(--brand-primary)] hover:bg-[var(--brand-accent)] text-white font-semibold rounded-lg transition-all duration-300 overflow-hidden group/cta'>
              <span className='relative z-10'>{t('header.buttons.getStarted')}</span>
              <div
                className='absolute inset-0 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300'
                style={{
                  background:
                    'linear-gradient(45deg, var(--brand-primary), var(--brand-accent))',
                }}
              />
            </button>
          </div>

          <button
            className='lg:hidden p-2'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className='w-6 h-6' />
            ) : (
              <Menu className='w-6 h-6' />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className='lg:hidden pt-4 pb-2'>
            <div className='flex flex-col gap-4'>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-[var(--brand-foreground-soft)] hover:text-[var(--brand-primary)] transition-colors duration-200'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className='flex justify-center py-2'>
                <LanguageSwitcher />
              </div>
              <button className='px-4 py-2 text-left text-[var(--brand-foreground-soft)] hover:text-white transition-colors'>
                {t('header.buttons.login')}
              </button>
              <button className='px-6 py-2 bg-[var(--brand-primary)] hover:bg-[var(--brand-accent)] text-white font-semibold rounded-lg transition-all duration-300'>
                {t('header.buttons.getStarted')}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
