import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Tech YouTuber • 1.2M Subscribers",
    content: "AllDash helped me understand my audience like never before. My views increased 40% in just 2 months!",
    avatar: "SC",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Startup Founder • @techstartups",
    content: "Finally, one dashboard for everything. The AI insights alone save me 10+ hours weekly. Game changer.",
    avatar: "MJ",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Content Creator • 500K Combined",
    content: "The competitor research feature is incredible. I know exactly what's working in my niche now.",
    avatar: "ER",
    rating: 5,
  },
  {
    name: "Alex Kim",
    role: "Brand Manager • Fortune 500",
    content: "We manage 15 brand accounts. AllDash consolidated everything and our team productivity doubled.",
    avatar: "AK",
    rating: 5,
  },
  {
    name: "Jordan Taylor",
    role: "Podcast Host • Top 100 Tech",
    content: "The best investment for any serious creator. The insights are actionable and the UI is beautiful.",
    avatar: "JT",
    rating: 5,
  },
  {
    name: "Lisa Park",
    role: "Social Media Manager • Agency",
    content: "Our agency now uses AllDash for all clients. It's the industry standard for a reason.",
    avatar: "LP",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm uppercase tracking-wider text-primary font-medium">Testimonials</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
            Loved by <span className="text-gradient-cyan">10,000+ creators</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join the fastest-growing community of content creators, brands, and social media managers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/20 transition-all duration-300 relative group"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-semibold text-primary">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 p-8 rounded-2xl border border-border bg-gradient-card"
        >
          <StatItem value="10K+" label="Active Users" />
          <StatItem value="50M+" label="Posts Analyzed" />
          <StatItem value="4.9/5" label="Average Rating" />
          <StatItem value="99.9%" label="Uptime SLA" />
        </motion.div>
      </div>
    </section>
  );
};

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <p className="text-3xl lg:text-4xl font-display font-bold text-gradient-cyan">{value}</p>
    <p className="text-sm text-muted-foreground mt-1">{label}</p>
  </div>
);

export default Testimonials;
