'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

import './example2.css';
import {
  LoginLink,
  RegisterLink,
} from '@kinde-oss/kinde-auth-nextjs/components';
const slides = [
  {
    key: 1,
    content: (
      <Image
        src='https://mcprod.hnak.com/media/mobilesuite/categoryslider/Adidas_-_Web.jpg'
        alt='1'
        width={200}
        height={400}
      />
    ),
  },
  {
    key: 2,
    content: (
      <Image
        src='https://mcprod.hnak.com/media/mobilesuite/categoryslider/Nike_-_Web.jpg'
        alt='2'
        width={200}
        height={400}
      />
    ),
  },
  {
    key: 3,
    content: (
      <Image
        src='https://mcprod.hnak.com/media/mobilesuite/categoryslider/Under_Armour_-_Web3.jpg'
        alt='3'
        width={200}
        height={400}
      />
    ),
  },
  {
    key: 4,
    content: (
      <Image
        src='https://mcprod.hnak.com/media/mobilesuite/categoryslider/Austin_Reed_-_Web3.jpg'
        alt='4'
        width={200}
        height={400}
      />
    ),
  },
];

const Interpolate = () => {
  const [index, setIndex] = useState(1);
  const transitions = useTransition(index, {
    from: {
      // transform: "translateX(-100%) rotateY(-35deg) scale(1.5)",
      opacity: 0,
      scale: 0.5,
      transform: 'translateX(0%) rotateY(0deg)',
    },
    enter: {
      //  transform: "translateX(0) rotateY(0deg) scale(1)",
      opacity: 1,
      scale: 0.9,
      transform: 'translateX(50%) rotateY(20deg)',
    },
    leave: {
      // transform: "translateX(100%) rotateY(35deg) scale(1.5)",
      opacity: 0.5,
      scale: 1.3,
      transform: 'translateX(100%) rotateY(90deg)',
    },
  });

  const next = () => {
    setIndex((state) => (state + 1) % slides.length);
  };

  const prev = () => {
    setIndex((state) => (state - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      <div className='carousel'>
        {transitions(
          (styles, item) =>
            item && (
              <animated.div className='carousel-item'>
                {slides[item].content}
              </animated.div>
            )
        )}
      </div>
      <RegisterLink>Register here dfsdafasd</RegisterLink>
      <div></div>
      <LoginLink>Login</LoginLink>
      <button onClick={prev}>Previous</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Interpolate;
