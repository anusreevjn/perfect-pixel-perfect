import { ExternalLink } from "lucide-react";
import portfolioEcommerce from "@/assets/portfolio-ecommerce.jpg";
import portfolioAgency from "@/assets/portfolio-agency.jpg";
import portfolioSaas from "@/assets/portfolio-saas.jpg";
import portfolioRestaurant from "@/assets/portfolio-restaurant.jpg";
import portfolioFitness from "@/assets/portfolio-fitness.jpg";
import portfolioRealestate from "@/assets/portfolio-realestate.jpg";

const projects = [
  {
    image: portfolioEcommerce,
    title: "E-Commerce Platform",
    category: "Online Store",
    description: "Modern e-commerce website with product catalog and cart functionality",
  },
  {
    image: portfolioAgency,
    title: "Creative Agency",
    category: "Portfolio",
    description: "Bold and minimal portfolio site for a creative design agency",
  },
  {
    image: portfolioSaas,
    title: "Analytics Dashboard",
    category: "SaaS Application",
    description: "Data visualization dashboard with real-time analytics",
  },
  {
    image: portfolioRestaurant,
    title: "Restaurant Website",
    category: "Food & Beverage",
    description: "Elegant restaurant site with menu and online ordering",
  },
  {
    image: portfolioFitness,
    title: "Fitness App Landing",
    category: "Health & Fitness",
    description: "High-converting landing page for a fitness mobile app",
  },
  {
    image: portfolioRealestate,
    title: "Real Estate Platform",
    category: "Property Listings",
    description: "Luxury real estate website with property search features",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold tracking-[0.2em] uppercase text-primary mb-4">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Portfolio
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Browse through some of our recent projects. Each one crafted with attention
            to detail and delivered on time.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border card-hover"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                    <ExternalLink className="h-4 w-4" />
                    View Project
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {project.category}
                </span>
                <h3 className="mt-2 text-xl font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
