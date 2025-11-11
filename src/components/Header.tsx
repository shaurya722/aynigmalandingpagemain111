import {
  Menu,
  X,
  ChevronDown,
  Shield,
  Activity,
  Scan,
  Lock,
  FileCheck,
  Code,
  AlertCircle,
  Building2,
  Briefcase,
  Gavel,
  GraduationCap,
  LineChart,
  Users,
  Heart,
  Building,
} from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import logo from '../assets/Frame 3020.svg'
import LanguageSwitcher from './LanguageSwitcher'
import { Link } from 'react-router-dom'
import '../i18n'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const { t } = useTranslation()

  const solutions = [
    { name: 'AI Red Teaming', href: '/ai-red-teaming', icon: Shield },
    {
      name: 'AI Runtime Security',
      href: '/ai-runtime-security',
      icon: Activity,
    },
    { name: 'AI Agentic Scanning', href: '/ai-agentic-scanning', icon: Scan },
    { name: 'MCP Security', href: '/mcp-security', icon: Lock },
    {
      name: 'Compliance Monitoring',
      href: '/compliance-monitoring',
      icon: FileCheck,
    },
    { name: 'AI SCA', href: '/ai-sca', icon: Code },
    { name: 'AI SAST', href: '/ai-sast', icon: AlertCircle },
    {
      name: 'AI Incident Response',
      href: '/ai-incident-response',
      icon: Shield,
    },
  ]

  const industries = [
    {
      name: t('industries.items.healthcare.title'),
      href: '/healthcare',
      icon: LineChart,
    },
    {
      name: t('industries.items.finance.title'),
      href: '/finance',
      icon: LineChart,
    },
    {
      name: t('industries.items.technology.title'),
      href: '/technology',
      icon: Code,
    },
    {
      name: t('industries.items.manufacturing.title'),
      href: '/manufacturing',
      icon: Building2,
    },
    { name: t('industries.items.legal.title'), href: '/legal', icon: Gavel },
    {
      name: t('industries.items.education.title'),
      href: '/education',
      icon: GraduationCap,
    },
    {
      name: t('industries.items.government.title'),
      href: '/government',
      icon: Building,
    },
  ]

  const company = [
    { name: 'About Us', href: '/about-us', icon: Users },
    { name: 'Careers', href: '/careers', icon: Briefcase },
    { name: 'Partners', href: '/partners', icon: Heart },
    { name: 'Privacy Policy', href: '/privacy-policy', icon: Shield },
  ]

  const navigation = [
    {
      name: t('header.navigation.solutions'),
      href: '#solutions',
      hasDropdown: true,
      items: solutions,
    },
    {
      name: t('header.navigation.industries'),
      href: '#industries',
      hasDropdown: true,
      items: industries,
    },
    {
      name: t('header.navigation.company'),
      href: '#company',
      hasDropdown: true,
      items: company,
    },
    { name: t('header.navigation.contact'), href: '#contact' },
  ]

  const handleMenuEnter = (menuName: string) => {
    setActiveMenu(menuName)
  }

  const handleMenuLeave = () => {
    setActiveMenu(null)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--brand-border-weak)] bg-[var(--brand-bg)]/80 backdrop-blur-xl">
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
      <nav className='container mx-auto px-6 py-4 relative'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2 group cursor-pointer'>
            <Link to='/'>
              <img src={logo} alt='logo' width={150} />
            </Link>
          </div>

          <div className='hidden lg:flex items-center gap-8'>
            {navigation.map((item) => (
              <div
                key={item.name}
                onMouseEnter={() => handleMenuEnter(item.name)}
                onMouseLeave={handleMenuLeave}
              >
                <a
                  href={item.href}
                  className='flex items-center gap-1 text-[var(--brand-foreground-soft)] hover:text-[var(--brand-primary)] transition-colors duration-200'
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeMenu === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </a>
                {item.hasDropdown && (
                  <div
                    className={`absolute top-full right-1 pt-2 ${
                      activeMenu === item.name
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible translate-y-2'
                    } transition-all duration-200`}
                    style={{ marginTop: '0.5rem' }}
                  >
                    <div className=''>
                      <div className='bg-[var(--brand-bg)] rounded-xl shadow-2xl border border-[var(--brand-border-weak)] backdrop-blur-xl overflow-hidden'>
                        <div className='relative grid grid-cols-2 gap-6 p-8 sm:gap-8 lg:grid-cols-4'>
                          {item.items.map((subItem, index) => {
                            const IconComponent = subItem.icon
                            return (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className='group p-4 rounded-lg hover:bg-[var(--surface)] transition-all duration-200 transform hover:-translate-y-1'
                                style={{
                                  animation: `menuItemFade 0.3s ease-out forwards`,
                                  animationDelay: `${index * 50}ms`,
                                }}
                              >
                                <div className='flex items-start'>
                                  <div className='flex-shrink-0 p-2 rounded-lg bg-[var(--surface)] group-hover:bg-[var(--brand-primary)]/10 transition-colors duration-200'>
                                    <IconComponent className='h-6 w-6 text-[var(--brand-primary)]' />
                                  </div>
                                  <div className='ml-4'>
                                    <p className='text-base font-medium text-[var(--brand-foreground)]'>
                                      {subItem.name}
                                    </p>
                                    <p className='mt-1 text-sm text-[var(--brand-foreground-soft)]'>
                                      {t('common.learnMoreAbout', {
                                        name: subItem.name.toLowerCase(),
                                      })}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            )
                          })}
                        </div>
                        <div className='bg-[var(--surface)] border-t border-[var(--brand-border-weak)]'>
                          <div className='grid grid-cols-2 gap-6 p-8 sm:gap-8'>
                            <div>
                              <h3 className='text-sm font-medium text-[var(--brand-primary)] uppercase tracking-wider'>
                                {t('header.flyout.latestUpdates')}
                              </h3>
                              <div className='mt-4 space-y-4'>
                                {/* Add your latest updates here */}
                                <a
                                  href='#'
                                  className='block hover:text-[var(--brand-primary)] transition-colors duration-200'
                                >
                                  <p className='text-sm font-medium'>
                                    {t('header.flyout.newFeatureRelease')}
                                  </p>
                                  <p className='mt-1 text-xs text-[var(--brand-foreground-soft)]'>
                                    {t('header.flyout.checkLatestFeatures')}
                                  </p>
                                </a>
                              </div>
                            </div>
                            <div>
                              <h3 className='text-sm font-medium text-[var(--brand-primary)] uppercase tracking-wider'>
                                {t('header.flyout.resources')}
                              </h3>
                              <div className='mt-4 space-y-4'>
                                {/* Add your resources here */}
                                <a
                                  href='#'
                                  className='block hover:text-[var(--brand-primary)] transition-colors duration-200'
                                >
                                  <p className='text-sm font-medium'>
                                    {t('header.flyout.documentation')}
                                  </p>
                                  <p className='mt-1 text-xs text-[var(--brand-foreground-soft)]'>
                                    {t('header.flyout.browseTechnicalGuides')}
                                  </p>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className='hidden lg:flex items-center gap-4'>
            <LanguageSwitcher />
            {/* <button
              onClick={() => {
                const section = document.getElementById('contact')
                if (section) section.scrollIntoView({ behavior: 'smooth' })
              }}
              className='relative px-6 py-2 bg-[var(--brand-primary)] hover:bg-[var(--brand-accent)] text-white font-semibold rounded-lg transition-all duration-300 overflow-hidden group/cta'
            >
              <span className='relative z-10'>
                {t('header.buttons.getStarted')}
              </span>
              <div
                className='absolute inset-0 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300'
                style={{
                  background:
                    'linear-gradient(45deg, var(--brand-primary), var(--brand-accent))',
                }}
              />
            </button> */}
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
          <div className='lg:hidden fixed inset-x-0 top-[72px] bg-[var(--brand-bg)] border-t border-[var(--brand-border-weak)]'>
            <div className='container mx-auto px-6 py-8 space-y-6'>
              {navigation.map((item) => (
                <div key={item.name} className='space-y-4'>
                  <button
                    className='flex items-center justify-between w-full text-left'
                    onClick={() => {
                      if (activeMenu === item.name) {
                        setActiveMenu(null)
                      } else {
                        setActiveMenu(item.name)
                      }
                    }}
                  >
                    <span className='text-lg font-medium'>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`w-5 h-5 text-[var(--brand-foreground-soft)] transition-transform duration-200 ${
                          activeMenu === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>
                  {item.hasDropdown && activeMenu === item.name && (
                    <div className='grid grid-cols-1 gap-4 pl-4'>
                      {item.items.map((subItem) => {
                        const IconComponent = subItem.icon
                        return (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className='flex items-center p-3 rounded-lg hover:bg-[var(--surface)] transition-colors duration-200'
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <div className='flex-shrink-0 p-2 rounded-lg bg-[var(--surface)]'>
                              <IconComponent className='h-5 w-5 text-[var(--brand-primary)]' />
                            </div>
                            <div className='ml-4'>
                              <p className='text-sm font-medium'>
                                {subItem.name}
                              </p>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              ))}
              <div className='flex px-6 py-8 justify-end items-center gap-4'>
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
