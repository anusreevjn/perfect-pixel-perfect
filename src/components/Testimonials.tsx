import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Startup Founder",
    avatar: "SC",
    rating: 5,
    content: "Absolutely blown away by the speed and quality! Got my landing page done in less than 24 hours. The attention to detail was incredible. Highly recommend!",
  },
  {
    name: "Marcus Johnson",
    role: "Small Business Owner",
    avatar: "MJ",
    rating: 5,
    content: "Best investment for my bakery business. The website looks professional and brought in so many new customers. Fast delivery and great communication throughout.",
  },
  {
    name: "Emily Rodriguez",
    role: "Freelance Designer",
    avatar: "ER",
    rating: 5,
    content: "Needed a portfolio site urgently for a job application. They delivered a stunning website in just 2 days. Got the job! Thank you so much!",
  },
  {
    name: "David Kim",
    role: "University Student",
    avatar: "DK",
    rating: 5,
    content: "Super helpful with my web design assignment. The code was clean, well-documented, and exactly what I needed. Saved my semester! 100% confidential too.",
  },
  {
    name: "Lisa Thompson",
    role: "Real Estate Agent",
    avatar: "LT",
    rating: 5,
    content: "My property listing website looks amazing! Modern, fast, and easy to navigate. My clients love it. Great value for money.",
  },
  {
    name: "James Wilson",
    role: "Content Creator",
    avatar: "JW",
    rating: 5,
    content: "The video editing service is top-notch! Quick turnaround, creative transitions, and exactly the style I was looking for. Will definitely use again.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold tracking-[0.2em] uppercase text-primary mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about our services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-700 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
