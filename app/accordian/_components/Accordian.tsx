"use client"
import React, { useState } from "react";
import { data } from "../data";
import AccordianCard from "./AccordianCard";
const Accordian = () => {
    const [openCard, setOpenCard] = useState(-1);
  return (
    <div className="tw-flex tw-flex-col tw-gap-4 tw-max-w-2xl tw-m-auto">
      {data.map((item: { title: string; desc: string }, index: number) => {
        return (
          <AccordianCard
            isOpen={openCard == index}
            item={item}
            cardNumber={index + 1}
            key={index}
            onClick={() => setOpenCard((prev) => ((prev == index)? -1: index))}
          />
        );
      })}
    </div>
  );
};

export default Accordian;
