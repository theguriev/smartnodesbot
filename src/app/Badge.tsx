"use client";
import { FC, useEffect, useRef, useState } from "react";
import classNames from "classnames";

type Animations =
  | "animate-badgeHide"
  | "animate-badgeShow"
  | "animate-badgeIncrement"
  | "animate-badgeIncrementSame"
  | "animate-badgeDecrement"
  | "animate-badgeDecrementSame";

const getAnimationName = (
  prev: number,
  next: number,
  animation?: Animations
) => {
  if (prev === 1 && next === 0) {
    return "animate-badgeHide";
  }
  if (prev === 0 && next === 1) {
    return "animate-badgeShow";
  }
  if (prev < next) {
    return animation === "animate-badgeIncrement"
      ? "animate-badgeIncrementSame"
      : "animate-badgeIncrement";
  }
  if (prev > next) {
    return animation === "animate-badgeDecrement"
      ? "animate-badgeDecrementSame"
      : "animate-badgeDecrement";
  }
};

const Badge: FC<{
  counter: number;
}> = ({ counter }) => {
  const prevCounterRef = useRef(counter);
  const [animation, setAnimation] = useState<Animations>();
  useEffect(() => {
    setAnimation(getAnimationName(prevCounterRef.current, counter, animation));
    prevCounterRef.current = counter;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);
  return (
    <div
      className={classNames(
        animation,
        "counter flex absolute top-0 right-0 my-[4px] mx-[6px] font-bold bg-el-senor text-white h-[22px] min-w-[22px] rounded-[11px] justify-center items-center transform scale-0"
      )}
    >
      {counter === 0 ? 1 : counter}
    </div>
  );
};

export default Badge;
