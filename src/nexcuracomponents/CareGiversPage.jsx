"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Heart,
  Shield,
  Activity,
  Users,
  Bell,
  TrendingUp,
  Watch,
  Stethoscope,
  AlertTriangle,
  UserCheck,
  Smartphone,
  HeadphonesIcon,
  Star,
} from "lucide-react";

// Sample data for charts
const sleepQualityData = [
  { day: "Mon", sleepQuality: 60 },
  { day: "Tue", sleepQuality: 65 },
  { day: "Wed", sleepQuality: 70 },
  { day: "Thu", sleepQuality: 75 },
  { day: "Fri", sleepQuality: 80 },
  { day: "Sat", sleepQuality: 85 },
  { day: "Sun", sleepQuality: 90 },
];

const engagementData = [
  { name: "Daily Score Check", value: 75, color: "#10B981" },
  { name: "Snapshot Shares", value: 55, color: "#3B82F6" },
  { name: "Early Alerts", value: 30, color: "#8B5CF6" },
];

// Animated Counter Component
const AnimatedCounter = ({
  from = 0,
  to,
  duration = 2,
  suffix = "",
  prefix = "",
}) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    const controls = animate(count, to, { duration });
    const unsubscribe = rounded.onChange(setDisplayValue);

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, to, duration, rounded]);

  return (
    <span className="tabular-nums">
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
};

// Pulsing Alert Icon
const PulsingAlert = () => (
  <motion.div
    animate={{
      scale: [1, 1.1, 1],
      opacity: [0.8, 1, 0.8],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="inline-block"
  >
    <Bell className="w-5 h-5 text-emerald-500" />
  </motion.div>
);

// Main Component
const NexCuraCaregiverHero = () => {
  const features = [
    {
      icon: <Activity className="w-6 h-6 text-blue-500" />,
      title: "AI-Curated Health Scores",
      description: "Updated daily with personalized insights",
    },
    {
      icon: <PulsingAlert />,
      title: "Automatic Alerts",
      description: "Instant notifications when trends shift",
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-500" />,
      title: "Private Health Circles",
      description: "Secure sharing with trusted family members",
    },
  ];

  const keyFeatures = [
    {
      icon: <Watch className="w-8 h-8" />,
      title: "Wearable Integration",
      description:
        "Track physical, mental, and nutritional health metrics with seamless integration of wearables and diagnostic tools, ensuring holistic monitoring and smarter health decisions.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Remote Diagnostics",
      description:
        "Identify health risks early with AI-driven analysis to reduce sick leave, improve productivity, and lower long-term healthcare costs effectively, efficiently, and proactively.",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Proactive Health Alerts",
      description:
        "Personalized health pathways, including chronic disease support, mental health resources, and actionable care recommendations tailored to your needs, preferences, lifestyle, and medical history.",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Caregiver Support",
      description:
        "A centralized dashboard for HR leaders to monitor team-wide health trends and take data-driven action with real-time insights, alerts, reports, and engagement metrics.",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 overflow-hidden py-16">
      <div className="container">
        {/* NexCura Mobile App Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3 mb-6"
              >
                <Smartphone className="w-6 h-6 text-white" />
                <span className="text-xl font-semibold text-white">
                  NexCura Mobile App
                </span>
                <Star className="w-5 h-5 text-yellow-300" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Your Health, Always Within Reach
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Experience seamless health monitoring with our intuitive mobile
                application, designed to keep you connected to your wellness
                journey 24/7.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Key Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Key Features
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Unlock powerful features built to transform how you manage health.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-start space-x-6">
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* NexCura Care Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 rounded-3xl p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mt-48"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full -mr-40 -mb-40"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full"></div>

            <div className="relative z-10 max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-4 mb-8"
                >
                  <HeadphonesIcon className="w-8 h-8 text-white" />
                  <span className="text-2xl font-bold text-white">
                    NexCura Care Services
                  </span>
                </motion.div>

                <motion.h2
                  className="text-3xl md:text-5xl font-bold mb-8 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  Comprehensive Care Solutions
                </motion.h2>

                <motion.p
                  className="text-xl md:text-2xl text-emerald-100 leading-relaxed max-w-4xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  NexCura Care Services provides comprehensive support for
                  individuals and families. From trusted caregiving solutions to
                  remote health monitoring, we empower users to access
                  compassionate care tailored to their unique needs, ensuring
                  peace of mind for loved ones.
                </motion.p>
              </div>

              {/* Service highlights */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="grid md:grid-cols-3 gap-6"
              >
                {[
                  {
                    icon: <Heart className="w-6 h-6" />,
                    title: "Trusted Care",
                    desc: "Professional caregiving solutions",
                  },
                  {
                    icon: <Shield className="w-6 h-6" />,
                    title: "Remote Monitoring",
                    desc: "24/7 health surveillance",
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: "Family Support",
                    desc: "Peace of mind for loved ones",
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-emerald-100">{service.desc}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Main Content - Three Column Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 xl:gap-12 items-start mb-16">
          {/* Left Column - Market Data */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="xl:col-span-1"
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/50 sticky top-8">
              <h3 className="text-lg font-semibold text-slate-700 mb-6">
                Market Scale
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-2xl lg:text-3xl font-bold text-blue-600">
                    $<AnimatedCounter to={22} />B
                  </p>
                  <p className="text-sm text-slate-600">
                    Remote patient monitoring market in 2024
                  </p>
                </div>
                <div>
                  <p className="text-2xl lg:text-3xl font-bold text-emerald-600">
                    $<AnimatedCounter to={110} />B
                  </p>
                  <p className="text-sm text-slate-600">
                    Projected market size by 2033
                  </p>
                </div>
                <div>
                  <p className="text-xl lg:text-2xl font-bold text-purple-600">
                    <AnimatedCounter to={70} />
                    M+
                  </p>
                  <p className="text-sm text-slate-600">
                    Americans expected to use remote monitoring tools by 2025
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center Column - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="xl:col-span-3 flex justify-center"
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative mx-auto border-slate-800 bg-slate-800 border-[14px] rounded-[2.5rem] h-[500px] w-[280px] shadow-2xl">
                {/* Phone Buttons */}
                <div className="h-[32px] w-[3px] bg-slate-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                <div className="h-[46px] w-[3px] bg-slate-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                <div className="h-[46px] w-[3px] bg-slate-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                <div className="h-[64px] w-[3px] bg-slate-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>

                {/* Phone Screen */}
                <div className="rounded-[2rem] overflow-hidden w-[252px] h-[472px] bg-gradient-to-br from-white to-slate-50 p-6">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center mb-6 text-xs text-slate-500">
                    <span>9:41</span>
                    <span>●●●●●</span>
                  </div>

                  {/* App Header */}
                  <div className="text-center mb-8">
                    <h2 className="text-xl font-bold text-slate-800 mb-2">
                      NexCura
                    </h2>
                    <div className="flex items-center justify-center space-x-2">
                      <Heart className="w-4 h-4 text-emerald-500" />
                      <span className="text-sm text-slate-600">Connected</span>
                    </div>
                  </div>

                  {/* Health Score Circle */}
                  <div className="relative mb-8">
                    <div className="w-24 h-24 mx-auto relative">
                      <svg
                        className="w-24 h-24 transform -rotate-90"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="rgb(226 232 240)"
                          strokeWidth="2"
                          fill="transparent"
                        />
                        <motion.circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="rgb(16 185 129)"
                          strokeWidth="2"
                          fill="transparent"
                          strokeDasharray={62.83}
                          initial={{ strokeDashoffset: 62.83 }}
                          animate={{ strokeDashoffset: 6.28 }}
                          transition={{ duration: 2, delay: 1.6 }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-emerald-600">
                          85
                        </span>
                      </div>
                    </div>
                    <p className="text-center text-sm text-slate-600 mt-2">
                      Health Score
                    </p>
                  </div>

                  {/* Status */}
                  <div className="bg-emerald-50 rounded-xl p-4 mb-6">
                    <div className="flex items-center justify-center space-x-2">
                      <Shield className="w-5 h-5 text-emerald-600" />
                      <span className="text-emerald-700 font-medium">
                        All Clear
                      </span>
                    </div>
                    <p className="text-xs text-emerald-600 text-center mt-1">
                      Sleep improved 15% this week
                    </p>
                  </div>

                  {/* Mini Chart */}
                  <div className="h-16">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={sleepQualityData.slice(-4)}>
                        <Line
                          type="monotone"
                          dataKey="sleepQuality"
                          stroke="#10B981"
                          strokeWidth={2}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Floating Decorative Elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <Heart className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <Shield className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - User Impact Data */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="xl:col-span-1"
          >
            {/* Sleep Quality Trend */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/50 mb-12">
              <h3 className="text-lg font-semibold text-slate-700 mb-4 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-blue-500" />
                <span>Sleep Quality Trend</span>
              </h3>
              <div className="h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={sleepQualityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                    <XAxis
                      dataKey="day"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 10 }}
                    />
                    <YAxis hide />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        border: "none",
                        borderRadius: "12px",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="sleepQuality"
                      stroke="#3B82F6"
                      strokeWidth={3}
                      dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Engagement Metrics */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/50">
              <h3 className="text-lg font-semibold text-slate-700 mb-4 flex items-center space-x-2">
                <Users className="w-5 h-5 text-emerald-500" />
                <span>User Engagement</span>
              </h3>
              <div className="h-32 flex items-center">
                <ResponsiveContainer width="50%" height="100%">
                  <PieChart>
                    <Pie
                      data={engagementData}
                      cx="50%"
                      cy="50%"
                      innerRadius={25}
                      outerRadius={45}
                      dataKey="value"
                    >
                      {engagementData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex-1 space-y-2">
                  {engagementData.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-xs text-slate-600">
                        {item.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Original Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Your Health Circle Features
          </h2>
          <p className="text-gray-600 mb-12 text-center">
            Three core capabilities that keep you connected and informed
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.9 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-3">
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-100 to-teal-100">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="text-center"
        >
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30 inline-block">
            <p className="text-black mb-4 font-bold">
              Caregiving Market Growth
            </p>
            <div className="flex items-center space-x-8">
              <div>
                <p className="text-3xl font-bold text-slate-800">
                  $<AnimatedCounter to={468} />B
                </p>
                <p className="text-sm text-slate-600">
                  Global caregiving market size in 2024
                </p>
              </div>
              <div className="text-2xl text-slate-300">→</div>
              <div>
                <p className="text-3xl font-bold text-emerald-600">
                  $<AnimatedCounter to={680} />B
                </p>
                <p className="text-sm text-slate-600">
                  Projected caregiving market size by 2035 (conservative,
                  realistic projection)
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NexCuraCaregiverHero;
