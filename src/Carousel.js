"use client";

import { Carousel } from "flowbite-react";
import './Carousel.css'; // Import the CSS file

export default function Component() {
  return (
    <div className="custom-carousel-container">
      <Carousel className="custom-carousel">
        <img className="image-1" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>
  );
}
