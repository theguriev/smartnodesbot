import { FC } from "react";
import useTelegram from "../hooks/useTelegram";

const Title: FC<{ title: string; price: number }> = ({ title, price }) => {
  const telegram = useTelegram();
  const color = telegram?.WebApp?.themeParams?.text_color;
  return (
    <div className={`text-sm flex items-center gap-1`} style={{ color }}>
      <span>{title}</span>
      <span>·</span>
      <span>{price}$</span>
    </div>
  );
};

export default Title;
