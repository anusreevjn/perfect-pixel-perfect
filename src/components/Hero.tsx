import { ArrowRight, Check, Zap, Flame, Clock } from "lucide-react";

const Hero = () => {
  const services = [
    "Assignment Web Design",
    "Personal Portfolio",
    "Landing Page Business",
    "Video Editing",
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 bg-grid overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center">
        {/* Promo Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-6 py-3 border-glow backdrop-blur-sm">
          <Flame className="h-4 w-4 text-primary animate-pulse" />
          <span className="text-sm font-medium text-foreground">
            First 5 Slots Get This Crazy Price!
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight md:text-7xl lg:text-8xl">
          <span className="text-foreground">Website Ready</span>
          <br />
          <span className="text-gradient-cyan glow-cyan italic flex items-center justify-center gap-4">
            <Clock className="h-12 w-12 md:h-16 md:w-16 text-primary" />
            24 Hours
          </span>
        </h1>

        {/* Experience Badge */}
        <div className="mb-8 flex items-center justify-center gap-3 text-primary">
          <Zap className="h-5 w-5" />
          <span className="text-sm font-bold tracking-[0.2em] uppercase">5+ Years of Experience</span>
          <Zap className="h-5 w-5" />
        </div>

        {/* Description */}
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          We help you complete coding assignments or websites for your small business.
          Not a copy-paste template — all hand-coded, clean & custom. Ready fast,
          identity 100% confidential.
        </p>

        {/* CTA Buttons */}
        <div className="mb-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105"
          >
            Message Now
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/50 px-8 py-4 text-base font-semibold text-foreground transition-all hover:bg-secondary hover:border-primary/50"
          >
            View Portfolio
          </a>
        </div>

        {/* Services List */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {services.map((service) => (
            <div key={service} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="h-4 w-4 text-primary" />
              <span>{service}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 section-fade pointer-events-none" />
    </section>
  );
};

export default Hero;
