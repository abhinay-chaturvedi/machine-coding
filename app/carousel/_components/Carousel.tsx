import React from "react";
import CarouselItem from "./CarouselItem";
import CarouselButton from "./CarouselButton";
import "./style.css"
import Image from "next/image";
const Carousel = () => {
  return (
    <div className="tw-bg-green-600 tw-relative tw-h-[90vh]">
      <CarouselItem dActive={true} imgUrl="/images/carousel-1.png" />
      {/* <Image className="slide" data-active objectFit="cover" src={"/images/carousel-1.png" } fill alt="img" /> */}
      <CarouselItem dActive={false} imgUrl="/images/carousel-2.png" />
      {/* <Image className="slide" objectFit="cover" src={"/images/carousel-2.png" } fill alt="img" /> */}
      <CarouselItem dActive={false} imgUrl="/images/carousel-3.png" />
      {/* <Image className="slide" objectFit="cover" src={"/images/carousel-3.png" } fill alt="img" /> */}
      <CarouselButton/>
    </div>
  );
};

export default Carousel;
