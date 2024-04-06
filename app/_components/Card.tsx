import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <div className="tw-w-60 tw-h-48 tw-bg-[#FCF6F5] tw-shadow-md">
      <Link className="tw-w-full tw-h-full tw-block" href={"/autocomplete"}>autocomplete</Link>
    </div>
  );
};

export default Card;
