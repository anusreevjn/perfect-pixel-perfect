import { ArrowRight, Check, Zap, Flame } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-5 md:px-12 lg:px-20">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">404</span>
          <span className="text-xl font-semibold text-foreground">Web Services</span>
        </div>
        <a
          href="https://t.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
        >
          Telegram
        </a>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center px-6 py-12 text-center md:py-20">
        {/* Promo Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-5 py-2.5 border-glow">
          <Flame className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-foreground">
            First 5 Slots Get This Crazy Price!
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl">
          <span className="text-foreground">Website Ready</span>
          <br />
          <span className="text-gradient-cyan glow-cyan italic">$20</span>
          <span className="text-foreground italic"> Only!</span>
        </h1>

        {/* Experience Badge */}
        <div className="mb-8 flex items-center gap-2 text-primary">
          <Zap className="h-4 w-4" />
          <span className="text-sm font-semibold tracking-widest">5+ YEARS OF EXPERIENCE</span>
          <Zap className="h-4 w-4" />
        </div>

        {/* Description */}
        <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          We help you complete coding assignments or websites for your small business.
          <br className="hidden md:block" />
          Not a copy-paste template — all hand-coded, clean & custom. Ready fast
          <br className="hidden md:block" />
          in 1-3 days, identity 100% confidential.
        </p>

        {/* CTA Button */}
        <a
          href="https://t.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="group mb-12 inline-flex items-center gap-3 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
        >
          Message Now
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>

        {/* Services List */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-foreground" />
            <span>Assignment Web Design</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-foreground" />
            <span>Personal Portfolio</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-foreground" />
            <span>Landing Page Business</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-foreground" />
            <span>Video Editing</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
