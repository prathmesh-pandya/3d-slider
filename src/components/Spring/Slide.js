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

  const left = `${50 + (offsetFromMiddle * 50) / offsetRadius}%`;
  const translateY = isCenter ? -50 : -50;
  const scale = isCenter ? 1 : 0.5;
  const rotateY = isCenter ? 0 : direction === "left" ? -35 : 35;

  const transformFrom = {
    left,
    opacity: 1,
  };

  const transformTo = {
    transform: `translateY(${translateY}%) translateX(-50%) scale(${scale}) perspective(1000px) rotateY(${rotateY}deg)`,
  };

  const props = useSpring({
    from: transformFrom,
    to:  transformTo,
    config: animationConfig,
  });

  return (
    <animated.div style={props} className="carousel-item">
      {content}
    </animated.div>
  );
}

export default Slide;
