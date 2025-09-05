"use client";

import { motion } from "framer-motion";
import { Brain, Scale, Apple, Clock, Heart, Flower2 } from "lucide-react";

const healthPillars = [
  {
    id: 1,
    title: "Mental Health",
    description: "Manage stress & boost mental clarity",
    icon: Brain,
    color: "#6366F1",
    bgGradient: "from-indigo-500 via-indigo-400 to-indigo-300",
    shadowColor: "shadow-indigo-500/30",
  },
  {
    id: 2,
    title: "Weight Control",
    description: "Hit Your Goals",
    icon: Scale,
    color: "#10B981",
    bgGradient: "from-emerald-500 via-emerald-400 to-emerald-300",
    shadowColor: "shadow-emerald-500/30",
  },
  {
    id: 3,
    title: "Nutrition",
    description: "Balanced Diet",
    icon: Apple,
    color: "#F59E0B",
    bgGradient: "from-amber-500 via-amber-400 to-amber-300",
    shadowColor: "shadow-amber-500/30",
  },
  {
    id: 4,
    title: "Longevity",
    description: "Long Term Health",
    icon: Clock,
    color: "#8B5CF6",
    bgGradient: "from-violet-500 via-violet-400 to-violet-300",
    shadowColor: "shadow-violet-500/30",
  },
  {
    id: 5,
    title: "Medical Care",
    description: "Proactive health monitoring",
    icon: Heart,
    color: "#EF4444",
    bgGradient: "from-red-500 via-red-400 to-red-300",
    shadowColor: "shadow-red-500/30",
  },
  {
    id: 6,
    title: "Wellness",
    description: "Holistic mind-body balance",
    icon: Flower2,
    color: "#06B6D4",
    bgGradient: "from-cyan-500 via-cyan-400 to-cyan-300",
    shadowColor: "shadow-cyan-500/30",
  },
];

const ModernCard = ({ pillar, index }) => {
  const IconComponent = pillar.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateY: -15 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        y: -8,
        rotateY: 5,
        scale: 1.03,
        transition: { duration: 0.2 },
      }}
      className="relative group cursor-pointer"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {/* Main Card */}
      <div
        className={`relative bg-white rounded-3xl p-8 h-80 w-72 mx-auto
                      shadow-2xl ${pillar.shadowColor} border border-gray-100
                      group-hover:shadow-3xl transition-all duration-500 overflow-hidden`}
      >
        {/* Background Pattern */}
        <div
          className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${pillar.bgGradient} 
                        rounded-full opacity-10 transform translate-x-8 -translate-y-8 
                        group-hover:scale-150 transition-transform duration-700`}
        />

        {/* Step Number - Large & Stylish */}
        <div
          className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${pillar.bgGradient} 
                        rounded-2xl flex items-center justify-center shadow-2xl z-10
                        group-hover:rotate-12 transition-transform duration-300`}
        >
          <span className="text-white text-2xl font-bold">{index + 1}</span>
        </div>

        {/* 3D Icon Platform */}
        <div className="relative mb-6">
          <div
            className={`w-24 h-24 bg-gradient-to-br ${pillar.bgGradient} 
                          rounded-3xl flex items-center justify-center mx-auto shadow-xl
                          group-hover:scale-110 group-hover:rotate-3 transition-all duration-400
                          before:absolute before:inset-0 before:bg-white before:opacity-20 
                          before:rounded-3xl before:blur-sm`}
          >
            <IconComponent size={40} className="text-white relative z-10" />
          </div>

          {/* 3D Shadow Effect */}
          <div
            className={`absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-24 
                          bg-gradient-to-br ${pillar.bgGradient} rounded-3xl opacity-30 blur-md -z-10
                          group-hover:blur-lg transition-all duration-400`}
          />
        </div>

        {/* Content */}
        <div className="text-center relative z-10">
          <h3
            className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 
                         transition-colors duration-300"
          >
            {pillar.title}
          </h3>
          <p className="text-gray-600 text-base leading-relaxed">
            {pillar.description}
          </p>
        </div>

        {/* Bottom Gradient Bar */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${pillar.bgGradient} 
                        rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 
                        transition-transform duration-500 origin-left`}
        />

        {/* Floating Particles */}
        <div
          className={`absolute top-1/4 left-8 w-2 h-2 bg-gradient-to-r ${pillar.bgGradient} 
                        rounded-full opacity-60 group-hover:animate-bounce`}
        />
        <div
          className={`absolute top-1/3 right-12 w-1 h-1 bg-gradient-to-r ${pillar.bgGradient} 
                        rounded-full opacity-40 group-hover:animate-pulse`}
        />
        <div
          className={`absolute bottom-1/4 left-12 w-1.5 h-1.5 bg-gradient-to-r ${pillar.bgGradient} 
                        rounded-full opacity-50 group-hover:animate-bounce`}
          style={{ animationDelay: "0.3s" }}
        />
      </div>
    </motion.div>
  );
};

const ConnectionLine = ({ index }) => (
  <motion.div
    initial={{ scaleX: 0, opacity: 0 }}
    animate={{ scaleX: 1, opacity: 1 }}
    transition={{ duration: 0.8, delay: (index + 1) * 0.15 }}
    className="hidden lg:flex items-center justify-center mx-4"
  >
    <div className="relative">
      <div className="w-16 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400"></div>
      <div
        className="absolute -right-1 -top-1 w-0 h-0 border-l-4 border-l-gray-400 
                     border-y-2 border-y-transparent"
      ></div>

      {/* Animated Dot */}
      <motion.div
        animate={{ x: [0, 60, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1 w-2 h-2 bg-blue-500 rounded-full shadow-lg"
      />
    </div>
  </motion.div>
);

export default function ModernSixBoxInfographic() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-20 px-4 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-indigo-200 rounded-full opacity-20 blur-xl animate-pulse" />
      <div
        className="absolute top-40 right-20 w-32 h-32 bg-cyan-200 rounded-full opacity-20 blur-xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-40 left-1/4 w-24 h-24 bg-violet-200 rounded-full opacity-20 blur-xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-8xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Healthy Lifestyle
          </h1>
        </motion.div>

        {/* Desktop 3x2 Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-12 max-w-6xl mx-auto mb-16">
          {healthPillars.slice(0, 3).map((pillar, index) => (
            <ModernCard key={pillar.id} pillar={pillar} index={index} />
          ))}
        </div>

        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-12 max-w-6xl mx-auto">
          {healthPillars.slice(3, 6).map((pillar, index) => (
            <ModernCard key={pillar.id} pillar={pillar} index={index + 3} />
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {healthPillars.map((pillar, index) => (
            <ModernCard key={pillar.id} pillar={pillar} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
