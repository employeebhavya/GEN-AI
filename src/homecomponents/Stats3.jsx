"use client";

import { motion } from "framer-motion";
import { Brain, Scale, Apple, Clock, Heart, Flower2 } from "lucide-react";

const healthPillars = [
  {
    id: 1,
    title: "Mental Health",
    description: "Manage stress effectively and maintain emotional well-being",
    icon: Brain,
    color: "#3B82F6",
    bgGradient: "from-blue-500 to-blue-600",
    size: "large",
  },
  {
    id: 2,
    title: "Weight Control",
    description: "Hit Your Goal",
    icon: Scale,
    color: "#10B981",
    bgGradient: "from-emerald-500 to-emerald-600",
    size: "medium",
  },
  {
    id: 3,
    title: "Nutrition",
    description: "Balanced Diet",
    icon: Apple,
    color: "#F59E0B",
    bgGradient: "from-amber-500 to-amber-600",
    size: "medium",
  },
  {
    id: 4,
    title: "Longevity",
    description: "Long Term Health",
    icon: Clock,
    color: "#8B5CF6",
    bgGradient: "from-violet-500 to-violet-600",
    size: "large",
  },
  {
    id: 5,
    title: "Medical Care",
    description: "Regular health checkups",
    icon: Heart,
    color: "#EF4444",
    bgGradient: "from-red-500 to-red-600",
    size: "medium",
  },
  {
    id: 6,
    title: "Wellness",
    description: "Holistic well-being",
    icon: Flower2,
    color: "#06B6D4",
    bgGradient: "from-cyan-500 to-cyan-600",
    size: "medium",
  },
];

const TimelineItem = ({ pillar, index, isLeft }) => {
  const IconComponent = pillar.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isLeft ? -80 : 80,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        type: "spring",
        stiffness: 120,
        damping: 12,
      }}
      className="relative flex items-center w-full"
    >
      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center w-full">
        {/* Left Side Content */}
        {isLeft && (
          <>
            <div className="flex-1 pr-8">
              <motion.div
                whileHover={{ scale: 1.02, y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl 
                          transition-all duration-300 relative overflow-hidden group cursor-pointer
                          ml-auto max-w-sm border border-gray-100"
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${pillar.bgGradient} 
                               opacity-5 group-hover:opacity-15 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10 text-right">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${pillar.bgGradient} 
                                 rounded-xl flex items-center justify-center mb-4 shadow-lg 
                                 group-hover:scale-110 transition-transform duration-300 ml-auto`}
                  >
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-gray-900">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Connection Line */}
                <div
                  className={`absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2
                               w-8 h-0.5 bg-gradient-to-r ${pillar.bgGradient} opacity-60`}
                />
              </motion.div>
            </div>

            {/* Timeline Dot */}
            <div className="relative z-20">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.4 }}
                className={`w-6 h-6 bg-gradient-to-br ${pillar.bgGradient} 
                           rounded-full border-4 border-white shadow-lg relative z-10`}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 0, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2 + 1,
                  }}
                  className={`absolute inset-0 bg-gradient-to-br ${pillar.bgGradient} 
                             rounded-full`}
                />
              </motion.div>
            </div>

            <div className="flex-1 pl-8" />
          </>
        )}

        {/* Right Side Content */}
        {!isLeft && (
          <>
            <div className="flex-1 pr-8" />

            {/* Timeline Dot */}
            <div className="relative z-20">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.4 }}
                className={`w-6 h-6 bg-gradient-to-br ${pillar.bgGradient} 
                           rounded-full border-4 border-white shadow-lg relative z-10`}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 0, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2 + 1,
                  }}
                  className={`absolute inset-0 bg-gradient-to-br ${pillar.bgGradient} 
                             rounded-full`}
                />
              </motion.div>
            </div>

            <div className="flex-1 pl-8">
              <motion.div
                whileHover={{ scale: 1.02, y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl 
                          transition-all duration-300 relative overflow-hidden group cursor-pointer
                          mr-auto max-w-sm border border-gray-100"
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${pillar.bgGradient} 
                               opacity-5 group-hover:opacity-15 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10 text-left">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${pillar.bgGradient} 
                                 rounded-xl flex items-center justify-center mb-4 shadow-lg 
                                 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-gray-900">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Connection Line */}
                <div
                  className={`absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2
                               w-8 h-0.5 bg-gradient-to-l ${pillar.bgGradient} opacity-60`}
                />
              </motion.div>
            </div>
          </>
        )}
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden w-full flex items-start space-x-4">
        {/* Timeline Dot */}
        <div className="flex-shrink-0 mt-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.15, duration: 0.4 }}
            className={`w-5 h-5 bg-gradient-to-br ${pillar.bgGradient} 
                       rounded-full border-3 border-white shadow-md relative z-10`}
          />
        </div>

        {/* Content */}
        <motion.div
          whileHover={{ scale: 1.01, y: -4 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl 
                    transition-all duration-300 relative overflow-hidden group cursor-pointer
                    flex-1 border border-gray-100"
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${pillar.bgGradient} 
                         opacity-5 group-hover:opacity-12 transition-opacity duration-300`}
          />

          <div className="relative z-10">
            <div
              className={`w-12 h-12 bg-gradient-to-br ${pillar.bgGradient} 
                           rounded-lg flex items-center justify-center mb-3 shadow-md 
                           group-hover:scale-110 transition-transform duration-300`}
            >
              <IconComponent size={20} className="text-white" />
            </div>
            <h3 className="text-base font-bold text-gray-800 mb-2">
              {pillar.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {pillar.description}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function BentoGridInfographic2() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 px-4 overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative z-10"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Healthy{" "}
              <span
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 
                              bg-clip-text text-transparent"
              >
                Lifestyle
              </span>
            </h2>
            <div
              className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 
                          mx-auto rounded-full opacity-70"
            />
          </motion.div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line - Desktop */}
          <div
            className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 
                          top-0 h-full w-0.5 z-0"
          >
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="w-full h-full bg-gradient-to-b from-blue-300 via-purple-300 
                        via-amber-300 via-violet-300 via-red-300 to-cyan-300 opacity-40 
                        origin-top"
            />
          </div>

          {/* Central Timeline Line - Mobile */}
          <div className="lg:hidden absolute left-5 top-0 bottom-0 w-0.5 z-0">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="w-full h-full bg-gradient-to-b from-blue-300 via-purple-300 
                        via-amber-300 via-violet-300 via-red-300 to-cyan-300 opacity-40 
                        origin-top"
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12 lg:space-y-16">
            {healthPillars.map((pillar, index) => (
              <TimelineItem
                key={pillar.id}
                pillar={pillar}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>

          {/* Decorative Elements */}
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity },
            }}
            className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br 
                      from-blue-400 to-purple-400 rounded-full opacity-10 blur-sm"
          />

          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity },
            }}
            className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br 
                      from-cyan-400 to-blue-400 rounded-full opacity-10 blur-sm"
          />
        </div>
      </div>
    </section>
  );
}
