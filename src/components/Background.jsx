import React, { useEffect, useState } from "react";
import ShootingStar from "./ShootingStar";

const Background = ({ children }) => {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);

  useEffect(() => {
    const generateStar = () => {
      const starCount = 500;
      const shootingStarCount = 10;

      const newStars = [];
      for (let i = 0; i < starCount; i++) {
        const duration = Math.random() * 3 + 2;
        const startPosition = Math.random();
        const animationDelay = -(startPosition * duration);

        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 6 + 1,
          animationDelay: animationDelay,
          duration: duration,
        });
      }

      const newShootingStars = [];
      for (let i = 0; i < shootingStarCount; i++) {
        newShootingStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100, // Keep them in upper half for better visibility
          duration: Math.random() * 2 + 1, // 1-3 seconds
          angle: Math.random() * 30 + 30, // 30-60 degrees for diagonal movement
        });
      }

      setStars(newStars);
      setShootingStars(newShootingStars);
    };
    generateStar();
  }, []);

  return (
    <>
      <div className="bg-purple-gradient fixed inset-0 overflow-hidden">
        {/* Regular twinkling stars */}
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animation: `twinkle ${star.duration}s ease-in-out infinite`,
              animationDelay: `${star.animationDelay}s`,
            }}
          >
            <img
              src="star.png"
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
        ))}

        {/* Shooting stars */}
        <ShootingStar />
      </div>
      <div className="relative z-10 min-h-screen">{children}</div>
    </>
  );
};

export default Background;
