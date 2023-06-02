import { FC } from "react";

const CartItem: FC = () => {
  return (
    <div className="flex flex-row px-6 bg-lazy py-2 text-sm">
      <img src="/lava.webp" className="w-10 h-10 mr-3" />
      <div className="w-full flex justify-between">
        <div className="flex flex-col">
          <div className="font-bold flex gap-1">
            <span
              style={{
                color: window?.Telegram?.WebApp?.themeParams?.text_color,
              }}
            >
              Cookie
            </span>
            <span className="text-smart">3x</span>
          </div>
          <span
            style={{ color: window?.Telegram?.WebApp?.themeParams?.hint_color }}
          >
            Milks favorite
          </span>
        </div>
        <span
          className="font-semibold"
          style={{ color: window?.Telegram?.WebApp?.themeParams?.text_color }}
        >
          11.97$
        </span>
      </div>
    </div>
  );
};
export default CartItem;
