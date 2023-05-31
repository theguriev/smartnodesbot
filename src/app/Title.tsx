import { FC } from "react";

const Title: FC<{ title: string; price: string }> = ({ title, price }) => {
  return (
    <div
      className={`text-[13px] flex items-center gap-1`}
      style={{ color: window?.Telegram?.WebApp?.themeParams?.text_color }}
    >
      <span>{title}</span>
      <span>·</span>
      <span>{price}</span>
    </div>
  );
};

export default Title;
