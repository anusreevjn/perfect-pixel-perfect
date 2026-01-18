import { ArrowRight, Clock, Shield, Zap } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        {/* Features */}
        <div className="mb-10 flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">24 Hour Delivery</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Zap className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Custom Built</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">100% Confidential</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Ready to Get Your
          <br />
          <span className="text-gradient-cyan">Website Today?</span>
        </h2>

        <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-10">
          Don't wait weeks for your website. Message us now and get your professional,
          custom-coded website delivered in just 24 hours.
        </p>

        {/* CTA Button */}
        <a
          href="https://t.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 rounded-xl bg-primary px-10 py-5 text-lg font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105"
        >
          Message Us on Telegram
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>

        <p className="mt-6 text-sm text-muted-foreground">
          No commitment required • Free consultation
        </p>
      </div>
    </section>
  );
};

export default CTA;
