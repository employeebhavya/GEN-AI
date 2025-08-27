// app/events/page.js
"use client";

import { useState, useEffect } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Mic,
  Award,
  Network,
  ArrowRight,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

const EventsPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const events = [
    {
      id: 1,
      date: "July 3, 2025",
      title: "FiTEN Convention",
      location: "Raleigh, NC",
      type: "Convention",
      description:
        "Leading financial technology and innovation summit bringing together industry pioneers.",
      icon: <Award className="w-6 h-6" />,
      status: "upcoming",
      link: "https://example.com/fiten-convention",
    },
    {
      id: 2,
      date: "June 25, 2025",
      title: "Financial Express Healthcare Summit & Awards 2025",
      location: "India",
      type: "Summit",
      description:
        "Celebrating excellence in healthcare innovation and digital transformation.",
      icon: <Sparkles className="w-6 h-6" />,
      status: "upcoming",
      link: "https://example.com/fe-healthcare-summit",
    },
    {
      id: 3,
      date: "June 11, 2025",
      title: "TiE Atlanta Monthly Meeting",
      location: "Atlanta, GA",
      type: "Networking",
      description:
        "Monthly gathering of entrepreneurs and industry leaders fostering innovation.",
      icon: <Network className="w-6 h-6" />,
      status: "upcoming",
      link: "https://example.com/tie-atlanta",
    },
    {
      id: 4,
      date: "June 10, 2025",
      title: "Venture Atlanta 2025 PitchFest",
      location: "Atlanta, GA",
      type: "Pitch Event",
      description:
        "Startup pitch competition showcasing breakthrough healthcare technologies.",
      icon: <Mic className="w-6 h-6" />,
      status: "upcoming",
      link: "https://example.com/venture-atlanta",
    },
    {
      id: 5,
      date: "May 3, 2025",
      title: "Digital Health Transformation Summit",
      location: "Virtual & In-Person",
      type: "Summit",
      description:
        "Exploring the future of digital health and AI-powered medical solutions.",
      icon: <Users className="w-6 h-6" />,
      status: "past",
      link: "https://example.com/digital-health-summit",
    },
    {
      id: 6,
      date: "April 16, 2025",
      title: "Georgia Technology Summit",
      location: "Atlanta, GA",
      type: "Technology Summit",
      description:
        "Advancing technology innovation across healthcare and enterprise sectors.",
      icon: <Calendar className="w-6 h-6" />,
      status: "past",
      link: "https://example.com/georgia-tech-summit",
    },
  ];

  const AnimatedSeparator = ({ delay = 0 }) => (
    <div className="relative w-full h-16 flex items-center justify-center mt-12 mb-8">
      <div
        className={`w-40 h-px bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent transform transition-all duration-1000 delay-${delay} ${
          isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
        }`}
      />
      <div
        className={`absolute w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full transform transition-all duration-1000 delay-${
          delay + 200
        } ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
      />
      <div className="absolute w-6 h-6 border border-indigo-300/30 rounded-full animate-ping" />
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section - Dark */}
      <section className="relative h-screen flex items-center justify-center bg-slate-950 text-white">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />

        {/* Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-slate-900/90 to-purple-900/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

        {/* Animated Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-12 leading-tight py-4">
              Events
            </h1>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-10 max-w-4xl mx-auto font-medium">
              Discover how GenAI HealthCare is shaping the future of healthcare
              through global conferences, summits, and thought-leadership events
              that drive innovation and transform patient care worldwide.
            </p>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex items-center justify-center gap-3 text-blue-400 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-400/30 shadow-lg w-fit mx-auto">
              <Sparkles className="w-5 h-5 animate-pulse text-purple-400" />
              <span className="text-lg font-semibold">
                Where Innovation Meets Impact
              </span>
              <Sparkles className="w-5 h-5 animate-pulse text-cyan-400" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400/60 rounded-full flex justify-center bg-white/10 backdrop-blur-sm">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Light Background Section */}
      <div className="bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50 text-slate-800">
        <AnimatedSeparator />

        {/* Events Section - Reduced Spacing */}
        <section className="relative pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight py-2">
                Upcoming Events
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Join us at these transformative events shaping the future of
                healthcare technology
              </p>
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <div
                  key={event.id}
                  className={`group relative transform transition-all duration-700 delay-${
                    index * 100
                  } ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  {/* Glassmorphism Card */}
                  <div className="relative h-full p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/60 hover:border-indigo-200/80 transition-all duration-300 hover:transform hover:scale-105 hover:bg-white/80 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10">
                    {/* Status Badge */}
                    <div
                      className={`absolute top-6 right-6 px-4 py-2 rounded-full text-xs font-bold ${
                        event.status === "upcoming"
                          ? "bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-lg"
                          : "bg-gradient-to-r from-slate-300 to-slate-400 text-slate-700 shadow-md"
                      }`}
                    >
                      {event.status === "upcoming" ? "Upcoming" : "Past Event"}
                    </div>

                    {/* Event Icon */}
                    <div className="mb-8 p-4 w-fit bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl text-indigo-600 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {event.icon}
                    </div>

                    {/* Event Details */}
                    <div className="space-y-5 relative z-10">
                      <div className="flex items-center gap-3 text-sm text-indigo-600 font-semibold bg-indigo-50/60 rounded-full px-4 py-2 w-fit">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors duration-300 leading-tight py-1">
                        {event.title}
                      </h3>

                      <div className="flex items-center gap-3 text-sm text-slate-600 bg-slate-50/60 rounded-full px-4 py-2 w-fit">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>

                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-400/20 to-pink-400/20 text-purple-700 rounded-full text-sm font-semibold border border-purple-200/60 shadow-sm">
                        {event.type}
                      </div>

                      <p className="text-slate-600 leading-relaxed font-medium">
                        {event.description}
                      </p>

                      {/* Event Link with Cursor Pointer */}
                      <Link
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group/link cursor-pointer"
                      >
                        <span>Learn More</span>
                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-300 z-0" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <AnimatedSeparator delay={800} />

        {/* CTA Section - Reduced Spacing */}
        <section className="relative py-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div
              className={`transform transition-all duration-1000 delay-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight py-2">
                Ready to Join the Innovation?
              </h2>
              <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
                Be part of the conversation that's reshaping healthcare. Connect
                with visionaries, innovators, and industry leaders at our next
                event.
              </p>
              <Link href={"/contact-us"}>
                <button className="group relative px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl text-white font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25 shadow-xl cursor-pointer">
                  <span className="flex items-center gap-4">
                    Join Our Next Event
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>

                  {/* Button Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10" />
                </button>
              </Link>
            </div>
          </div>

          {/* Background Elements */}
          <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-200/40 to-indigo-200/40 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-200/40 to-pink-200/40 rounded-full blur-3xl" />
        </section>

        {/* Footer Spacing - Reduced */}
        <div className="h-12" />
      </div>
    </div>
  );
};

export default EventsPage;
