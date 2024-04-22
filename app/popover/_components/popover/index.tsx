"use client";
import React, { useState } from "react";
import Modal from "./Modal";

const PopOver = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div>
        <button className="tw-bg-blue-900 tw-text-white tw-p-2 tw-rounded-md" onClick={() => setOpen(true)}>Open Modal</button>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="tw-bg-white tw-translate-x-[-50%] tw-rounded-lg tw-translate-y-[-50%] tw-w-[500px] tw-absolute tw-top-[50%] tw-left-[50%]">
          <div className="tw-p-3">
            <div className="tw-flex tw-justify-between">
              <h2>Heading</h2>
              <button
                onClick={() => setOpen(false)}
                className="tw-bg-sky-600 tw-rounded-md tw-p-1"
              >
                close
              </button>
            </div>
            <div>desc</div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PopOver;
