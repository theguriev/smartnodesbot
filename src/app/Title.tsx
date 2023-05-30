"use client";

import { FC, useState, useEffect } from "react";

const Title: FC<{ title: string; price: string }> = ({ title, price }) => {
  const [textColor, setTextColor] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const color = window?.Telegram?.WebApp?.themeParams?.text_color;
      if (color && color === "#ffffff") {
        setTextColor("text-white");
      }
      else setTextColor("text-black");
    }
  }, []);

  return (
    <div className={`${textColor} text-[13px] flex items-center gap-1`}>
      <span>{title}</span>
      <span>·</span>
      <span>{price}</span>
    </div>
  );
};

export default Title;
