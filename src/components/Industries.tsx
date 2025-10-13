import { Building, Landmark, Heart, Fuel, Briefcase } from 'lucide-react';

const industries = [
  {
    icon: Building,
    title: 'Government & Smart Cities',
    description: 'Secure AI at giga-project scale (e.g., NEOM).',
  },
  {
    icon: Landmark,
    title: 'Banking & Finance',
    description: 'Protect AI-powered fintech & customer data.',
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'Safeguard medical AI, PHI, and uptime.',
  },
  {
    icon: Fuel,
    title: 'Oil & Energy',
    description: 'Defend critical OT/IT infrastructure.',
  },
  {
    icon: Briefcase,
    title: 'SMEs',
    description: 'Accessible AI security for growing teams.',
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-[var(--surface)]/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Where we deliver <span className="text-[var(--brand-accent)]">impact</span>
          </h2>
          <p className="text-xl text-[var(--brand-foreground-soft)]">
            Tailored solutions across critical sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-2xl bg-[var(--brand-bg)] border border-[var(--brand-border-weak)] hover:border-[var(--brand-primary)] transition-all duration-300 hover:shadow-xl hover:shadow-[var(--brand-primary)]/5"
            >
              <div className="mb-4">
                <industry.icon className="w-12 h-12 text-[var(--brand-primary)] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-2">{industry.title}</h3>
              <p className="text-[var(--brand-foreground-soft)] text-sm leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
