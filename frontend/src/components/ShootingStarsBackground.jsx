import React from "react";
import "./ShootingStars.css"; // Add your shooting stars CSS here

const ShootingStarsBackground = () => {
  return (
    <div id="background-container">
      <div className="night">
        {Array.from({ length: 50 }).map((_, index) => (
          <div
            className="shooting_star"
            key={index}
            style={{
              animationDuration: `${Math.random() * 3 + 2}s`, // Randomize speed
              animationDelay: `${Math.random() * 2}s`, // Randomize delay
              top: `${Math.random() * 100}vh`, // Randomize starting position vertically
              left: `${Math.random() * 100}vw`, // Randomize starting position horizontally
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ShootingStarsBackground;
