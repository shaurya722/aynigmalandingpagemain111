export default function LivePolicyMarquee() {
  const track = 'Aligned with NCA, ECC, and PDPL Compliance Standards'

  return (
    <div className='border-y border-[var(--brand-border-weak)] bg-[var(--surface)] py-4 overflow-hidden'>
      {/* <div className='flex items-center gap-2 mb-2 px-6'>
        <div className='w-2 h-2 rounded-full bg-[var(--brand-primary)] animate-pulse' />
        <span className='text-xs uppercase text-[var(--brand-foreground-soft)]'>
          Aynigma Guard • Live Policy Enforcement
        </span>
      </div> */}

      <div className='relative whitespace-nowrap animate-marquee'>
        <span className='text-2xl font-bold text-[var(--brand-foreground-soft)] px-4'>
          {track}
        </span>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  )
}
