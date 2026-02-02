import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const HeroBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm"
    >
      <Sparkles className="w-4 h-4 text-primary" />
      <span className="text-sm font-medium text-primary">
        The #1 Social Media Command Center
      </span>
    </motion.div>
  );
};

export default HeroBadge;
