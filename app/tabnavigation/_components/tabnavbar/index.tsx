"use client";
import React, { useState } from "react";
const navArr = ["Home", "About", "Contact", "Blog", "Service"];
const TabNavbar = () => {
  const [tab, setTab] = useState("home");
  return (
    <div className="tw-px-3">
      <div className="tw-h-12 tw-bg-black tw-text-white tw-gap-2 tw-flex tw-justify-between tw-items-center">
        {navArr.map((item, index) => {
          return (
            <div
              onClick={() => setTab(item.toLowerCase())}
              className="tw-border-white tw-flex tw-items-center tw-cursor-pointer tw-border-r-2 tw-flex-1 tw-h-full"
              key={index}
            >
              <span>{item}</span>
            </div>
          );
        })}
      </div>
      <div className="tw-bg-slate-200 tw-p-3">
        {renderTabComponent(tab)}
      </div>
    </div>
  );
};

export default TabNavbar;

const renderTabComponent = (tab: string) => {
  switch(tab) {
    case "home": {
      return (
        <div>Hello from the <b> home </b> page</div>
      )
    }
    case "about": {
      return (
        <div>
          hello from the <b> about</b> page
        </div>
      )
    }
    case "contact": {
      return (
        <div>hello from <b> contact </b> page</div>
      )
    }
    case "service": {
      return (
        <div>Hello from <b> service </b> page</div>
      )
    }
    case "blog": {
      return (
        <div>Hello from the <b> blog</b> page</div>
      )
    }
    default: {
      return (
        <div>hello from the default</div>
      )
    }
  }
}