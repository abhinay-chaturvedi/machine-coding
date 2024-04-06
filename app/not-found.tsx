import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="tw-max-w-7xl tw-h-full tw-m-auto tw-p-2">
      <div className="tw-flex tw-h-full tw-justify-center tw-items-center">
        <div className="tw-flex tw-flex-col tw-items-center tw-gap-1">
          <span >
            Sorry the page you want does not exist, try exploring something
            else.
          </span>
          <Link className="tw-bg-gray-700 tw-rounded-md tw-p-2 tw-text-white" href={"/"}>Go to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
