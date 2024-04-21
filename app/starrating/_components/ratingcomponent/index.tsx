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
                <li style={{"--star-color": index<stars?"yellow":""}} onClick={() => setStars(item)} key={index} className={"five-pointed-star tw-cursor-pointer tw-w-0 tw-h-0"}></li>
              )
            })
          }
        </ul>
        <span className="tw-font-bold tw-text-[20px]">Star Rating Count: {stars}</span>
      </div>
      {/* <div className="five-pointed-star"></div> */}
    </div>
  )
}

export default RatingComponent