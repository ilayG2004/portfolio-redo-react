import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = [
  { src: "/images/languages/javaicon.png", label: "Java" },
  { src: "/images/languages/python.svg", label: "Python" },
  { src: "/images/languages/csharpicon.png", label: "C#" },
  { src: "/images/languages/javascripticon.png", label: "JavaScript" },
  { src: "/images/languages/reacticon.png", label: "React" },
  { src: "/images/languages/htmlicon.png", label: "HTML" },
  { src: "/images/languages/cssicon.svg", label: "CSS" },
  { src: "/images/languages/giticon.webp", label: "Git" },
  { src: "/images/languages/postgresicon.png", label: "Postgres" },
];

const DISPLAY_COUNT = 3; // Number of images shown at once
const SPEED = 3000; // Time (ms) before switching

const TechnicalCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % images.length);
    }, SPEED);

    return () => clearInterval(interval);
  }, []);

  // Create a sliding array (looping through images)
  const visibleImages = [
    ...images,
    ...images, // Duplicate to create a seamless transition effect
  ].slice(startIndex, startIndex + DISPLAY_COUNT);

  return (
    <div className="technical-carousel">
      <motion.div
        className="carousel-track"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {visibleImages.map((item, index) => (
          <div key={index} className="carousel-item">
            <img src={process.env.PUBLIC_URL + item.src} alt={item.label} />
            <p>{item.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechnicalCarousel;
