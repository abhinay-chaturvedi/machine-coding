"use client";
import React, { useEffect } from "react";

const CarouselButton = () => {
  useEffect(() => {
    const buttons = document.querySelectorAll("[data-carousel-button]") as NodeListOf<HTMLElement>;
    
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        // const slides = button
        //   .closest("[data-carousel]")
        //   .querySelector("[data-slides]");
        const slidesNodeList = document.querySelectorAll(".slide") as NodeListOf<HTMLElement>;
        const slides = Array.from(slidesNodeList);
        const activeSlide = document.querySelector("[data-active]") as HTMLElement;
        if(!activeSlide) return;
        let newIndex = slides.indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.length - 1;
        if (newIndex >= slides.length) newIndex = 0;

        slides[newIndex].dataset.active = "true";
        delete activeSlide.dataset.active;
      });
    }, []);
  });
  return (
    <>
      <button className="carousel-button prev" data-carousel-button="prev">
        &#8656;
      </button>
      <button className="carousel-button next" data-carousel-button="next">
        &#8658;
      </button>
    </>
  );
};

export default CarouselButton;
