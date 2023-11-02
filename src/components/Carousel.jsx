'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Carousel from 'react-spring-3d-carousel';
import { config } from 'react-spring';
import '../../public/styles/carousel.css';
const CarouselComponent = () => {
  const [goToSlide, setGoToSlide] = useState(0);
  const [confi, setConfig] = useState('gentle');
  const slides = [
    {
      key: 1,
      content: (
        <Image
          src='https://mcprod.hnak.com/media/mobilesuite/categoryslider/Adidas_-_Web.jpg'
          alt='1'
          width={400}
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
          width={400}
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
          width={400}
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
          width={400}
          height={400}
        />
      ),
    },
  ];

  return (
    <>
      <div className='slider-3d-container' style={{ width: '650px', height: '600px', margin: '0 auto' }}>
        <Carousel
          goToSlide={goToSlide}
          slides={slides}
          animationConfig={config.slow}
          offsetRadius={4}
        />
        <button
          className='prev-btn-3d-slider'
          onClick={() => setGoToSlide(goToSlide - 1)}
        >
          Prev
        </button>
        <button
          className='next-btn-3d-slider'
          onClick={() => setGoToSlide(goToSlide + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default CarouselComponent;
