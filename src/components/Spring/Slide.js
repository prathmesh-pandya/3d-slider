import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Slide.css';

function Slide({ content, offsetRadius, index }) {
  const offsetFromMiddle = index - offsetRadius;
  const left = `${50 + (offsetFromMiddle * 50) / offsetRadius}%`;
  const translateY = 0;
  const distanceFactor = index == 0 || index == 2 ? 0.7 : 1;
  const zIndex = index == 0 || index == 2 ? 0 : 1;
  // const transformFrom = {
  //   left,
  //   opacity: 1,
  //   zIndex,
  //   transform: transformFromSwitchCase(direction),
  // };

  // const transformTo = {
  //   left: '50%',
  //   opacity: 1,
  //   zIndex,
  //   transform: transformToSwitchCase(direction),
  // };

  // transformToSwitchCase
  // const transformTo = {
  //   transform: `translateY(-50%) translateX(${translateY}%) scale(${scale}) perspective(1000px) rotateY(${rotateY}deg)`,
  // };
  const rotateY = index == 0 ? -35 : index == 2 ? 35 : 0;
  const props = useSpring({
    transform: `translateX(-50%) translateY(-50%) scale(${distanceFactor}) perspective(1000px) rotateY(${rotateY}deg) `,
    zIndex,
    left,
    config: {
      tension: 700,
    },
  });

  return (
    <animated.div style={props} className='carousel-item'>
      {content}
    </animated.div>
  );
}

export default Slide;
