// pages/event/[slug].js or app/event/[slug]/page.js
"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Presentation,
  Share2,
  Linkedin,
  Twitter,
  Mail,
  ArrowRight,
  Phone,
  Globe,
} from "lucide-react";
import Image from "next/image";

const EventInnerPage = () => {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const scaleOnHover = {
    whileHover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  const buttonHover = {
    whileHover: {
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
      transition: { duration: 0.2 },
    },
    whileTap: { scale: 0.95 },
  };

  // Sample data
  const eventData = {
    title: "FiTEN Convention in Raleigh, North Carolina",
    date: "July 3, 2025",
    location: "Raleigh, NC",
    description:
      "Join GenAI Healthcare at the FiTEN Convention, where industry leaders discuss how AI is revolutionizing patient care.",
    agenda: [
      {
        day: "Day 1",
        title: "Keynote: The Future of AI in Healthcare",
        time: "9:00 AM",
        icon: Presentation,
      },
      {
        day: "Day 2",
        title: "Interactive Workshops & Case Studies",
        time: "10:00 AM",
        icon: Users,
      },
      {
        day: "Day 3",
        title: "Networking & Closing Ceremony",
        time: "2:00 PM",
        icon: Clock,
      },
    ],
    speakers: [
      {
        name: "Dr. John Doe",
        role: "AI Researcher",
        image:
          "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
      },
      {
        name: "Jane Smith",
        role: "Healthcare Innovator",
        image:
          "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    upcomingEvents: [
      {
        title: "Financial Express Healthcare Summit & Awards",
        date: "June 25, 2025",
      },
      { title: "TiE Atlanta Monthly Meeting", date: "June 11, 2025" },
      { title: "Venture Atlanta 2025 PitchFest", date: "June 10, 2025" },
    ],
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=1080&fit=crop"
            alt="Conference Hero"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Enhanced Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-10" />

        {/* Hero Content */}
        <motion.div
          className="relative z-20 container"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div className="max-w-3xl">
            <motion.h1
              className="text-2xl md:text-3xl xl:text-5xl font-bold text-white mb-6 leading-tight"
              variants={fadeInUp}
            >
              {eventData.title}
            </motion.h1>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 mb-8 text-white/90"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-blue-400" />
                <span className="text-lg">{eventData.date}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-blue-400" />
                <span className="text-lg">{eventData.location}</span>
              </div>
            </motion.div>

            <motion.p
              className="text-xl text-white/80 mb-10 leading-relaxed"
              variants={fadeInUp}
            >
              {eventData.description}
            </motion.p>

            <motion.button
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white font-semibold text-lg hover:bg-white/20 transition-all duration-300"
              variants={fadeInUp}
              {...buttonHover}
            >
              Register Now
            </motion.button>
          </div>
        </motion.div>
      </motion.section>

      {/* Main Content - Light Background */}
      <div className="bg-gray-50 min-h-screen py-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Event Overview */}
              <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Event Overview
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The FiTEN Convention brings together leading minds in
                    healthcare technology to explore the revolutionary impact of
                    artificial intelligence on patient care. This three-day
                    event features keynote presentations, interactive workshops,
                    and networking opportunities with industry pioneers.
                  </p>
                </div>
              </motion.section>

              {/* Agenda Section */}
              <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  Event Agenda
                </h2>
                <div className="space-y-6">
                  {eventData.agenda.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-6 p-6 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                        y: -5,
                      }}
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-4 mb-2">
                          <span className="text-blue-600 font-semibold">
                            {item.day}
                          </span>
                          <span className="text-gray-500 text-sm">
                            {item.time}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {item.title}
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Speakers Section */}
              <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  Featured Speakers
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {eventData.speakers.map((speaker, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 text-center shadow-lg"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                      }}
                    >
                      <div className="relative w-24 h-24 mx-auto mb-4">
                        <Image
                          src={speaker.image}
                          alt={speaker.name}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {speaker.name}
                      </h3>
                      <p className="text-blue-600">{speaker.role}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Gallery Section */}
              <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  Event Gallery
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop",
                  ].map((src, index) => (
                    <motion.div
                      key={index}
                      className="relative h-48 rounded-xl overflow-hidden shadow-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                      }}
                    >
                      <Image
                        src={src}
                        alt={`Gallery image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            </div>

            {/* Right Column - Sidebar */}
            <motion.aside
              className="lg:sticky lg:top-8 lg:self-start space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Event Details Card */}
              <motion.div
                className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-lg"
                variants={fadeInRight}
                whileHover={{
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                  y: -5,
                }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Event Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">July 3, 2025</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">
                      Raleigh Convention Center
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">fitenconvention.com</span>
                  </div>
                </div>
              </motion.div>

              {/* Upcoming Events Card */}
              <motion.div
                className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-lg"
                variants={fadeInRight}
                whileHover={{
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                  y: -5,
                }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Upcoming Events
                </h3>
                <div className="space-y-4">
                  {eventData.upcomingEvents.map((event, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      <div>
                        <p className="text-gray-900 font-medium text-sm">
                          {event.title}
                        </p>
                        <p className="text-gray-500 text-xs">{event.date}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Share Event Card */}
              <motion.div
                className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-lg"
                variants={fadeInRight}
                whileHover={{
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                  y: -5,
                }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Share Event
                </h3>
                <div className="flex gap-4">
                  {[
                    {
                      icon: Linkedin,
                    },
                    {
                      icon: Twitter,
                    },
                    { icon: Mail },
                  ].map((social, index) => (
                    <motion.button
                      key={index}
                      className={`p-3 bg-gray-100 rounded-xl border border-gray-200 transition-all duration-300 hover:bg-gray-300 cursor-pointer`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5 text-gray-700" />
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </motion.aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventInnerPage;
