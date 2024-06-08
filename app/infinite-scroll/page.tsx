"use client";
import React, { useEffect } from "react";
import Container from "../_components/Container";
import "./style.css";
const Page = () => {
  useEffect(() => {
    const callback = (e) => {
      console.log(e[0].target);
      console.log(e[0].target.parentNode);
      console.log(e[0].target.parentNode.children);
      e[0].target.parentNode.childNodes.forEach(element => {
        e[0].target.parentNode.appendChild(element)
      });
    };
    let options = {
      root: document.querySelector("#scrollArea"),
      rootMargin: "0px",
      threshold: .2,
    };

    let observer = new IntersectionObserver(callback, options);
    let target = document.querySelector(".last-child");
    observer.observe(target);
  }, []);
  return (
    <div>
      <Container>
        <div>
          <h1 className="tw-text-center tw-font-bold tw-text-2xl">
            Infinite scroll
          </h1>
          <div
            id="scrollArea"
            className="tw-border-[2px] tw-border-red-500 tw-p-1 tw-h-[70vh] tw-overflow-y-scroll"
          >
            <div  className="tw-h-9 tw-border-yellow-300 tw-border-2 tw-w-[200px] tw-mb-2">
              div
            </div>
            <div className="tw-h-9 tw-border-yellow-300 tw-border-2 tw-w-[200px] tw-mb-2">
              div
            </div>
            <div className="tw-h-9 tw-border-yellow-300 tw-border-2 tw-w-[200px] tw-mb-2">
              div
            </div>
            <div className="tw-h-9 tw-border-yellow-300 tw-border-2 tw-w-[200px] tw-mb-2">
              div
            </div>
            <div className="tw-h-9 tw-border-yellow-300 tw-border-2 tw-w-[200px] tw-mb-2">
              div
            </div>
            <div className="tw-h-9 tw-border-yellow-300 tw-border-2 tw-w-[200px] tw-mb-2">
              div
            </div>
            <div  className="last-child tw-h-9 tw-border-yellow-300 tw-border-2 tw-w-[200px] tw-mb-2">
              div
            </div>
           
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Page;
