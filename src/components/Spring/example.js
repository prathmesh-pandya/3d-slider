"use client";
import React, { useState } from "react";
import VerticalCarousel from "./VerticalCarousel";
import Image from "next/image";
import SecondVerticalCarousel from "./approach-2/SecondVerticalCarousel";
import { config } from "react-spring";

const slides = [
  {
    key: 1,
    content: (
      <Image
        src="https://mcprod.hnak.com/media/mobilesuite/categoryslider/Adidas_-_Web.jpg"
        alt="1"
        width={400}
        height={400}
      />
    ),
  },
  {
    key: 2,
    content: (
      <Image
        src="https://mcprod.hnak.com/media/mobilesuite/categoryslider/Nike_-_Web.jpg"
        alt="2"
        width={400}
        height={400}
      />
    ),
  },
  {
    key: 3,
    content: (
      <Image
        src="https://mcprod.hnak.com/media/mobilesuite/categoryslider/Under_Armour_-_Web3.jpg"
        alt="3"
        width={400}
        height={400}
      />
    ),
  },
  {
    key: 4,
    content: (
      <Image
        src="https://mcprod.hnak.com/media/mobilesuite/categoryslider/Austin_Reed_-_Web3.jpg"
        alt="4"
        width={400}
        height={400}
      />
    ),
  },
  // {
  //   key:5,
  //   content:(
  //     <Image
  //     src="https://mcprod.hnak.com/media/mobilesuite/banner/Web_Iphone_15_Pro_-_WB_5.jpg"
  //     alt="5"
  //     width={400}
  //     height={400}
  //     />
  //   )
  // }
];

function Example() {
  const [goToSlide] = useState(0);
  const [offsetRadius] = useState(1);
  const [showNavigation] = useState(true);
  const config = useState({
    friction: 5, // Lower values make it bouncier and faster
    tension: 140, // Lower values make it faster
  });
  return (
    <>
      {/* <SecondVerticalCarousel
        slides={slides}
        offsetRadius={offsetRadius}
        showNavigation={showNavigation}
        animationConfig={config}
      /> */}
      <VerticalCarousel
        slides={slides}
        offsetRadius={offsetRadius}
        showNavigation={showNavigation}
        animationConfig={config}
      />
    </>
  );
}

export default Example;
