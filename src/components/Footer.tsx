import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()
  return (
    <footer className='border-t border-[var(--brand-border-weak)] py-12'>
      <div className='container mx-auto px-6'>
        <div className='flex justify-center items-center gap-2'>
          <span className='text-lg font-bold'>
            © {year} {t('footer.copyright')}
          </span>
        </div>

        {/* <div className='text-center md:text-left'>
            <p className='text-sm text-[var(--brand-foreground-soft)]'>
              © 2025 Aynigma Security • Built for NCA & PDPL alignment
            </p>
            <p className='text-xs text-[var(--brand-foreground-soft)] mt-1'>
              English / Arabic
            </p>
          </div>

          <div className='flex items-center gap-4'>
            <button className='text-sm text-[var(--brand-foreground-soft)] hover:text-[var(--brand-primary)] transition-colors'>
              Accept
            </button>
            <button className='text-sm text-[var(--brand-foreground-soft)] hover:text-[var(--brand-primary)] transition-colors'>
              Decline
            </button>
          </div> */}
        {/* </div> */}
        {/* 
        <div className='mt-8 text-center'>
          <p className='text-xs text-[var(--brand-foreground-soft)]'>
            We use essential cookies to improve your experience.
          </p>
        </div> */}
      </div>
    </footer>
  )
}
