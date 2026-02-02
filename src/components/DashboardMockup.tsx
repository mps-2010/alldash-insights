import { motion } from "framer-motion";
import { TrendingUp, Users, Eye, Heart, ArrowUpRight, Youtube, Instagram, Twitter } from "lucide-react";

const DashboardMockup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative w-full max-w-5xl mx-auto mt-12 lg:mt-16"
    >
      {/* Glow effect behind dashboard */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-primary/5 to-transparent blur-3xl -z-10 scale-110" />
      
      {/* Main Dashboard Container */}
      <div className="relative rounded-2xl border-gradient bg-gradient-card p-1 glow-subtle">
        <div className="rounded-xl bg-card overflow-hidden">
          {/* Browser Chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/30">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="px-4 py-1 rounded-md bg-muted/50 text-xs text-muted-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Live Dashboard
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-display font-semibold text-foreground">Dashboard Overview</h3>
                <p className="text-sm text-muted-foreground">All your social metrics in one place</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Live Sync
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                icon={<Eye className="w-4 h-4" />}
                label="Total Views"
                value="2.4M"
                change="+24.5%"
                color="cyan"
              />
              <StatCard
                icon={<Users className="w-4 h-4" />}
                label="Followers"
                value="847K"
                change="+12.3%"
                color="blue"
              />
              <StatCard
                icon={<Heart className="w-4 h-4" />}
                label="Engagement"
                value="5.8%"
                change="+8.7%"
                color="purple"
              />
              <StatCard
                icon={<TrendingUp className="w-4 h-4" />}
                label="Growth Rate"
                value="+18.2%"
                change="+5.1%"
                color="green"
              />
            </div>

            {/* Platform Cards Row */}
            <div className="grid grid-cols-3 gap-4">
              <PlatformCard
                icon={<Youtube className="w-5 h-5" />}
                name="YouTube"
                followers="425K"
                growth="+2.4K"
                color="red"
              />
              <PlatformCard
                icon={<Instagram className="w-5 h-5" />}
                name="Instagram"
                followers="312K"
                growth="+1.8K"
                color="pink"
              />
              <PlatformCard
                icon={<Twitter className="w-5 h-5" />}
                name="Twitter"
                followers="110K"
                growth="+892"
                color="sky"
              />
            </div>

            {/* Mini Chart Area */}
            <div className="relative h-24 rounded-lg bg-secondary/30 overflow-hidden">
              <div className="absolute inset-0 flex items-end justify-around px-4 pb-4">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                  <div
                    key={i}
                    className="w-2 rounded-t bg-gradient-to-t from-primary to-glow-blue"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="absolute top-3 left-4 text-xs text-muted-foreground">Weekly Performance</div>
              <div className="absolute top-3 right-4 text-xs text-primary font-medium">+24.5%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Cards */}
      <FloatingCard
        className="-left-12 top-20 animate-float"
        delay={0}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-green-500" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">This week</p>
            <p className="text-sm font-semibold text-foreground">+24.5% Growth</p>
          </div>
        </div>
      </FloatingCard>

      <FloatingCard
        className="-right-8 top-32 animate-float-delayed"
        delay={0.2}
      >
        <div className="flex items-center gap-2">
          <span className="text-2xl">🚀</span>
          <div>
            <p className="text-xs text-muted-foreground">AI Insight</p>
            <p className="text-sm font-medium text-foreground">Post at 6PM for 2x reach</p>
          </div>
        </div>
      </FloatingCard>

      <FloatingCard
        className="-left-6 bottom-24 animate-float-delayed"
        delay={0.4}
      >
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/30" />
            <div className="w-6 h-6 rounded-full bg-glow-blue/20 border border-glow-blue/30" />
            <div className="w-6 h-6 rounded-full bg-glow-purple/20 border border-glow-purple/30" />
          </div>
          <p className="text-xs text-muted-foreground">+15K new followers today</p>
        </div>
      </FloatingCard>
    </motion.div>
  );
};

const StatCard = ({
  icon,
  label,
  value,
  change,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  change: string;
  color: string;
}) => {
  const colorClasses = {
    cyan: "bg-primary/10 text-primary",
    blue: "bg-glow-blue/10 text-glow-blue",
    purple: "bg-glow-purple/10 text-glow-purple",
    green: "bg-green-500/10 text-green-500",
  };

  return (
    <div className="p-4 rounded-xl bg-secondary/50 border border-border/50">
      <div className="flex items-center gap-2 mb-2">
        <div className={`p-1.5 rounded-md ${colorClasses[color as keyof typeof colorClasses]}`}>
          {icon}
        </div>
        <span className="text-xs text-muted-foreground">{label}</span>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-display font-bold text-foreground">{value}</span>
        <span className="text-xs text-green-500 flex items-center gap-0.5">
          <ArrowUpRight className="w-3 h-3" />
          {change}
        </span>
      </div>
    </div>
  );
};

const PlatformCard = ({
  icon,
  name,
  followers,
  growth,
  color,
}: {
  icon: React.ReactNode;
  name: string;
  followers: string;
  growth: string;
  color: string;
}) => {
  const colorClasses = {
    red: "text-red-500",
    pink: "text-pink-500",
    sky: "text-sky-500",
  };

  return (
    <div className="p-3 rounded-xl bg-secondary/30 border border-border/50 flex items-center gap-3">
      <div className={colorClasses[color as keyof typeof colorClasses]}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-muted-foreground">{name}</p>
        <p className="text-sm font-semibold text-foreground">{followers}</p>
      </div>
      <span className="text-xs text-green-500">{growth}</span>
    </div>
  );
};

const FloatingCard = ({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.8 + delay }}
      className={`absolute hidden lg:block p-3 rounded-xl glass border border-border/50 shadow-xl ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default DashboardMockup;
