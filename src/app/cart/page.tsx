"use client";
import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";

const Cart: FC = () => {
  const [ready, setReady] = useState(false);
  const handleReady = () => {
    setReady(true);
  };

  window?.Telegram?.WebApp?.BackButton.show();

  const router = useRouter();
  window?.Telegram?.WebApp?.BackButton.onClick(() => router.back());
  console.log(window.Telegram);
  return (
    <>
      <Script
        src="https://telegram.org/js/telegram-web-app.js"
        onReady={handleReady}
      />
      {ready && <div className="flex justify-center">Cart</div>}
    </>
  );
};

export default Cart;
