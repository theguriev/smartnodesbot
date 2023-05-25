"use client";
import { useState } from "react";
import Image from "next/image";
import { shopItemType } from "./mockedData";
import Transition from "react-transition-group/Transition";

export default function ListItem({ img, title, price }: shopItemType) {
  const [counter, setCounter] = useState(0);
  const [pulsingOut, setPulsingOut] = useState(false);
  const [pulsingIn, setPulsingIn] = useState(false);
  const [activeCounter, setActiveCounter] = useState(false);

  const handleAddClick = () => {
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
    setActiveCounter(true);
    setPulsingOut(true);
    setTimeout(() => {
      setPulsingOut(false);
    }, 110);
  };

  const handleRemoveClick = () => {
    setCounter((prevCounter) => {
      return prevCounter - 1;
    });
    setPulsingIn(true);
    setTimeout(() => {
      setPulsingIn(false);
    }, 110);
    if (counter === 1) {
      setActiveCounter(false);
    }
  };

  return (
    <div className="relative font-sans w-[120px] h-[159px] pt-[4px] px-[5px] pb-[21px] flex flex-col items-center justify-center">
      <Transition in={activeCounter} timeout={300} mountOnEnter unmountOnExit>
        {(state) => (
          <div
            className={`counter ${state} flex absolute top-0 right-0 my-[4px] mx-[6px] font-bold bg-dark-tangerine text-white h-[22px] min-w-[22px] rounded-[11px] justify-center items-center
        ${counter > 1 && pulsingOut ? "animate-pulsing_out" : ""}
        ${counter > 0 && pulsingIn ? "animate-pulsing_in" : ""}
        `}
          >
            {counter}
          </div>
        )}
      </Transition>
      <div className="h-[78px]">
        <Image src={img} width={74} height={74} alt="failed to load" />
      </div>
      <div className="text-[13px] flex">
        <p className="font-normal">{title}</p>
        <p className="px-[4px]">·</p>
        <p className="font-bold">{price}</p>
      </div>
      <div className="w-[80px] flex justify-between relative">
        <button
          onClick={handleRemoveClick}
          className={`cursor-pointer mt-[10px] bg-cinnabar text-white rounded-[8px] font-sans text-[14px] h-[30px] flex items-center justify-center ${
            counter === 0 ? "hidden" : "after:content-[''] w-[38px] text-[36px]"
          }`}
        >
          <span
            className={`${counter === 0 ? "hidden" : "absolute top-[4px]"}`}
          >
            -
          </span>
        </button>

        <Transition in={activeCounter} timeout={100}>
          {(state) => (
            <div
              onClick={handleAddClick}
              className={`add_button ${state} cursor-pointer mt-[10px] bg-dark-tangerine text-white rounded-[8px] font-sans text-[14px] h-[30px] flex items-center justify-center ${
                counter === 0
                  ? "after:content-['ADD'] w-[80px] font-bold"
                  : "after:content-[''] w-[38px] text-[30px]"
              }`}
            >
              <span
                className={`${counter === 0 ? "hidden" : "absolute top-[8px]"}`}
              >
                +
              </span>
            </div>
          )}
        </Transition>
      </div>
    </div>
  );
}
