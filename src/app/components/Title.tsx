import { FC } from "react";
import useTelegram from "../hooks/useTelegram";

const Title: FC<{ title: string; price: number }> = ({ title, price }) => {
  const telegram = useTelegram();
  const color = telegram?.WebApp?.themeParams?.text_color;
  const isLongText = (title.length + String(price).length) > 10;
  const fontSize = isLongText ? 'text-[11px] leading-5' : 'text-sm';
  return (
    <div className={`flex items-center gap-1 ${fontSize}`} style={{ color }}>
      <span>{title}</span>
      <span>·</span>
      <span>{price}$</span>
    </div>
  );
};

export default Title;
