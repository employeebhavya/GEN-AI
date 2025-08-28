"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Upload, Send, FileText } from "lucide-react";

export default function ApplicationModal({ isOpen, onClose, jobTitle }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedinProfile: "",
    coverLetter: "",
  });
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const validateFile = (file) => {
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (file.type !== "application/pdf") {
      setError("Please upload a PDF file only.");
      return false;
    }

    if (file.size > maxSize) {
      setError("File size must be less than 10MB.");
      return false;
    }

    setError("");
    return true;
  };

  const handleFileSelect = (file) => {
    if (validateFile(file)) {
      setUploadedFile(file);
    }
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Reset form and close modal
    setFormData({ name: "", email: "", linkedinProfile: "", coverLetter: "" });
    setUploadedFile(null);
    setError("");
    setIsSubmitting(false);
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleBackdropClick}
          />

          {/* Modal Container */}
          <div className="flex min-h-full items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-y-scroll"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-8 pb-6 border-b border-gray-100">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Apply for Position
                  </h2>
                  <p className="text-gray-600 mt-1">{jobTitle}</p>
                </div>
                <button
                  onClick={onClose}
                  className="rounded-full p-2 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  <X className="h-6 w-6 text-gray-500" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  {/* LinkedIn Profile */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      LinkedIn Profile URL
                    </label>
                    <input
                      type="url"
                      name="linkedinProfile"
                      value={formData.linkedinProfile}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                      placeholder="https://linkedin.com/in/your-profile"
                    />
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
                    {/* Resume Upload */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Resume/CV (PDF) *
                      </label>

                      {/* Hidden file input */}
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf"
                        onChange={handleFileInputChange}
                        className="hidden"
                      />

                      {/* Custom Upload Area */}
                      <div
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}
                        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all ${
                          isDragOver
                            ? "border-blue-500 bg-blue-50"
                            : uploadedFile
                            ? "border-green-500 bg-green-50"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        {uploadedFile ? (
                          <div className="space-y-3">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                              <FileText className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-green-700">
                                {uploadedFile.name}
                              </p>
                              <p className="text-xs text-green-600">
                                {formatFileSize(uploadedFile.size)} • File
                                uploaded successfully
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setUploadedFile(null);
                                setError("");
                                if (fileInputRef.current) {
                                  fileInputRef.current.value = "";
                                }
                              }}
                              className="text-xs text-red-600 hover:text-red-800 underline"
                            >
                              Remove file
                            </button>
                          </div>
                        ) : (
                          <div className="space-y-3">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                              <Upload className="h-6 w-6 text-gray-400" />
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">
                                {isDragOver
                                  ? "Drop your PDF here..."
                                  : "Drag & drop your resume, or click to browse"}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                PDF files only, max 10MB
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Error Message */}
                      {error && (
                        <p className="text-sm text-red-600 mt-2">{error}</p>
                      )}
                    </div>

                    {/* Cover Letter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cover Letter
                      </label>
                      <textarea
                        name="coverLetter"
                        rows={4}
                        value={formData.coverLetter}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none outline-none"
                        placeholder="Tell us why you're excited about this opportunity..."
                      />
                    </div>
                  </div>
                  {/* Submit Button */}
                  <div className="flex justify-end space-x-4 pt-4">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={
                        isSubmitting ||
                        !uploadedFile ||
                        !formData.name ||
                        !formData.email
                      }
                      className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                    >
                      <Send className="h-5 w-5" />
                      <span>
                        {isSubmitting ? "Submitting..." : "Submit Application"}
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
