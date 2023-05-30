import { FC } from "react";

const themeParams = typeof window !== "undefined" ? window?.Telegram?.WebApp?.themeParams : {};

if (window === undefined) {

}

const Title: FC<{ title: string; price: string }> = ({ title, price }) => (
  <div className="text-[13px] flex items-center gap-1">
    <span style={{ color: themeParams.text_color }}>{title}</span>
    <span style={{ color: themeParams.text_color }}>·</span>
    <span className="font-bold" style={{ color: themeParams.text_color }}>
      {price}
    </span>
  </div>
);

export default Title;
