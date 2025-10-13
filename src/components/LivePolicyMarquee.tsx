export default function LivePolicyMarquee() {
  // Loop-friendly messages for continuous marquee
  const policies = ['Aligned with NCA, ECC, and PDPL Compliance Standards']

  // join messages with spacing so they flow nicely in a single line
  const track = policies.join('   •   ')

  return (
    <div className='relative overflow-hidden border-y border-[var(--brand-border-weak)] bg-[var(--surface)] py-4'>
      {/* Header Section */}
      <div className='flex items-center gap-2 mb-2 px-6'>
        <div className='w-2 h-2 rounded-full bg-[var(--brand-primary)] animate-pulse' />
        <span className='text-xs uppercase tracking-wider text-[var(--brand-foreground-soft)]'>
          Aynigma Guard • Live Policy Enforcement
        </span>
      </div>

      {/* Marquee track container */}
      <div className='relative flex overflow-hidden'>
        {/* Primary track */}
        <div
          className='flex gap-8 items-center whitespace-nowrap'
          style={{
            animation: 'marquee 18s linear infinite',
            animationPlayState: 'running',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.animationPlayState = 'paused')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.animationPlayState = 'running')
          }
        >
          <span className='text-2xl font-bold text-[var(--brand-foreground-soft)] px-4'>
            {track}
          </span>
        </div>

        {/* Duplicate for seamless loop */}
        <div
          className='flex gap-8 items-center whitespace-nowrap absolute left-full'
          style={{
            animation: 'marquee 18s linear infinite',
            animationPlayState: 'running',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.animationPlayState = 'paused')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.animationPlayState = 'running')
          }
        >
          <span className='text-2xl font-bold text-[var(--brand-foreground-soft)] px-4'>
            {track}
          </span>
        </div>
      </div>

      {/* Inline keyframes */}
      <style>{`
        /* Moves the track left by 100% of its own width */
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        /* Optional: slightly tighter letter-spacing for marquee readability */
        .text-2xl {
          letter-spacing: 0.02em;
        }
      `}</style>
    </div>
  )
}
