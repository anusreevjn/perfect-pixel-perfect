import { Globe, Palette, Video, Code, Rocket, Shield } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Landing Pages",
    description: "Convert visitors into customers with stunning, high-converting landing pages.",
  },
  {
    icon: Palette,
    title: "Portfolio Sites",
    description: "Showcase your work beautifully with a custom-designed portfolio website.",
  },
  {
    icon: Code,
    title: "Web Applications",
    description: "Full-stack web applications tailored to your specific business needs.",
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Professional video editing for social media, ads, and content creation.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Get your project delivered in 24 hours with our express service.",
  },
  {
    icon: Shield,
    title: "100% Confidential",
    description: "Your identity and project details remain completely private and secure.",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold tracking-[0.2em] uppercase text-primary mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What We Offer
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            From stunning websites to professional video editing, we've got you covered
            with fast, reliable, and confidential service.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-card border border-border p-8 card-hover gradient-border"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
