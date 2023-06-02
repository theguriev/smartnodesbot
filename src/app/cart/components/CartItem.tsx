import { FC } from "react";
import { useTelegram } from "../../hooks/useTelegram";

const CartItem: FC = () => {
  const {
    WebApp: { themeParams },
  } = useTelegram();
  return (
    <div
      className="flex flex-row px-6 py-2 text-sm"
      style={{ backgroundColor: themeParams?.bg_color }}
    >
      <img src="/lava.webp" className="w-10 h-10 mr-3"/>
      <div className="w-full flex justify-between">
        <div className="flex flex-col">
          <div className="font-bold flex gap-1">
            <span
              style={{
                color: themeParams?.text_color,
              }}
            >
              Cookie
            </span>
            <span className="text-smart">3x</span>
          </div>
          <span style={{ color: themeParams?.hint_color }}>Milks favorite</span>
        </div>
        <span
          className="font-semibold"
          style={{ color: themeParams?.text_color }}
        >
          11.97$
        </span>
      </div>
    </div>
  );
};
export default CartItem;
