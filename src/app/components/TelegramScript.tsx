"use client";
import Script from "next/script";
import { FC } from "react";

const TelegramScript: FC = () => {
  const handleOnLoad = () => {
    document.body.classList.add(window.Telegram.WebApp.colorScheme);
  };
  return (
    <Script
      src="https://telegram.org/js/telegram-web-app.js"
      onLoad={handleOnLoad}
      defer
    />
  );
};

export default TelegramScript;
