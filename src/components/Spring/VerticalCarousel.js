'use client';
import React, { useState, useEffect } from 'react';
import Slide from './Slide';

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

  const modBySlidesLength = (idx) => {
    return ((idx % slides.length) + slides.length) % slides.length;
  };

  const moveSlide = (direction) => {
    setIndex((currentIndex) => modBySlidesLength(currentIndex + direction));
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

  const presentableSlides = getPresentableSlides();

  return (
    <>
      <div
        className='carousel'
        style={{
          height: '100%',
          border: '1px solid black',
          width: '100%',
          background: 'red',
          position: 'relative',
        }}
      >
        {presentableSlides.map((slide, presentableIndex) => (
          <Slide
            key={slide.key}
            content={slide.content}
            moveSlide={moveSlide}
            offsetRadius={clampOffsetRadius(offsetRadius)}
            index={presentableIndex}
            animationConfig={animationConfig}
          />
        ))}
      </div>
      {showNavigation && (
        <div className='navigation'>
          <button onClick={() => moveSlide(-1)}>prev</button>
          <button onClick={() => moveSlide(1)}>next</button>
        </div>
      )}
    </>
  );
}

export default VerticalCarousel;
