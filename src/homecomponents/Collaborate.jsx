"use client";

import React, { useState } from "react";
import { Search, FileText, Bot } from "lucide-react";

function Collaborate() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const collaborationSteps = [
    {
      id: 1,
      icon: Search,
      title: "Understand the Opportunity",
      description:
        "Visit the Become a Partner page to learn about GenAI Healthcare's mission and values. This gives insight into how your goals align with their vision of transforming healthcare through AI.",
      imagePath: "/oppurtunity.webp",
      link: "#",
    },
    {
      id: 2,
      icon: FileText,
      title: "Fill Out the Partnership Form",
      description:
        "To start the partnership process, fill out the form with your name, contact details, organization, location, and a short message about your interest. This connects you directly with the GenAI team for further discussion.",
      imagePath: "/partners.webp",
      link: "#",
    },
    {
      id: 3,
      icon: Bot,
      title: "Await GenAI Response",
      description:
        "After submission, the GenAI Healthcare team will review your details and contact you for next steps, such as a discovery call or proposal discussion, depending on alignment and partnership potential.",
      imagePath: "/airesponse.webp",
      link: "#",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6 leading-relaxed">
            Collaborate for a Healthier Tomorrow
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join us in shaping the future of wellness. As a partner, you'll help
            expand innovative health solutions and drive lasting global impact.
          </p>
        </div>

        {/* Collaboration Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {collaborationSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <a
                key={step.id}
                href={step.link}
                className="group relative block"
                onMouseEnter={() => setHoveredCard(step.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Main Card Container */}
                <div className="relative bg-white rounded-2xl border border-gray-300 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-gray-300 hover:-translate-y-2 lg:h-[388px]">
                  {/* Default Content */}
                  <div className="relative z-20 p-8 h-full flex flex-col justify-center transition-all duration-500 group-hover:opacity-0">
                    {/* Icon Container */}
                    <div className="size-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
                    </div>

                    {/* Step Number */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-[#1445A3] to-[#850E80] rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                      {step.id}
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-700 mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-none">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                        {step.description}
                      </p>
                    </div>

                    {/* Hover Indicator */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center text-blue-600 text-sm font-medium">
                        <span>Learn more</span>
                        <svg
                          className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Hover Image Overlay - Slides from bottom/top */}
                  <div
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === 1
                        ? "translate-y-full group-hover:translate-y-0" // Slide up from bottom for middle card
                        : "-translate-y-full group-hover:translate-y-0" // Slide down from top for first and last card
                    }`}
                  >
                    {/* Background Image */}
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${step.imagePath})` }}
                    ></div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1445A3] via-[#850E80] to-[#092964] opacity-80"></div>

                    {/* Image Content Overlay */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center">
                      <div className="text-center text-white p-8">
                        <IconComponent className="w-16 h-16 mx-auto mb-4 opacity-90" />
                        <h4 className="text-2xl font-bold mb-3">
                          {step.title}
                        </h4>
                        <p className="text-white/90 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Collaborate;
