"use client";
import { FC } from "react";
import Transition from "react-transition-group/Transition";

const Badge: FC<{
  counter: number;
  pulsingOut: boolean;
  pulsingIn: boolean;
  activeCounter: boolean;
}> = ({ activeCounter, counter, pulsingIn, pulsingOut }) => {
  return (
    <Transition in={activeCounter} timeout={300} mountOnEnter unmountOnExit>
      {(state) => (
        <div
          className={`counter ${state} flex absolute top-0 right-0 my-[4px] mx-[6px] font-bold bg-summer-sky text-white h-[22px] min-w-[22px] rounded-[11px] justify-center items-center
        ${counter > 1 && pulsingOut ? "animate-pulsing_out" : ""}
        ${counter > 0 && pulsingIn ? "animate-pulsing_in" : ""}
        `}
        >
          {counter}
        </div>
      )}
    </Transition>
  );
};

export default Badge;
