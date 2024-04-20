"use client"
import React, { useState } from 'react'
import "./style.css"
const ratingArr = [1, 2, 3, 4, 5];
const RatingComponent = () => {
  const [stars, setStars] = useState(0);
  return (
    <div>
      <div className="tw-min-w-52 tw-text-center">
        <ul className="tw-flex tw-gap-2 tw-justify-between tw-my-3">
          {
            ratingArr.map((item, index) => {
              return (
                <li onClick={() => setStars(item)} key={index} className={"tw-cursor-pointer tw-w-5 tw-h-5 tw-rounded-[50%] tw-border-2 tw-border-red-600" + (index < stars? " tw-bg-lime-500 tw-pointer-events-none": "")}></li>
              )
            })
          }
        </ul>
        <span className="tw-font-bold tw-text-[20px]">Star Rating Count: {stars}</span>
      </div>
    </div>
  )
}

export default RatingComponent