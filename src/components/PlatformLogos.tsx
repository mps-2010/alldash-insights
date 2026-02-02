import { motion } from "framer-motion";

const platforms = [
  { name: "YouTube", icon: "📺" },
  { name: "Instagram", icon: "📸" },
  { name: "TikTok", icon: "🎵" },
  { name: "Twitter", icon: "🐦" },
  { name: "LinkedIn", icon: "💼" },
  { name: "Facebook", icon: "👥" },
  { name: "Twitch", icon: "🎮" },
  { name: "Pinterest", icon: "📌" },
  { name: "Threads", icon: "🧵" },
  { name: "Snapchat", icon: "👻" },
];

const PlatformLogos = () => {
  return (
    <section id="platforms" className="py-16 lg:py-24 border-t border-border/50 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
            Works with the platforms you already use
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8 lg:gap-12"
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col items-center gap-2 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary border border-border flex items-center justify-center text-2xl transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/5 group-hover:scale-110">
                {platform.icon}
              </div>
              <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                {platform.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformLogos;
