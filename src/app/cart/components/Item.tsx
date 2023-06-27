"useClient";
import { FC, useState } from "react";
import { Project } from "@/app/types";

const Item: FC<
  Partial<
    Pick<Project, "name" | "blockQuoteEn" | "monthlyPrice" | "imageUrl">
  > & {
    amount: number;
  }
> = ({ amount, name, blockQuoteEn, monthlyPrice, imageUrl }) => {
  const totalPrice = amount * (monthlyPrice || 0);
  const [hasError, setHasError] = useState(!imageUrl);
  const handleImageError = () => {
    setHasError(true);
  };
  return (
    <div className="flex flex-row px-6 py-2 text-sm bg-tg_bg_color">
      <div>
        {hasError && (
          <div className="w-10 h-10 mr-3 rounded-full animate-pulse bg-tg_secondary_bg_color" />
        )}
        {!hasError && (
          <img
            className="rounded-full cursor-pointer w-10 h-10 mr-3"
            src={imageUrl}
            onError={handleImageError}
            alt="failed"
          />
        )}
      </div>
      <div className="w-full flex justify-between">
        <div className="flex flex-col">
          <div className="font-bold flex gap-1">
            <span className="text-tg_text_color">{name}</span>
            <span className="text-smart">{amount}x</span>
          </div>
          <span className="text-tg_hint_color">{blockQuoteEn}</span>
        </div>
        <span className="font-semibold text-tg_text_color">{totalPrice}$</span>
      </div>
    </div>
  );
};
export default Item;
