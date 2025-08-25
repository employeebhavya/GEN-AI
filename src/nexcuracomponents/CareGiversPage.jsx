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
import { Heart, Shield, Activity, Users, Bell, TrendingUp } from "lucide-react";

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 overflow-hidden py-16">
      <div className="container">
        {/* Main Content - Three Column Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 xl:gap-12 items-start mb-16">
          {/* Left Column - Market Data */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
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
                    Remote monitoring market 2024
                  </p>
                </div>
                <div>
                  <p className="text-2xl lg:text-3xl font-bold text-emerald-600">
                    $<AnimatedCounter to={110} />B
                  </p>
                  <p className="text-sm text-slate-600">Projected by 2033</p>
                </div>
                <div>
                  <p className="text-xl lg:text-2xl font-bold text-purple-600">
                    <AnimatedCounter to={70} />
                    M+
                  </p>
                  <p className="text-sm text-slate-600">
                    Americans using remote monitoring by 2025
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center Column - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
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
                          transition={{ duration: 2, delay: 0.6 }}
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
            transition={{ duration: 1, delay: 0.3 }}
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

        {/* Features Section - Below the main content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
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
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
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
          transition={{ duration: 1, delay: 1 }}
          className="text-center"
        >
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30 inline-block">
            <p className="text-slate-600 mb-4">Caregiving Market Growth</p>
            <div className="flex items-center space-x-8">
              <div>
                <p className="text-3xl font-bold text-slate-800">
                  $<AnimatedCounter to={468} />B
                </p>
                <p className="text-sm text-slate-600">2024 Market Size</p>
              </div>
              <div className="text-2xl text-slate-300">→</div>
              <div>
                <p className="text-3xl font-bold text-emerald-600">
                  $<AnimatedCounter to={700} />B
                </p>
                <p className="text-sm text-slate-600">2035 Projection</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NexCuraCaregiverHero;
