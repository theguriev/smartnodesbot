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
  if (prev === next && prev > 0) {
    return "animate-badgeShow";
  }
};

const Badge: FC<{
  amount: number;
}> = ({ amount }) => {
  const prevAmountRef = useRef(amount);
  const [animation, setAnimation] = useState<Animations | undefined>(
    amount > 0 ? "animate-badgeShow" : "animate-badgeHide"
  );
  useEffect(() => {
    setAnimation(getAnimationName(prevAmountRef.current, amount, animation));
    prevAmountRef.current = amount;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount]);

  return (
    <>
      {amount > 0 && (
        <div
          className={classNames(
            animation,
            "flex absolute top-0 right-0 my-[4px] mx-[6px] font-bold text-white h-[22px] min-w-[22px] rounded-[11px] justify-center items-center transform scale-0 bg-tg_button_color"
          )}
        >
          {amount}
        </div>
      )}
    </>
  );
};

export default Badge;
