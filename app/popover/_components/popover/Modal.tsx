import React from "react";

const Modal = ({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <>
      {open && (
        <div
          onClick={() => onClose()}
          className={
            "tw-h-[100vh] tw-w-[100vw] tw-bg-black tw-bg-opacity-50 tw-fixed tw-top-0 tw-left-0 "
          }
        >
          <div onClick={(e) => e.stopPropagation()}>{children}</div>
        </div>
      )}
    </>
  );
};

export default Modal;
