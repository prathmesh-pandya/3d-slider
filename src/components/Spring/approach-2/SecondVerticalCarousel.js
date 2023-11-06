import React, { useEffect, useState } from "react";
import SecondSlide from "./SecondSlide";
function mod(a, b) {
  return ((a % b) + b) % b;
}
function SecondVerticalCarousel({
  slides,
  offsetRadius,
  showNavigation,
  animationConfig,
}) {
  const [index, setIndex] = useState(0);

  const modBySlidesLength = (idx) => {
    return mod(idx, slides.length);
  };

  const moveSlide = (direction) => {
    setIndex(modBySlidesLength(index + direction));
  };

  const clampOffsetRadius = (offsetRadius) => {
    const upperBound = Math.floor((slides.length - 1) / 2);
    return offsetRadius < 0
      ? 0
      : offsetRadius > upperBound
      ? upperBound
      : offsetRadius;
  };

  const getPresentableSlides = () => {
    let presentableSlides = [];
    for (let i = -offsetRadius; i < 1 + offsetRadius; i++) {
      presentableSlides.push(slides[modBySlidesLength(index + i)]);
    }
    return presentableSlides;
  };



  let navigationButtons = null;
  if (showNavigation) {
    navigationButtons = (
      <div>
        <button onClick={() => moveSlide(-1)}>&#8592;</button>
        <button onClick={() => moveSlide(1)}>&#8594;</button>
      </div>
    );
  }

  return (
    <>
      <div
        className="wrapper"
        style={{
          border: "1px solid black",
          height: "100%",
          width: "700px",
          background: "red",
          position: "relative",
        }}
      >
        {getPresentableSlides().map((slide, presentableIndex) => (
          <SecondSlide
            key={slide.key}
            content={slide.content}
            moveSlide={moveSlide}
            offsetRadius={clampOffsetRadius(offsetRadius)}
            index={presentableIndex}
            animationConfig={animationConfig}
          />
        ))}
      </div>
      {navigationButtons}
    </>
  );
}


SecondVerticalCarousel.defaultProps = {
  offsetRadius: 2,
  animationConfig: { tension: 120, friction: 14 },
};
export default SecondVerticalCarousel;
