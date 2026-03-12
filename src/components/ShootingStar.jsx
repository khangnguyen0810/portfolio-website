import { useEffect, useEffectEvent, useState } from "react";

const ShootingStar = () => {
  const [position, setPosition] = useState({ top: "40%", left: "15%" });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const top = Math.random() * 50;
      const left = Math.random() * 50;

      setPosition({ top: `${top}%`, left: `${left}%` });
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 1000);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      {isVisible && (
        <div
          style={{ top: position.top, left: position.left }}
          className="absolute"
        >
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-shooting-star"
          >
            <defs>
              {/* Tail gradient */}
              <linearGradient
                id="shootingStarGradient"
                x1="20"
                y1="20"
                x2="180"
                y2="180"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0" />
                <stop offset="40%" stopColor="#38bdf8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="1" />
              </linearGradient>

              {/* Glow effect */}
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Tail */}
            <path
              d="M20 20 L180 180"
              stroke="url(#shootingStarGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              filter="url(#glow)"
            />

            {/* Star head */}
            <circle
              cx="180"
              cy="180"
              r="4"
              fill="#e0f2fe"
              filter="url(#glow)"
            />
          </svg>
        </div>
      )}
    </>
  );
};

export default ShootingStar;
