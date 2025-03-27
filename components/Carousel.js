"use client";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const images = ["/carousel1.jpg", "/carousel2.jpg", "/carousel3.jpg"];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const changeSlide = (next = true) => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (next ? (prev + 1) % images.length : (prev - 1 + images.length) % images.length));
      setFade(false);
    }, 300); // 300ms animatsiya
  };

  // Avtomatik o'zgarish (har 5 soniyada)
  useEffect(() => {
    const interval = setInterval(() => changeSlide(), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
      <div className={`transition-opacity duration-300 ${fade ? "opacity-0" : "opacity-100"}`}>
        <Image
          src={images[currentIndex]}
          alt="Carousel Image"
          width={800}
          height={400}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>
      <button
        onClick={() => changeSlide(false)}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 p-3 bg-black text-white rounded-full transition-transform hover:scale-110"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={() => changeSlide(true)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-3 bg-black text-white rounded-full transition-transform hover:scale-110"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
