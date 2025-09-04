"use client";

import { motion } from "framer-motion";
import { Brain, Scale, Apple, Clock, Heart, Flower2 } from "lucide-react";

const healthPillars = [
  {
    id: 1,
    title: "Mental Health",
    description: "Manage stress effectively",
    icon: Brain,
    color: "#3B82F6",
    bgColor: "bg-blue-500",
    position: 0,
  },
  {
    id: 2,
    title: "Weight Control",
    description: "Maintain healthy weight",
    icon: Scale,
    color: "#10B981",
    bgColor: "bg-emerald-500",
    position: 1,
  },
  {
    id: 3,
    title: "Nutrition",
    description: "Eat balanced meals",
    icon: Apple,
    color: "#F59E0B",
    bgColor: "bg-amber-500",
    position: 2,
  },
  {
    id: 4,
    title: "Longevity",
    description: "Focus on long-term health",
    icon: Clock,
    color: "#8B5CF6",
    bgColor: "bg-violet-500",
    position: 3,
  },
  {
    id: 5,
    title: "Medical Care",
    description: "Regular health checkups",
    icon: Heart,
    color: "#EF4444",
    bgColor: "bg-red-500",
    position: 4,
  },
  {
    id: 6,
    title: "Wellness",
    description: "Holistic well-being",
    icon: Flower2,
    color: "#06B6D4",
    bgColor: "bg-cyan-500",
    position: 5,
  },
];

const getCirclePosition = (index, radius, centerX, centerY) => {
  const angle = (index * 60 - 90) * (Math.PI / 180);
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);
  return { x, y, angle };
};

const getTextBoxPosition = (index, radius, centerX, centerY) => {
  const angle = (index * 60 - 90) * (Math.PI / 180);
  const circleRadius = 45;
  const boxWidth = 140;
  const boxHeight = 80;
  const gap = 15; // Gap between circle edge and text box

  // Circle position
  const circleX = centerX + radius * Math.cos(angle);
  const circleY = centerY + radius * Math.sin(angle);

  // Calculate distance from center to text box center
  const textBoxDistance =
    radius + circleRadius + gap + Math.max(boxWidth, boxHeight) / 2;

  // Text box center position
  const textBoxCenterX = centerX + textBoxDistance * Math.cos(angle);
  const textBoxCenterY = centerY + textBoxDistance * Math.sin(angle);

  // Text box top-left position
  const x = textBoxCenterX - boxWidth / 2;
  const y = textBoxCenterY - boxHeight / 2;

  return { x, y, angle };
};

const CircleItem = ({ pillar, index, radius, centerX, centerY }) => {
  const IconComponent = pillar.icon;
  const circlePos = getCirclePosition(index, radius, centerX, centerY);
  const textPos = getTextBoxPosition(index, radius, centerX, centerY);

  return (
    <>
      {/* Connecting line from center to circle */}
      <motion.line
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.4 }}
        transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
        x1={centerX}
        y1={centerY}
        x2={circlePos.x}
        y2={circlePos.y}
        stroke="#94A3B8"
        strokeWidth="2"
      />

      {/* Circle */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.3 + index * 0.1,
          type: "spring",
          stiffness: 200,
        }}
        whileHover={{ scale: 1.1 }}
        className="cursor-pointer"
      >
        {/* Shadow */}
        <circle
          cx={circlePos.x + 2}
          cy={circlePos.y + 2}
          r="45"
          fill="rgba(0,0,0,0.1)"
        />

        {/* Main Circle */}
        <circle
          cx={circlePos.x}
          cy={circlePos.y}
          r="45"
          fill={pillar.color}
          stroke="white"
          strokeWidth="4"
        />

        {/* Icon */}
        <foreignObject
          x={circlePos.x - 15}
          y={circlePos.y - 15}
          width="30"
          height="30"
        >
          <div className="flex items-center justify-center w-full h-full">
            <IconComponent size={24} className="text-white" />
          </div>
        </foreignObject>

        {/* Number Badge */}
        <circle
          cx={circlePos.x + 28}
          cy={circlePos.y - 28}
          r="14"
          fill="white"
          stroke={pillar.color}
          strokeWidth="2"
        />
        <text
          x={circlePos.x + 28}
          y={circlePos.y - 28}
          textAnchor="middle"
          dominantBaseline="central"
          className="text-sm font-bold"
          fill={pillar.color}
        >
          {index + 1}
        </text>
      </motion.g>

      {/* Text Box positioned to touch but not overlap circle */}
      <motion.g
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
      >
        {/* Text Box Background */}
        <rect
          x={textPos.x}
          y={textPos.y}
          width="140"
          height="80"
          rx="8"
          fill="white"
          stroke="#E2E8F0"
          strokeWidth="1"
          filter="drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))"
        />

        {/* Title */}
        <foreignObject
          x={textPos.x + 10}
          y={textPos.y + 15}
          width="120"
          height="30"
        >
          <div className="text-sm font-bold text-gray-800 text-center leading-tight">
            {pillar.title}
          </div>
        </foreignObject>

        {/* Description */}
        <foreignObject
          x={textPos.x + 10}
          y={textPos.y + 50}
          width="120"
          height="25"
        >
          <div className="text-xs text-gray-600 text-center leading-relaxed">
            {pillar.description}
          </div>
        </foreignObject>
      </motion.g>
    </>
  );
};

const MobileCircleItem = ({ pillar, index }) => {
  const IconComponent = pillar.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center space-x-4">
        <div
          className={`${pillar.bgColor} w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 relative`}
        >
          <IconComponent size={22} className="text-white" />
          <div
            className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
            style={{ backgroundColor: pillar.color }}
          >
            {index + 1}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-base font-bold text-gray-800 mb-1">
            {pillar.title}
          </h3>
          <p className="text-gray-600 text-sm">{pillar.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProfessionalCircleInfographic() {
  const svgSize = 800; // Increased to accommodate text boxes
  const centerX = svgSize / 2;
  const centerY = svgSize / 2;
  const circleRadius = 180;

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Healthy Lifestyle
          </h1>
          <h2 className="text-2xl lg:text-3xl text-gray-600 font-medium">
            Six Key Pillars
          </h2>
        </motion.header>

        {/* Desktop Circular Design */}
        <div className="hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <svg
                width={svgSize}
                height={svgSize}
                className="overflow-visible"
                viewBox={`0 0 ${svgSize} ${svgSize}`}
              >
                {/* Circle Items with corrected positioning */}
                {healthPillars.map((pillar, index) => (
                  <CircleItem
                    key={pillar.id}
                    pillar={pillar}
                    index={index}
                    radius={circleRadius}
                    centerX={centerX}
                    centerY={centerY}
                  />
                ))}
              </svg>

              {/* Central Hub */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                         w-32 h-32 bg-white rounded-full shadow-xl border-4 border-gray-200
                         flex flex-col items-center justify-center z-10"
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">🌟</div>
                  <div className="text-gray-800 font-bold text-sm leading-tight">
                    <div>Healthy</div>
                    <div>Lifestyle</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="space-y-4 max-w-md mx-auto">
            {healthPillars.map((pillar, index) => (
              <MobileCircleItem key={pillar.id} pillar={pillar} index={index} />
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-10 text-center"
        >
          <div className="inline-block px-6 py-3 bg-white rounded-full shadow-lg">
            <p className="text-gray-600 font-medium">
              Your Journey to Wellness Starts Here
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
