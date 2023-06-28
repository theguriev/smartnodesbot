"use client";
import { FC } from "react";

const divs = Array(9).fill(null);

const Skeleton: FC = () => {
  return (
    <div className="flex justify-center mt-[64px]">
      <div className="w-[360px] flex flex-wrap justify-start">
        {divs.map((_, index) => (
          <div
            key={index}
            className="relative w-[120px] h-[159px] flex flex-col items-center justify-center gap-2"
          >
            <div>
              <div className="h-20 w-20 rounded-full animate-pulse bg-tg_secondary_bg_color" />
            </div>
            <div className="text-sm h-3 w-16 rounded animate-pulse bg-tg_secondary_bg_color" />
            <div className="bg-gray-200 w-20 h-8 rounded animate-pulse bg-tg_secondary_bg_color" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skeleton;
