'use client';
import React from 'react';
import { useSpring, animated } from 'react-spring';
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
  console.log(index, 'index============');
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
  let rotateY;
  if (index == 0) {
    rotateY = 35;
  }
  if (index == 1) {
    rotateY = 0;
  }
  if (index == 2) {
    rotateY = -35;
  }
  let perspective = index == 0 || index == 2 ? 1000 : 0;
  const props = useSpring({
    transform: `translateX(${translateY}%) translateY(-50%) scale(${distanceFactor}) rotateY(${rotateY}deg) perspective(${perspective}px) `,
    left: `${50 + (offsetFromMiddle * 50) / offsetRadius}%`, // Horizontal positioning
    zIndex: index === 1 ? 1 : 0,
    config: {
      tension: 160,
      friction: 13.0,
      duration: 1000,
    },
  });

  return (
    <animated.div style={props} className='carousel-item'>
      <div onClick={() => moveSlide(offsetFromMiddle)}>{content}</div>
    </animated.div>
  );
}

export default SecondSlide;
