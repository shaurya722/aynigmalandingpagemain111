import { Shield, Eye, Network, FileCheck } from 'lucide-react'

const solutions = [
  {
    icon: Shield,
    title: 'AI Red Teaming',
    description:
      'Stress-test models against jailbreaks, prompt injection, and adversarial attacks.',
    tools: ['Garak', 'PS-Fuzz'],
  },
  {
    icon: Eye,
    title: 'Runtime Protection',
    description:
      'Filter and monitor inputs/outputs in real time to prevent abuse and data leaks.',
    tools: ['LLM Guard'],
  },
  {
    icon: Network,
    title: 'Agentic AI Security',
    description:
      'Safeguard multi-agent workflows from indirect prompt injection and chaining.',
    tools: ['Agentic Radar'],
  },
  {
    icon: FileCheck,
    title: 'Compliance & Governance',
    description:
      'Map AI risks to NCA ECC and PDPL. Automate evidence and reporting.',
    tools: ['NCA', 'ECC', 'PDPL'],
  },
]

export default function Solutions() {
  return (
    <section id='solutions' className='py-24 relative'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            AI Security,{' '}
            <span className='text-[var(--brand-primary)]'>Reimagined</span>
          </h2>
          <p className='text-xl text-[var(--brand-foreground-soft)] max-w-3xl mx-auto'>
            The rise of Generative AI brings enormous opportunity—and
            unprecedented risks. We deliver a complete platform to test,
            monitor, and defend your AI systems.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-6'>
          {solutions.map((solution, idx) => (
            <div
              key={idx}
              className='group relative p-8 rounded-2xl bg-[var(--surface)] border border-[var(--brand-border-weak)] hover:border-[var(--brand-primary)] transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--brand-primary)]/20 hover:-translate-y-2'
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <div
                className='absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                style={{
                  // background: 'radial-gradient(circle at 50% 50%, var(--brand-primary) 0%, transparent 70%)',
                  filter: 'blur(40px)',
                  zIndex: -1,
                }}
              />

              <div className='relative'>
                <div className='flex items-center gap-4 mb-4'>
                  <div className='relative'>
                    <solution.icon className='w-12 h-12 text-[var(--brand-primary)] group-hover:scale-110 transition-transform duration-300 relative z-10' />
                    <div
                      className='absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                      style={{
                        background: 'var(--brand-primary)',
                        filter: 'blur(20px)',
                        animation: 'pulse-glow 2s ease-in-out infinite',
                      }}
                    />
                  </div>
                  <div className='h-px flex-1 bg-gradient-to-r from-[var(--brand-primary)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                </div>

                <h3 className='text-2xl font-bold mb-3 group-hover:text-[var(--brand-accent)] transition-colors duration-300'>
                  {solution.title}
                </h3>
                <p className='text-[var(--brand-foreground-soft)] mb-4 leading-relaxed'>
                  {solution.description}
                </p>
                <div className='flex flex-wrap gap-2'>
                  {solution.tools.map((tool, toolIdx) => (
                    <span
                      key={toolIdx}
                      className='px-3 py-1 text-sm rounded-full bg-[var(--surface-strong)] text-[var(--brand-accent)] border border-[var(--brand-border-weak)] group-hover:border-[var(--brand-primary)] transition-all duration-300 hover:scale-105'
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className='absolute top-4 right-4 w-2 h-2 rounded-full bg-[var(--brand-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse' />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
