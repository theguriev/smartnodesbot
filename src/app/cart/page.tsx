"use client";
import Script from "next/script";
import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import Cart from "./Cart";
// import useTelegram from "../useTelegram";

const CartHome: FC = () => {
  const [ready, setReady] = useState(false);
  const handleReady = () => {
    setReady(true);
  };

  return (
    <>
      <Script
        src="https://telegram.org/js/telegram-web-app.js"
        onReady={handleReady}
      />
      {ready && <Cart />}
    </>
  );
};
export default CartHome;
