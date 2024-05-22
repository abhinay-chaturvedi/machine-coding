import Image from "next/image";
import React from "react";

const CarouselItem = ({
  imgUrl,
  dActive,
}: {
  imgUrl: string;
  dActive: boolean;
}) => {
  return (
    <>
      {dActive ? (
        <Image
          className="slide"
          data-active={dActive}
          objectFit="cover"
          src={imgUrl}
          fill
          alt="img"
        />
      ) : (
        <Image
          className="slide"
          objectFit="cover"
          src={imgUrl}
          fill
          alt="img"
        />
      )}
    </>
  );
};

export default CarouselItem;
