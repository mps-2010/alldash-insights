import { motion } from "framer-motion";
import { 
  BarChart3, 
  Brain, 
  Target, 
  Zap, 
  Users, 
  TrendingUp,
  Video,
  MessageSquare,
  Shield
} from "lucide-react";

const features = [
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Unified Analytics",
    description: "All your metrics from every platform in one beautiful dashboard. No more switching between apps.",
    color: "cyan",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI-Powered Insights",
    description: "Get smart recommendations on when to post, what content works, and how to grow faster.",
    color: "purple",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Competitor Research",
    description: "Track your competitors' strategies, viral content, and engagement patterns automatically.",
    color: "blue",
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: "Video Analysis",
    description: "Deep-dive into your video performance with retention graphs, hook analysis, and engagement heatmaps.",
    color: "red",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Content Suggestions",
    description: "Get personalized content ideas based on your niche, trending topics, and audience preferences.",
    color: "green",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Real-Time Sync",
    description: "Data updates every minute via secure API & MCP connections. Always see the latest numbers.",
    color: "yellow",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Growth Tracking",
    description: "Set goals, track progress, and celebrate milestones with detailed growth analytics.",
    color: "cyan",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Audience Insights",
    description: "Understand who your followers are, when they're active, and what they engage with most.",
    color: "pink",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Enterprise Security",
    description: "Bank-level encryption, SOC 2 compliant, and GDPR ready. Your data is always protected.",
    color: "slate",
  },
];

const colorClasses = {
  cyan: "bg-primary/10 text-primary border-primary/20",
  purple: "bg-glow-purple/10 text-glow-purple border-glow-purple/20",
  blue: "bg-glow-blue/10 text-glow-blue border-glow-blue/20",
  red: "bg-red-500/10 text-red-400 border-red-500/20",
  green: "bg-green-500/10 text-green-400 border-green-500/20",
  yellow: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  pink: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  slate: "bg-slate-500/10 text-slate-400 border-slate-500/20",
};

const Features = () => {
  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm uppercase tracking-wider text-primary font-medium">Features</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
            Everything you need to
            <span className="text-gradient-cyan"> dominate social</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Stop juggling multiple tools. AllDash gives you the complete picture with powerful features built for creators who mean business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${colorClasses[feature.color as keyof typeof colorClasses]} transition-transform group-hover:scale-110`}>
                {feature.icon}
              </div>
              <h3 className="mt-4 text-lg font-display font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
