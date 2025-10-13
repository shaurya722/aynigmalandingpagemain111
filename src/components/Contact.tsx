import { ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's secure <span className="text-[var(--brand-primary)]">your AI</span>
            </h2>
            <p className="text-xl text-[var(--brand-foreground-soft)]">
              Tell us about your use cases. We'll share a tailored demo.
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-6 py-4 rounded-lg bg-[var(--surface)] border border-[var(--brand-border-weak)] text-white placeholder:text-[var(--brand-foreground-soft)] focus:border-[var(--brand-primary)] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Work Email"
                className="w-full px-6 py-4 rounded-lg bg-[var(--surface)] border border-[var(--brand-border-weak)] text-white placeholder:text-[var(--brand-foreground-soft)] focus:border-[var(--brand-primary)] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Company"
                className="w-full px-6 py-4 rounded-lg bg-[var(--surface)] border border-[var(--brand-border-weak)] text-white placeholder:text-[var(--brand-foreground-soft)] focus:border-[var(--brand-primary)] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <textarea
                placeholder="How can we help?"
                rows={4}
                className="w-full px-6 py-4 rounded-lg bg-[var(--surface)] border border-[var(--brand-border-weak)] text-white placeholder:text-[var(--brand-foreground-soft)] focus:border-[var(--brand-primary)] focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-[var(--brand-primary)] hover:bg-[var(--brand-accent)] text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Request a Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
