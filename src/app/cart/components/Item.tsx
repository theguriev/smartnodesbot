/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { Project } from "@/app/types";
import getLocale from "@/app/utils/getLocale";

const Item: FC<
  Partial<
    Pick<Project, "name" | "blockQuoteEn" | "blockQuoteRu" | "monthlyPrice">
  > & {
    amount: number;
  }
> = ({ amount, name, blockQuoteEn, blockQuoteRu, monthlyPrice }) => {
  const totalPrice = amount * (monthlyPrice || 0);
  const locale = getLocale();

  return (
    <div className="flex flex-row px-6 py-2 text-sm bg-tg_bg_color">
      <div className="flex items-center">
        <img src="/lava.webp" className="w-10 h-10 mr-3" alt="can't load" />
      </div>
      <div className="w-full flex justify-between">
        <div className="flex flex-col">
          <div className="font-bold flex gap-1">
            <span className="text-tg_text_color">{name}</span>
            <span className="text-smart">{amount}x</span>
          </div>
          <span className="text-tg_hint_color">
            {locale === "ru" ? blockQuoteRu : blockQuoteEn}
          </span>
        </div>
        <span className="font-semibold text-tg_text_color">{totalPrice}$</span>
      </div>
    </div>
  );
};
export default Item;
