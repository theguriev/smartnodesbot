import { FC } from "react";

const Title: FC<{ title: string; price: string }> = ({ title, price }) => {
  const themeParams =
    typeof window !== "undefined" ? window?.Telegram?.WebApp?.themeParams : {};
  const textColor = "color-" + themeParams?.text_color;

  return (
    <div className="text-[13px] flex items-center gap-1">
      <span className={textColor}>{title}</span>
      <span className={textColor}>·</span>
      <span className="font-bold" style={{ color: themeParams?.text_color }}>
        {price}
      </span>
    </div>
  );
};

export default Title;
