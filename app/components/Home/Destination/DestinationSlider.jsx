"use client";
import { destinationData } from "@/app/data/data";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1324, min: 765 }, 
    items: 2,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
  },
};

const DestinationSlider = () => {
  return (
    <Carousel
      responsive={responsive}
      infinite
      autoPlay
      autoPlaySpeed={5000}
      keyBoardControl
    >
      {destinationData.map((data) => (
        <div key={data.id} className="m-3">
          <div className="relative h-100">
            {/* overlay */}
            <div className="absolute inset-0 bg-black opacity-25 rounded-lg z-10"></div>
            {/* image */}
            <Image
              src={data.image}
              alt={`${data.country} destination image`}
              width={500}
              height={500}
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
            <h1 className="text-lg font-semibold mt-4">{data.country}</h1>
            <p className="text-sm text-gray-600">{data.travelers} Travellers</p>
        </div>
      ))}
    </Carousel>
  );
};

export default DestinationSlider;
