"use client";

import { FC, useState, useEffect } from "react";

const Title: FC<{ title: string; price: string }> = ({ title, price }) => {
  const [textColor, setTextColor] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const color = window?.Telegram?.WebApp?.themeParams?.text_color;
      if (color) {
        setTextColor("color-" + color);
      }
    }
  }, []);

  return (
    <div className="text-[13px] flex items-center gap-1">
      <span className={textColor}>{title}</span>
      <span className={textColor}>·</span>
      <span className="font-bold">{price}</span>
    </div>
  );
};

export default Title;
