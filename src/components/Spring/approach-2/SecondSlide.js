"use client";
import React from "react";
import { useSpring, animated } from "react-spring";
// import "./Slide.css";

function SecondSlide({
  content,
  offsetRadius,
  index,
  moveSlide,
  delta,
  down,
  up,
}) {
  const offsetFromMiddle = index - offsetRadius;
  const totalPresentables = 2 * offsetRadius + 1;
  // const distanceFactor = 1 - Math.abs(offsetFromMiddle / (offsetRadius + 2));
  const distanceFactor = index == 0 || index == 2 ? 0.7 : 1;
  const translateYoffset = 0; // No vertical movement for horizontal slider
  let translateY = 0; // No initial vertical translation

  if (offsetFromMiddle === 0 && down) {
    translateY += delta[1] / (offsetRadius + 1);
    if (translateY > -40) {
      moveSlide(-1);
    }
    if (translateY < -100) {
      moveSlide(1);
    }
  }
  if (offsetFromMiddle > 0) {
    translateY += translateYoffset;
  } else if (offsetFromMiddle < 0) {
    translateY -= translateYoffset;
  }

  const zIndex = offsetFromMiddle === 0 ? 2 : 1; // Higher z-index for the center image
  const props = useSpring({
    transform: `translateX(${translateY}%) translateY(-50%) scale(${distanceFactor}) rotateY(-35deg) perspective(1000px) `,
    left: `${22 + (offsetFromMiddle * 40) / offsetRadius}%`, // Horizontal positioning
    config: {
      tension: 160,
      friction: 13.0,
    },
  });

  return (
    <animated.div style={props} className="carousel-item">
      <div onClick={() => moveSlide(offsetFromMiddle)}>{content}</div>
    </animated.div>
  );
}

export default SecondSlide;
