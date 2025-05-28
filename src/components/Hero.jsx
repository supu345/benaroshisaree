import React, { useEffect, useState } from "react";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/20190305/pexels-photo-20190305/free-photo-of-portrait-of-woman-in-traditional-clothing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Forest Path",
      description: "A serene path through the autumn forest",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/28293024/pexels-photo-28293024/free-photo-of-a-couple-in-traditional-indian-attire.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Mountain Lake",
      description: "Crystal clear mountain lake with perfect reflections",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/32285696/pexels-photo-32285696/free-photo-of-traditional-indian-dance-performance-with-elegant-attire.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Sunset Valley",
      description: "Golden hour in the mountain valley",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/7176348/pexels-photo-7176348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Foggy Mountains",
      description: "Misty morning in the mountains",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative max-w-7xl w-full mx-auto group">
      {/* Slider */}
      <div className="relative h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full transition-opacity duration-700 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
              <h2 className="text-white text-3xl font-bold mb-2">
                {slide.title}
              </h2>
              <p className="text-gray-200">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white w-11 h-11 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50"
      >
        &larr;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white w-11 h-11 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50"
      >
        &rarr;
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-2 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
