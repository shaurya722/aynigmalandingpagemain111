import { Shield } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='border-t border-[var(--brand-border-weak)] py-12'>
      <div className='container mx-auto px-6'>
        {/* <div className='flex flex-col md:flex-row items-center justify-between gap-6'> */}
        <div className='flex justify-center items-center gap-2'>
          {/* <Shield className='w-6 h-6 text-[var(--brand-primary)]' /> */}
          <span className='text-lg font-bold'>
            Copyright © {year} Aynigma Security
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
