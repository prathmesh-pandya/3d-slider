"use client";
import React from "react";
import { useSpring, animated } from "react-spring";

import "./Slide.css";
function Slide({
  content,
  offsetRadius,
  index,
  animationConfig,
  moveSlide,
  direction,
}) {
  const offsetFromMiddle = index;
  const isCenter = direction === "center";

  let translateX = isCenter ? 0 : offsetFromMiddle === -1 ? -100 : 100;
  let rotateY = isCenter ? 0 : offsetFromMiddle === -1 ? -45 : 45;
  let scale;
  let left;
  const transformFrom = (direction) => {
    switch (direction) {
      case "left":
        return {
          transform: `translateY(-50%) translateX(-50%) scale(0.5) perspective(1000px) rotateY(-35deg) `,
          left: "0%",
          opacity: 1,
          zIndex: 0,
          transition: "1s ease-out",
        };
      case "right":
        return {
          transform: `translateY(-50%) translateX(-75%) scale(0.5) perspective(1000px) rotateY(35deg) `,
          left: "100%",
          opacity: 1,
          zIndex: 0,
          transition: "1s ease-out",
        };
      default:
        return {
          transform: `translateY(-50%) translateX(-50%) scale(1) `,
          left: "50%",
          opacity: 1,
          zIndex: 1,
          transition: "1s ease-out",
        };
    }
  };

  const transformTo = {
    transform: `translateY(-50%) translateX(-50%) scale(1) perspective(1000px) rotateY(0deg)`,
    left: "50%",
    opacity: 1,
    zIndex: 1,
    transition: "1s ease-out",
  };

  // const transformFrom = {
  //   left: `${50 + (offsetFromMiddle * 50) / offsetRadius}%`,
  //   opacity: 1,
  // };

  // const transformTo = {
  //   transform: `translateX(${translateX}%) translateY(25%) perspective(1000px) rotateY(${rotateY}deg)`,
  // };

  const props = useSpring({
    from: transformFrom(direction),
    to: transformTo,
    config: animationConfig,
  });

  return (
    <animated.div style={props} className="carousel-item">
      {content}
    </animated.div>
  );
}

export default Slide;
