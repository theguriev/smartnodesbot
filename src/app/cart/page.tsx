"use client";
import Script from "next/script";
import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import { useTelegram } from "../useTelegram";

const Cart: FC = () => {
  const [ready, setReady] = useState(false);
  const handleReady = () => {
    setReady(true);
  };
  const { tg } = useTelegram();
  tg?.BackButton.show();

  const router = useRouter();
  tg?.BackButton.onClick(() => router.back());
  console.log(window.Telegram);
  return (
    <>
      <Script
        src="https://telegram.org/js/telegram-web-app.js"
        onReady={handleReady}
      />
      {ready && <div className="flex justify-center">CART</div>}
    </>
  );
};
export default Cart;
