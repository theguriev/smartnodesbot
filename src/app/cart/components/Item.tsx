/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import useTelegram from "../../hooks/useTelegram";
import { Project } from "@/app/types";

const Item: FC<
  Partial<Pick<Project, "name" | "blockQuoteEn" | "monthlyPrice">> & {
    amount: number;
  }
> = ({ amount, name, blockQuoteEn, monthlyPrice }) => {
  const totalPrice = amount * (monthlyPrice || 0);
  const telegram = useTelegram();
  return (
    <div
      className="flex flex-row px-6 py-2 text-sm"
      style={{ backgroundColor: telegram?.WebApp.themeParams?.bg_color }}
    >
      <div className="flex items-center">
        <img src="/lava.webp" className="w-10 h-10 mr-3" alt="can't load" />
      </div>
      <div className="w-full flex justify-between">
        <div className="flex flex-col">
          <div className="font-bold flex gap-1">
            <span
              style={{
                color: telegram?.WebApp.themeParams?.text_color,
              }}
            >
              {name}
            </span>
            <span className="text-smart">{amount}x</span>
          </div>
          <span style={{ color: telegram?.WebApp.themeParams?.hint_color }}>
            {blockQuoteEn}
          </span>
        </div>
        <span
          className="font-semibold"
          style={{ color: telegram?.WebApp.themeParams?.text_color }}
        >
          {totalPrice}$
        </span>
      </div>
    </div>
  );
};
export default Item;
