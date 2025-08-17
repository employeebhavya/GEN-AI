import React from "react";
import {
  TrendingUp,
  Minus,
  Pill,
  Scale,
  Activity,
  Droplets,
  Percent,
} from "lucide-react";

function Stats() {
  const stats = [
    {
      number: "73",
      type: "percent",
      label: "eliminated medications including injections",
      icon: Pill,
      iconColor: "text-blue-500",
      bgColor: "from-blue-50/20 to-blue-100/30",
    },
    {
      number: "15 lbs",
      type: "minus",
      label: "lost in 6 months",
      sublabel: "",
      icon: Scale,
      iconColor: "text-pink-500",
      bgColor: "from-pink-50/20 to-pink-100/30",
    },
    {
      number: "2.2",
      type: "minus",
      label: "point drop in A1C",
      sublabel: "",
      icon: Activity,
      iconColor: "text-green-500",
      bgColor: "from-green-50/20 to-green-100/30",
    },
    {
      number: "70",
      type: "percent",
      label: "reduced inflammation",
      sublabel: "",
      icon: TrendingUp,
      iconColor: "text-purple-500",
      bgColor: "from-purple-50/20 to-purple-100/30",
    },
    {
      number: "77",
      type: "percent",
      label: "improved insulin resistance, in those with type 2 diabetes",
      sublabel: "",
      icon: Droplets,
      iconColor: "text-emerald-500",
      bgColor: "from-emerald-50/20 to-emerald-100/30",
    },
    {
      number: "67",
      type: "percent",
      label: "reduced visceral fat",
      sublabel: "",
      icon: Activity,
      iconColor: "text-blue-600",
      bgColor: "from-blue-50/20 to-blue-200/30",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-200 via-white to-gray-300 py-16 relative overflow-hidden z-0">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-8">
            The power of a healthy metabolism
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 xl:max-w-[70%] mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="group relative">
              {/* Glassmorphism Card */}
              <div className="relative h-full min-h-[200px]">
                {/* Main Glass Background */}
                <div className="absolute inset-0 bg-white/80 backdrop-blur-lg border border-white/60 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500"></div>

                {/* Subtle Color Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} rounded-3xl group-hover:opacity-80 transition-opacity duration-500`}
                ></div>

                {/* Border Highlight */}
                <div className="absolute inset-0 rounded-3xl border border-gray-200/40 group-hover:border-gray-300/60 transition-all duration-500"></div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-gray-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10 p-8 text-left transform group-hover:scale-[1.02] transition-transform duration-500 h-full flex flex-col justify-center">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-200/50 mb-6 group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-md">
                    <stat.icon className={`w-7 h-7 ${stat.iconColor}`} />
                  </div>

                  {/* Number with Symbol */}
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300 flex items-start gap-1">
                    {stat.type === "minus" && (
                      <Minus className="w-6 h-6 mt-6 text-gray-600" />
                    )}
                    <span>{stat.number}</span>
                    {stat.type === "percent" && (
                      <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-600 ml-1 mt-4">
                        <Percent />
                      </span>
                    )}
                  </div>

                  {/* Sublabel for units */}
                  {stat.sublabel && stat.type === "minus" && (
                    <div className="text-lg font-medium text-gray-600 mb-3">
                      {stat.sublabel}
                    </div>
                  )}

                  {/* Label */}
                  <div className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed">
                    {stat.label}
                  </div>

                  {/* Additional sublabel */}
                  {stat.sublabel && stat.type !== "minus" && (
                    <div className="text-sm text-gray-500 mt-2 leading-relaxed">
                      {stat.sublabel}
                    </div>
                  )}

                  {/* Animated Accent Line */}
                  <div className="absolute bottom-6 left-8 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-16 transition-all duration-500 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center">
          <p className="text-sm text-gray-500 italic">
            GenAI Healthcare commercial population, members 365 days in program.
            Data as of September 2024.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Stats;
