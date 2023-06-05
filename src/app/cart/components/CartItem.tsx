/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { useTelegram } from "../../hooks/useTelegram";
import { CountedCartItemType } from "@/app/types";

const CartItem: FC<CountedCartItemType> = ({
  amount,
  totalPrice,
  ...cartItemProps
}) => {
  const {
    WebApp: { themeParams },
  } = useTelegram();
  return (
    <div
      className="flex flex-row px-6 py-2 text-sm"
      style={{ backgroundColor: themeParams?.bg_color }}
    >
      <div className="flex items-center">
        <img src="/lava.webp" className="w-10 h-10 mr-3" alt="can't load" />
      </div>
      <div className="w-full flex justify-between">
        <div className="flex flex-col">
          <div className="font-bold flex gap-1">
            <span
              style={{
                color: themeParams?.text_color,
              }}
            >
              {cartItemProps.name}
            </span>
            <span className="text-smart">{amount}x</span>
          </div>
          <span style={{ color: themeParams?.hint_color }}>
            {cartItemProps.blockQuoteEn}
          </span>
        </div>
        <span
          className="font-semibold"
          style={{ color: themeParams?.text_color }}
        >
          {totalPrice}$
        </span>
      </div>
    </div>
  );
};
export default CartItem;
