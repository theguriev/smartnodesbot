import { FC } from "react";

const Title: FC<{ title: string; price: number }> = ({ title, price }) => {
  const isLongText = (title.length + String(price).length) > 10;
  const fontSize = isLongText ? 'text-[11px] leading-5' : 'text-sm';
  return (
    <div className={`flex items-center gap-1 ${fontSize} text-tg_text_color`}>
      <span>{title}</span>
      <span>·</span>
      <span>{price}$</span>
    </div>
  );
};

export default Title;
