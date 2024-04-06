"use client";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  KeyboardEvent,
  KeyboardEventHandler,
  MutableRefObject,
  useRef,
  useState,
} from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
// import "./index.css"

const Autocomplete = ({ options }: { options: string[] }) => {
  const timoutRef: { current: NodeJS.Timeout | null } = useRef(null);
  // console.log(options);
  const [searchText, setSearchText] = useState<string>("");
  const [showList, setShowList] = useState<string[]>([]);
  const [focused, setFocused] = useState<boolean>(false);
  const [active, setActive] = useState(0);
  console.log("🚀 ~ Autocomplete ~ focused:", focused);
  const [showCancel, setShowCancel] = useState(false);
  // console.log(searchText);
  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    // here i need to add debounce
    if (timoutRef.current) {
      clearTimeout(timoutRef.current);
    }
    timoutRef.current = setTimeout(() => {
      setSearchText(e.target.value);
      console.log("runs");
      const filtered = options.filter((item) => {
        return item.toLowerCase().includes(e.target.value.toLowerCase());
      });
      console.log("🚀 ~ filtered ~ filtered:", filtered, searchText);
      setShowList(filtered);
    }, 500);
    setSearchText(e.target.value);
  };
  const handleKeyDown = async (e: KeyboardEvent<HTMLInputElement>) => {
    console.log(e.keyCode);
    if (e.keyCode == 40) {
      setActive((prev) => (prev + 1) % showList.length);
    } else if (e.keyCode == 38) {
      setActive((prev) => (prev - 1 < 0 ? showList.length - 1 : prev - 1));
    } else if (e.keyCode == 13) {
      // submit the code
      setSearchText(showList[active]);
      // console.log("hello");
      setShowCancel(true);
      setShowList([]);
    }
  };
  const handleClickCancel = async () => {
    setShowCancel(false);
    setSearchText("");
  };
  return (
    <div>
      <div className="tw-flex tw-flex-col tw-gap-1 tw-items-center hello-brother">
        <div
          className={`tw-flex tw-gap-2 tw-items-center tw-rounded-md ${
            focused ? "tw-border-green-700" : "tw-border-green"
          } tw-border-2 tw-w-80 tw-p-1`}
        >
          <input
            onKeyDown={handleKeyDown}
            onBlur={() => setFocused(false)}
            onFocus={() => setFocused(true)}
            value={searchText as string}
            className="tw-border-none tw-h-7 tw-flex-1 tw-outline-none"
            onChange={handleSearch}
            type="text"
          />
          {showCancel && (
            <FaTimes
              onClick={handleClickCancel}
              className="hover:tw-bg-slate-100 tw-cursor-pointer hover:tw-rounded-md tw-p-[2px]"
              size={25}
            />
          )}
          <FaSearch
            className="hover:tw-bg-slate-100 tw-cursor-pointer hover:tw-rounded-md tw-p-1"
            size={25}
          />
        </div>
        {/* here list of option will be shown */}
        <div className="tw-w-80 tw-flex tw-flex-col tw-gap-2 tw-max-h-96 tw-overflow-auto">
          {showList.map((item, index) => {
            return (
              <div
                className={`${
                  active == index ? "tw-bg-slate-200" : "tw-bg-slate-100"
                } tw-p-2 hover:tw-bg-slate-200 hover:tw-text-green-950`}
                key={item}
              >
                <button
                  className="tw-w-full tw-h-full tw-cursor-pointer tw-text-left"
                  onClick={() => {
                    setSearchText(item);
                    console.log("hello");
                    setShowList([]);
                    setShowCancel(true);
                  }}
                >
                  {item}
                </button>
              </div>
            );
          })}
          {/* <p>{searchText}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Autocomplete;
