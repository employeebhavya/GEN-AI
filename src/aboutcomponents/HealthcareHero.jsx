"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const HealthcareHero = ({ title, description, image, height, imgheight }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const circles = [];
    const colors = [
      "rgba(103, 183, 255, 0.2)",
      "rgba(252, 219, 158, 0.2)",
      "rgba(191, 227, 241, 0.2)",
      "rgba(255, 177, 203, 0.2)",
      "rgba(220, 215, 247, 0.2)",
    ];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create circles
    for (let i = 0; i < 10; i++) {
      circles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 100 + 50,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
      });
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      circles.forEach((circle) => {
        circle.x += circle.speedX;
        circle.y += circle.speedY;

        // Bounce off edges
        if (
          circle.x + circle.radius > canvas.width ||
          circle.x - circle.radius < 0
        ) {
          circle.speedX = -circle.speedX;
        }
        if (
          circle.y + circle.radius > canvas.height ||
          circle.y - circle.radius < 0
        ) {
          circle.speedY = -circle.speedY;
        }

        // Draw circle
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = circle.color;
        ctx.fill();
      });
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div
      className={`relative w-full min-h-[${height}] flex items-center justify-center overflow-hidden pt-[64px] z-0`}
      style={{
        background: "linear-gradient(90deg, #6A4A9A 0%, #A68CFF 100%)",
      }}
    >
      {/* Animated background canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 absolute inset-0 opacity-30 z-[1]"></div>

      <div className="relative z-10 container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-12 lg:pt-0">
          {/* Left Content */}
          <div className="space-y-4">
            <h1 className="text-3xl xl:text-4xl font-bold text-white leading-tight">
              {title}
            </h1>

            <p className="text-sm xl:text-lg font-semibold text-gray-100 leading-relaxed">
              {description}
            </p>

            <button className="bg-primary hover:bg-secondary text-white cursor-pointer text-base px-8 py-2 transition-all duration-300 transform hover:scale-105">
              Get a Demo
            </button>
          </div>
          <div className="relative w-full flex items-end">
            <Image
              src={image}
              alt="Healthcare Hero"
              width={500}
              height={500}
              className={`w-full h-full ${imgheight} object-cover`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareHero;
