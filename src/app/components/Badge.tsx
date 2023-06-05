"use client";
import { FC, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { useTelegram } from "../hooks/useTelegram";

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
  // if(prev === next) {
  //   what to return to show badge if prev === next
  // }
  
};

const Badge: FC<{
  amount: number;
  name: string
}> = ({ amount, name }) => {
  const {
    WebApp: { colorScheme },
  } = useTelegram();

  const prevAmountRef = useRef(amount);
  const [animation, setAnimation] = useState<Animations>();
  useEffect(() => {
    setAnimation(getAnimationName(prevAmountRef.current, amount, animation));
    prevAmountRef.current = amount;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount]);

  console.log(amount, "amount", prevAmountRef.current, "prev", name )
  return (
    <>
      {amount > 0 && (
        <div
          className={classNames(
            animation,
            colorScheme === "light" ? "bg-smart" : "bg-funny",
            "flex absolute top-0 right-0 my-[4px] mx-[6px] font-bold text-white h-[22px] min-w-[22px] rounded-[11px] justify-center items-center transform scale-0"
          )}
        >
          {amount}
        </div>
      )}
    </>
  );
};

export default Badge;
