"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Calendar, MapPin, Clock, ArrowRight, X } from "lucide-react";
import { events } from "@/data/events";

const FILTERS = ["All", "Upcoming", "Ended"];

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentDate] = useState(new Date("2025-08-25")); // Using the system date

  // Calculate event status and temporal distance
  const enrichedEvents = useMemo(() => {
    return events.map((event) => {
      const eventDate = new Date(event.date);
      const isUpcoming = eventDate > currentDate;
      const daysDifference =
        Math.abs(eventDate - currentDate) / (1000 * 60 * 60 * 24);

      return {
        ...event,
        status: isUpcoming ? "upcoming" : "ended",
        daysDifference,
        eventDate,
      };
    });
  }, [currentDate]);

  // Filter events based on active filter
  const filteredEvents = useMemo(() => {
    if (activeFilter === "All") return enrichedEvents;
    if (activeFilter === "Upcoming")
      return enrichedEvents.filter((e) => e.status === "upcoming");
    if (activeFilter === "Ended")
      return enrichedEvents.filter((e) => e.status === "ended");
    return enrichedEvents;
  }, [enrichedEvents, activeFilter]);

  // Sort events by date
  const sortedEvents = useMemo(() => {
    return [...filteredEvents].sort((a, b) => a.eventDate - b.eventDate);
  }, [filteredEvents]);

  // Calculate timeline positions
  const getTimelinePosition = (event) => {
    const maxDays = Math.max(...enrichedEvents.map((e) => e.daysDifference));
    const position =
      event.status === "upcoming"
        ? 50 + (event.daysDifference / maxDays) * 40
        : 50 - (event.daysDifference / maxDays) * 40;
    return Math.max(5, Math.min(95, position));
  };

  const closeEventDetail = () => setSelectedEvent(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") closeEventDetail();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 p-6 bg-white/80 backdrop-blur-sm border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Events Timeline
          </h1>
          <p className="text-gray-600 mb-6">
            Navigate through time to discover our upcoming and past events
          </p>

          {/* Filter Pills */}
          <div className="flex gap-2">
            {FILTERS.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Desktop Timeline */}
      <div className="hidden md:block relative h-screen pt-20">
        <motion.div
          key={activeFilter}
          initial={{
            opacity: 0,
            x:
              activeFilter === "Upcoming"
                ? 100
                : activeFilter === "Ended"
                ? -100
                : 0,
          }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="relative h-full"
        >
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 transform -translate-y-1/2" />

          {/* NOW Indicator */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              NOW
            </div>
            <div className="absolute top-1/2 left-1/2 w-0.5 h-20 bg-red-500 transform -translate-x-1/2 -translate-y-1/2" />
          </motion.div>

          {/* Event Nodes */}
          {sortedEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className="absolute top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
              style={{ left: `${getTimelinePosition(event)}%` }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: selectedEvent?.id === event.id ? 1.2 : 1,
                opacity: 1,
              }}
              transition={{ delay: index * 0.1, type: "spring" }}
              onClick={() => setSelectedEvent(event)}
              whileHover={{ scale: 1.1 }}
            >
              <div
                className={`w-6 h-6 rounded-full border-4 ${
                  event.status === "upcoming"
                    ? "bg-blue-500 border-blue-200"
                    : "bg-gray-400 border-gray-200"
                } shadow-lg`}
              />

              <motion.div
                className={`absolute top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap ${
                  selectedEvent?.id === event.id ? "opacity-0" : "opacity-100"
                }`}
                animate={{ opacity: selectedEvent?.id === event.id ? 0 : 1 }}
              >
                <div className="bg-white px-3 py-1 rounded shadow-md text-sm font-medium max-w-40 truncate">
                  {event.title}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Mobile Timeline (Vertical) */}
      <div className="md:hidden p-6">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative"
        >
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300" />

          {/* NOW Indicator */}
          <motion.div
            className="relative flex items-center mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg z-10">
              NOW
            </div>
            <div className="flex-1 h-0.5 bg-red-500 ml-4" />
          </motion.div>

          {/* Event Nodes */}
          <div className="space-y-6">
            {sortedEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className="flex items-start cursor-pointer"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedEvent(event)}
              >
                <div
                  className={`w-6 h-6 rounded-full border-4 ${
                    event.status === "upcoming"
                      ? "bg-blue-500 border-blue-200"
                      : "bg-gray-400 border-gray-200"
                  } shadow-lg flex-shrink-0 relative z-10`}
                />

                <div className="ml-4 bg-white p-4 rounded-lg shadow-md flex-1">
                  <h3 className="font-semibold text-gray-900">{event.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(event.date).toLocaleDateString()}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Event Detail Panel */}
      <AnimatePresence>
        {selectedEvent && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={closeEventDetail}
            />

            {/* Detail Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl mx-4"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                {/* Close Button */}
                <button
                  onClick={closeEventDetail}
                  className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Event Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={selectedEvent.imageUrl}
                    alt={selectedEvent.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Event Content */}
                <div className="p-6">
                  <div
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                      selectedEvent.status === "upcoming"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {selectedEvent.status === "upcoming" ? "Upcoming" : "Ended"}
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {selectedEvent.title}
                  </h2>

                  <p className="text-gray-600 mb-6">
                    {selectedEvent.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="w-5 h-5 mr-3 text-gray-400" />
                      <span>
                        {new Date(selectedEvent.date).toLocaleDateString(
                          "en-US",
                          {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Clock className="w-5 h-5 mr-3 text-gray-400" />
                      <span>{selectedEvent.time}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="w-5 h-5 mr-3 text-gray-400" />
                      <span>{selectedEvent.location}</span>
                    </div>
                  </div>

                  {selectedEvent.status === "upcoming" && (
                    <motion.button
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center group hover:bg-blue-700 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Register Now
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
