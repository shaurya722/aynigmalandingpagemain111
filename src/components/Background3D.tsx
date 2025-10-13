export default function Background3D() {
  return (
    <div className='fixed inset-0 overflow-hidden pointer-events-none'>
      <div className='absolute inset-0' style={{ perspective: '1000px' }}>
        <div
          className='absolute w-96 h-96 -top-48 -left-48 opacity-30'
          style={{
            background:
              'radial-gradient(circle, var(--brand-primary) 0%, transparent 70%)',
            animation:
              'mesh-morph 20s ease-in-out infinite, float-3d 15s ease-in-out infinite',
            filter: 'blur(60px)',
          }}
        />

        <div
          className='absolute w-[500px] h-[500px] top-1/4 right-0 opacity-25'
          style={{
            background:
              'radial-gradient(circle, var(--brand-accent) 0%, transparent 70%)',
            animation:
              'mesh-morph 25s ease-in-out infinite reverse, float-3d 18s ease-in-out infinite',
            filter: 'blur(80px)',
            animationDelay: '5s',
          }}
        />

        <div
          className='absolute w-80 h-80 bottom-1/4 left-1/4 opacity-20'
          style={{
            background: 'radial-gradient(circle, #00d4ff 0%, transparent 70%)',
            animation:
              'mesh-morph 22s ease-in-out infinite, float-3d 20s ease-in-out infinite',
            filter: 'blur(70px)',
            animationDelay: '10s',
          }}
        />

        {/* <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96'>
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className='absolute top-1/2 left-1/2 w-4 h-4 rounded-full'
              style={{
                background:
                  i === 0
                    ? 'var(--brand-primary)'
                    : i === 1
                    ? 'var(--brand-accent)'
                    : '#00d4ff',
                animation: `orbit ${15 + i * 5}s linear infinite`,
                animationDelay: `${i * 2}s`,
                filter: 'blur(2px)',
                boxShadow: `0 0 20px ${
                  i === 0
                    ? 'var(--brand-primary)'
                    : i === 1
                    ? 'var(--brand-accent)'
                    : '#00d4ff'
                }`,
              }}
            />
          ))}
        </div> */}

        <div className='absolute inset-0 opacity-20'>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className='absolute w-1 h-20 bg-gradient-to-b from-transparent via-[var(--brand-primary)] to-transparent'
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `data-stream ${
                  3 + Math.random() * 4
                }s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.3,
              }}
            />
          ))}
        </div>

        <div
          className='absolute inset-0 opacity-10'
          style={{
            backgroundImage: `
              linear-gradient(var(--brand-border-weak) 1px, transparent 1px),
              linear-gradient(90deg, var(--brand-border-weak) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-slide 20s linear infinite',
            transform: 'perspective(1000px) rotateX(60deg)',
            transformOrigin: 'center center',
          }}
        />

        <div className='absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[var(--brand-bg)] to-transparent z-10' />
        <div className='absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--brand-bg)] to-transparent z-10' />
      </div>

      <div className='absolute inset-0'>
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className='absolute w-1 h-1 rounded-full bg-[var(--brand-primary)]'
            style={
              {
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: 'pulse-glow 3s ease-in-out infinite',
                animationDelay: `${Math.random() * 3}s`,
                boxShadow: '0 0 10px var(--brand-primary)',
                '--tx': `${(Math.random() - 0.5) * 200}px`,
                '--ty': `${(Math.random() - 0.5) * 200}px`,
                '--tz': `${(Math.random() - 0.5) * 100}px`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className='absolute inset-0 opacity-5'>
        <div
          className='w-full h-1 bg-gradient-to-r from-transparent via-[var(--brand-accent)] to-transparent'
          style={{
            animation: 'hologram-scan 8s linear infinite',
          }}
        />
      </div>
    </div>
  )
}
