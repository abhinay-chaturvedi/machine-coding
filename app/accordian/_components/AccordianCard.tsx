import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
const AccordianCard = ({
  item,
  isOpen,
  cardNumber,
  onClick,
}: {
  item: { title: string; desc: string };
  isOpen: boolean;
  cardNumber: number;
  onClick: () => void;
}) => {
  return (
    <div className="tw-bg-[whitesmoke] tw-shadow-lg">
      <div className="tw-flex tw-gap-2 tw-items-center tw-p-3">
        <button onClick={onClick} className="tw-flex tw-flex-1 tw-items-center">
          <h2 className="tw-w-6 tw-text-center tw-font-bold">{cardNumber})</h2>
          <h2 className="tw-font-bold">{item.title}</h2>
        </button>
        {!isOpen ? (
          <button onClick={onClick}>
            <FaPlusCircle size={20} />
          </button>
        ) : (
          <button onClick={onClick}>
            <FaTimesCircle size={20} />
          </button>
        )}
      </div>
      {isOpen && <div className="tw-pl-9">{item.desc}</div>}
    </div>
  );
};

export default AccordianCard;
