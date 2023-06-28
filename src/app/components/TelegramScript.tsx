"use client";
import Script from "next/script";
import { FC, PropsWithChildren, useState } from "react";
import Skeleton from "./Skeleton";

const TelegramScript: FC<PropsWithChildren> = ({ children }) => {
  const [loaded, setLoaded] = useState(false);

  const handleOnLoad = () => {
    document.body.classList.add(window.Telegram.WebApp.colorScheme);
    setLoaded(true);
  };

  return (
    <>
      <Script
        src="https://telegram.org/js/telegram-web-app.js"
        onLoad={handleOnLoad}
        defer
      />
      {loaded ? children : <Skeleton />}
    </>
  );
};

export default TelegramScript;
