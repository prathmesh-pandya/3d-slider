"use client";
import React, { useState, useEffect } from "react";
import Slide from "./Slide";

function mod(a, b) {
  return ((a % b) + b) % b;
}

/**
 *
 * parent
 *      Example
 */
function VerticalCarousel({
  slides,
  offsetRadius,
  showNavigation,
  animationConfig,
}) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const modBySlidesLength = (idx) => {
    return ((idx % slides.length) + slides.length) % slides.length;
  };

  const moveSlide = (direction) => {
    setDirection(direction);
    setIndex((currentIndex) => modBySlidesLength(currentIndex + direction));
  };

  const centerIndex = modBySlidesLength(index);
  const leftIndex = modBySlidesLength(centerIndex - 1);
  const rightIndex = modBySlidesLength(centerIndex + 1);

  const clampOffsetRadius = (offsetRadius) => {
    const upperBound = Math.floor((slides.length - 1) / 2);
    return offsetRadius < 0
      ? 0
      : offsetRadius > upperBound
      ? upperBound
      : offsetRadius;
  };

  // const prathemsh = slides[leftIndex].content;
  // const prathemsh1 = slides[centerIndex].content;
  // const prathemsh2 = slides[rightIndex].content;

  // // console.log(prathemsh, "prathmesh-----------");
  // // console.log(prathemsh1, "prathmesh1-----------");
  // // console.log(prathemsh2, "prathmesh2-----------");

  return (
    <>
      <div
        className="carousel"
        style={{
          height: "100%",
          border: "1px solid black",
          width: "100%",
          background: "red",
          position: "relative",
        }}
      >
        <Slide
          content={slides[leftIndex].content}
          offsetRadius={clampOffsetRadius(offsetRadius)}
          index={-1}
          animationConfig={animationConfig}
          moveSlide={moveSlide}
          direction="left"
        />
        <Slide
          content={slides[centerIndex].content}
          offsetRadius={clampOffsetRadius(offsetRadius)}
          index={0}
          animationConfig={animationConfig}
          moveSlide={moveSlide}
          direction="center"
        />
        <Slide
          content={slides[rightIndex].content}
          offsetRadius={clampOffsetRadius(offsetRadius)}
          index={1}
          animationConfig={animationConfig}
          moveSlide={moveSlide}
          direction="right"
        />
      </div>
      {showNavigation && (
        <div className="navigation">
          <button onClick={() => moveSlide(1)}>prev</button>
          <button onClick={() => moveSlide(-1)}>next</button>
        </div>
      )}
    </>
  );
}

export default VerticalCarousel;
