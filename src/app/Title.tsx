import { FC } from "react";

const Title: FC<{ title: string; price: string }> = ({ title, price }) => (
  <div className="text-[13px] flex items-center gap-1">
    <span>{title}</span>
    <span>·</span>
    <span className="font-bold">{price}</span>
  </div>
);

export default Title;
