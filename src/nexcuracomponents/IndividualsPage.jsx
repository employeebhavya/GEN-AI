"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  RadialBarChart,
  RadialBar,
} from "recharts";
import {
  Activity,
  TrendingUp,
  Shield,
  Heart,
  Sparkles,
  Moon,
  Footprints,
  Brain,
  Zap,
  Users,
  Clock,
  Bell,
  Target,
  Award,
  Database,
} from "lucide-react";

// Enhanced sample data sets
const sleepData = [
  { day: "Mon", hours: 7.2, quality: 85, deep: 2.1, rem: 1.8 },
  { day: "Tue", hours: 6.8, quality: 78, deep: 1.9, rem: 1.5 },
  { day: "Wed", hours: 8.1, quality: 92, deep: 2.4, rem: 2.1 },
  { day: "Thu", hours: 7.5, quality: 88, deep: 2.2, rem: 1.9 },
  { day: "Fri", hours: 6.9, quality: 82, deep: 2.0, rem: 1.6 },
  { day: "Sat", hours: 8.3, quality: 95, deep: 2.6, rem: 2.2 },
  { day: "Sun", hours: 7.8, quality: 90, deep: 2.3, rem: 2.0 },
];

const biometricTrends = [
  {
    metric: "Heart Rate Variability",
    value: 45,
    trend: "+12%",
    color: "#EF4444",
  },
  { metric: "Resting Heart Rate", value: 58, trend: "-3%", color: "#F59E0B" },
  { metric: "Sleep Efficiency", value: 89, trend: "+8%", color: "#3B82F6" },
  { metric: "Recovery Score", value: 78, trend: "+15%", color: "#10B981" },
];

const aiInsights = [
  {
    title: "Early Warning Detected",
    insight:
      "Your HRV shows a 12% decline pattern. Consider stress management.",
    confidence: 94,
    impact: "High",
  },
  {
    title: "Optimal Training Window",
    insight: "Best workout time: 2-4 PM based on your circadian rhythm.",
    confidence: 87,
    impact: "Medium",
  },
  {
    title: "Sleep Pattern Optimization",
    insight: "Shifting bedtime 30min earlier could improve REM by 18%.",
    confidence: 91,
    impact: "High",
  },
];

const realTimeMetrics = [
  { label: "Active Users", value: 127834, change: "+2.3%" },
  { label: "Health Alerts Sent", value: 45621, change: "+18.4%" },
  { label: "Early Detections Today", value: 892, change: "+5.7%" },
  { label: "Lives Potentially Saved", value: 23, change: "+12.1%" },
];

// Floating data points animation
const FloatingDataPoint = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{
        y: [-10, 10, -10],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute"
    >
      {children}
    </motion.div>
  );
};

// Animated counter with decimal support
const AnimatedCounter = ({
  end,
  suffix = "",
  prefix = "",
  duration = 2000,
  decimals = 0,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const startCount = 0;

    const animateCount = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const currentCount = progress * (end - startCount) + startCount;
      setCount(decimals > 0 ? currentCount : Math.floor(currentCount));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [end, duration, decimals]);

  const displayValue = decimals > 0 ? count.toFixed(decimals) : count;
  return (
    <span>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};

// Data stream visualization
const DataStream = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Use deterministic positions to avoid hydration mismatches
  const dataPoints = [
    { left: 25, top: 15, delay: 0 },
    { left: 78, top: 35, delay: 0.5 },
    { left: 45, top: 60, delay: 1.0 },
    { left: 90, top: 80, delay: 1.5 },
    { left: 12, top: 45, delay: 2.0 },
    { left: 60, top: 20, delay: 0.3 },
    { left: 35, top: 75, delay: 0.8 },
    { left: 85, top: 50, delay: 1.3 },
    { left: 20, top: 90, delay: 1.8 },
    { left: 70, top: 10, delay: 0.2 },
    { left: 50, top: 85, delay: 0.7 },
    { left: 95, top: 25, delay: 1.2 },
    { left: 8, top: 65, delay: 1.7 },
    { left: 65, top: 40, delay: 0.4 },
    { left: 40, top: 55, delay: 0.9 },
    { left: 80, top: 75, delay: 1.4 },
    { left: 15, top: 30, delay: 1.9 },
    { left: 55, top: 70, delay: 0.6 },
    { left: 75, top: 95, delay: 1.1 },
    { left: 30, top: 5, delay: 1.6 },
  ];

  if (!isClient) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none" />
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dataPoints.map((point, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
          style={{
            left: `${point.left}%`,
            top: `${point.top}%`,
          }}
          animate={{
            y: [-20, -100],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 3 + (i % 3),
            delay: point.delay,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
};

const NexCuraComponent = () => {
  const [nexCuraScore, setNexCuraScore] = useState(0);
  const [selectedInsight, setSelectedInsight] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNexCuraScore(92);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Cycle through AI insights
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedInsight((prev) => (prev + 1) % aiInsights.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-blue-50 text-gray-900 overflow-hidden relative">
      {/* Dynamic background elements */}
      <DataStream />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingDataPoint delay={0}>
          <div
            className="w-32 h-32 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-xl"
            style={{ top: "10%", left: "5%" }}
          />
        </FloatingDataPoint>
        <FloatingDataPoint delay={1}>
          <div
            className="w-48 h-48 bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-full blur-xl"
            style={{ top: "60%", right: "10%" }}
          />
        </FloatingDataPoint>
        <FloatingDataPoint delay={2}>
          <div
            className="w-24 h-24 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-xl"
            style={{ bottom: "20%", left: "15%" }}
          />
        </FloatingDataPoint>
      </div>
      <div className="relative z-10 py-16">
        <div className="relative z-10 container">
          {/* Enhanced Header with live metrics ticker */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            {/* Live metrics ticker */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl px-6 py-3 inline-flex flex-wrap items-center gap-6 shadow-lg border border-gray-200/50">
              {realTimeMetrics.map((metric, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-medium">{metric.label}:</span>
                  <span className="font-bold text-blue-600">
                    <AnimatedCounter end={metric.value} />
                  </span>
                  <span className="text-green-600 text-xs">
                    {metric.change}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Main dashboard section with enhanced layout */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 mb-16">
            {/* AI Insights Panel - Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="xl:col-span-3 space-y-6"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-3 lg:p-6 shadow-xl border border-gray-200/50">
                <div className="flex items-center gap-3 mb-6">
                  <Brain className="w-6 h-6 text-purple-600" />
                  <h3 className="text-xl font-bold">AI Insights</h3>
                </div>

                <motion.div
                  key={selectedInsight}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-2xl">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-800">
                        {aiInsights[selectedInsight].title}
                      </h4>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          aiInsights[selectedInsight].impact === "High"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {aiInsights[selectedInsight].impact}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      {aiInsights[selectedInsight].insight}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="bg-purple-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{
                            width: `${aiInsights[selectedInsight].confidence}%`,
                          }}
                          transition={{ duration: 1 }}
                        />
                      </div>
                      <span className="text-xs font-medium text-gray-500">
                        {aiInsights[selectedInsight].confidence}% confident
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Market indicators */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl">
                    <span className="text-sm font-medium">Market Growth</span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">
                        $<AnimatedCounter end={477} />B
                      </div>
                      <div className="text-xs text-gray-500">by 2034</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl">
                    <span className="text-sm font-medium">RPM Users</span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">
                        <AnimatedCounter end={30} />M
                      </div>
                      <div className="text-xs text-gray-500">by 2024</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Central Dashboard */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="xl:col-span-6"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-4 lg:p-8 shadow-2xl border border-gray-200/50 relative overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 pointer-events-none"></div>

                <div className="relative z-10">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">
                          NexCura Dashboard
                        </h2>
                        <p className="text-sm text-gray-500">
                          Real-time health intelligence
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-medium text-green-700">
                        Live
                      </span>
                    </div>
                  </div>

                  {/* NexCura Score with enhanced visualization */}
                  <div className="text-center mb-8 relative">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 1.2, delay: 0.8, type: "spring" }}
                      className="relative inline-block"
                    >
                      <div className="w-40 h-40 relative">
                        <svg
                          className="w-full h-full transform -rotate-90"
                          viewBox="0 0 36 36"
                        >
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#E5E7EB"
                            strokeWidth="2"
                          />
                          <motion.path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="url(#gradient)"
                            strokeWidth="2"
                            strokeDasharray="100, 100"
                            initial={{ strokeDasharray: "0, 100" }}
                            animate={{
                              strokeDasharray: `${nexCuraScore}, 100`,
                            }}
                            transition={{ duration: 2, delay: 1 }}
                          />
                          <defs>
                            <linearGradient
                              id="gradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop offset="0%" stopColor="#3B82F6" />
                              <stop offset="100%" stopColor="#8B5CF6" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-4xl font-black text-gray-800">
                              <AnimatedCounter
                                end={nexCuraScore}
                                duration={2000}
                              />
                            </div>
                            <div className="text-xs text-gray-500 font-medium">
                              NEXCURA SCORE
                            </div>
                          </div>
                        </div>
                      </div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 2 }}
                        className="absolute -top-2 -right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1"
                      >
                        <TrendingUp className="w-3 h-3" />
                        +2
                      </motion.div>
                    </motion.div>
                    <p className="text-green-600 font-medium mt-2">
                      Excellent Health Trajectory
                    </p>
                  </div>

                  {/* Enhanced Biometric Cards */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {biometricTrends.map((metric, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 + index * 0.1 }}
                        className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-2xl border border-gray-200/50 hover:shadow-lg transition-all"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: metric.color }}
                          ></div>
                          <span
                            className={`text-xs font-bold ${
                              metric.trend.startsWith("+")
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            {metric.trend}
                          </span>
                        </div>
                        <div className="text-2xl font-bold mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-500 font-medium">
                          {metric.metric}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Advanced Charts Section */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    {/* Sleep Architecture */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-2xl">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Moon className="w-4 h-4 text-blue-600" />
                        Sleep Architecture
                      </h4>
                      <ResponsiveContainer width="100%" height={120}>
                        <AreaChart data={sleepData}>
                          <Area
                            type="monotone"
                            dataKey="deep"
                            stackId="1"
                            stroke="#3B82F6"
                            fill="#3B82F6"
                            fillOpacity={0.6}
                          />
                          <Area
                            type="monotone"
                            dataKey="rem"
                            stackId="1"
                            stroke="#8B5CF6"
                            fill="#8B5CF6"
                            fillOpacity={0.6}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                      <div className="flex items-center gap-4 mt-2 text-xs">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-blue-500 rounded"></div>
                          <span>Deep Sleep</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-purple-500 rounded"></div>
                          <span>REM Sleep</span>
                        </div>
                      </div>
                    </div>

                    {/* Recovery Trend */}
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-2xl">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Activity className="w-4 h-4 text-green-600" />
                        Recovery Trend
                      </h4>
                      <ResponsiveContainer width="100%" height={120}>
                        <LineChart data={sleepData}>
                          <Line
                            type="monotone"
                            dataKey="quality"
                            stroke="#10B981"
                            strokeWidth={3}
                            dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                      <div className="text-xs text-gray-600 mt-2">
                        7-day rolling average:{" "}
                        <span className="font-bold text-green-600">86.4%</span>
                      </div>
                    </div>
                  </div>

                  {/* Smart Recommendation */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-2xl border border-purple-200/50"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-purple-600 rounded-xl">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-purple-900 mb-2">
                          AI Recommendation
                        </h4>
                        <p className="text-purple-800 text-sm mb-3">
                          Your HRV indicates optimal recovery. Consider
                          high-intensity training between 2-4 PM when your
                          circadian rhythm peaks for performance.
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                            Confidence: 89%
                          </div>
                          <div className="bg-white/70 px-3 py-1 rounded-full text-xs font-medium text-purple-700">
                            Impact: High
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Social Proof Panel - Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="xl:col-span-3 space-y-6"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-gray-200/50">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold">Live Impact</h3>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-2xl border border-green-200/50">
                    <div className="text-3xl font-black text-green-700 mb-1">
                      <AnimatedCounter end={82} suffix="%" />
                    </div>
                    <p className="text-green-600 text-sm font-medium">
                      Feel more in control within 30 days
                    </p>
                    <div className="mt-2 flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < 4 ? "bg-green-400" : "bg-gray-200"
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-2xl border border-blue-200/50">
                    <div className="text-3xl font-black text-blue-700 mb-1">
                      <AnimatedCounter end={4.7} suffix=" hrs" decimals={1} />
                    </div>
                    <p className="text-blue-600 text-sm font-medium">
                      Avg. sleep improvement per week
                    </p>
                    <div className="mt-2 bg-blue-200 rounded-full h-2">
                      <motion.div
                        className="bg-blue-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "78%" }}
                        transition={{ duration: 1, delay: 1 }}
                      />
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-2xl border border-purple-200/50">
                    <div className="text-3xl font-black text-purple-700 mb-1">
                      <AnimatedCounter end={9.2} suffix="/10" decimals={1} />
                    </div>
                    <p className="text-purple-600 text-sm font-medium">
                      Would recommend to others
                    </p>
                    <div className="mt-2 flex items-center gap-1">
                      {[...Array(10)].map((_, i) => (
                        <Award
                          key={i}
                          className={`w-3 h-3 ${
                            i < 9 ? "text-purple-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Enhanced Testimonial */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="bg-gradient-to-br from-gray-50 to-slate-50 p-6 rounded-2xl border border-gray-200/50 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  <div className="relative z-10">
                    <div className="text-4xl text-gray-300 mb-2">"</div>
                    <p className="text-gray-700 text-sm italic mb-4 leading-relaxed">
                      NexCura alerted me to a resting heart rate trend that led
                      to an early doctor's visit—potentially preventing a
                      serious cardiac event. The AI didn't just track my data,
                      it saved my life.
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-500 text-xs">— Verified User</p>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className="w-3 h-3 bg-yellow-400 rounded-full"
                            ></div>
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500">
                          Impact Rating
                        </div>
                        <div className="text-lg font-bold text-red-600">
                          Life-Saving
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-200/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl w-fit mb-6">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold mb-4">
                  AI-Driven NexCura Score
                </h4>
                <p className="text-gray-600 mb-6">
                  Revolutionary single-score system that synthesizes complex
                  health data into actionable daily insights using advanced
                  machine learning.
                </p>
                <div className="flex items-center gap-2">
                  <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    92% Accuracy
                  </div>
                  <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                    Real-time
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-200/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="p-3 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl w-fit mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold mb-4">
                  Tailored Recommendations
                </h4>
                <p className="text-gray-600 mb-6">
                  Personalized daily insights based on your unique physiological
                  patterns, lifestyle, and health goals with predictive
                  analytics.
                </p>
                <div className="flex items-center gap-2">
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    89% Confidence
                  </div>
                  <div className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                    Adaptive
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-200/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl w-fit mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold mb-4">
                  Complete Privacy Control
                </h4>
                <p className="text-gray-600 mb-6">
                  Bank-grade encryption with local processing ensures your most
                  sensitive health data never leaves your control while
                  maximizing insights.
                </p>
                <div className="flex items-center gap-2">
                  <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                    256-bit Encrypted
                  </div>
                  <div className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                    HIPAA Compliant
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Technology Stack Showcase */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 text-center"
          >
            <h3 className="text-2xl lg:text-3xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
              Powered by Advanced Health Intelligence
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl flex items-center justify-center mb-3">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <span className="font-semibold">Cardiac AI</span>
                <span className="text-sm text-gray-500">
                  Heart rhythm analysis
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-3">
                  <Moon className="w-8 h-8 text-white" />
                </div>
                <span className="font-semibold">Sleep Science</span>
                <span className="text-sm text-gray-500">REM optimization</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-3">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <span className="font-semibold">Movement Intelligence</span>
                <span className="text-sm text-gray-500">
                  Activity prediction
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-violet-500 rounded-2xl flex items-center justify-center mb-3">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <span className="font-semibold">Predictive Analytics</span>
                <span className="text-sm text-gray-500">
                  Early warning system
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NexCuraComponent;
