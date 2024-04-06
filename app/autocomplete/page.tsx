import React from "react";
import Autocomplete from "./_components/Autocomplete";
const Page = () => {
  return (
    <div className="tw-max-w-7xl tw-m-auto tw-p-2">
      {/* In this autocomplete components i will pass the options, those will be shown when any user search
        through the the search bar */}
        <span className="tw-font-bold tw-text-center tw-block tw-text-xl">Autocomplete</span>
        <p className="tw-text-center">To see the demo. You can just start type p in input box</p>
      <Autocomplete
        options={[
          "Papaya",
          "Persimmon",
          "Paw Paw",
          "Prickly Pear",
          "Peach",
          "Pomegranate",
          "Pineapple",
        ]}
      />
    </div>
  );
};

export default Page;
