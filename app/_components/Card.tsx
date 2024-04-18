import Link from "next/link";
import React from "react";

const Card = ({ title, page }: { title: string; page: string }) => {
  return (
    <div className="tw-w-60 tw-h-48 tw-bg-[#101820] tw-shadow-md tw-rounded-md">
      <Link className="tw-w-full tw-h-full tw-block tw-text-white" href={page}>
        <div className="tw-flex tw-justify-center tw-items-center tw-h-full">
          {title}
        </div>
      </Link>
    </div>
  );
};

export default Card;
