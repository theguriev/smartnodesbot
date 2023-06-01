"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";

const Cart: FC = () => {
  window?.Telegram?.WebApp?.BackButton.show();

  const router = useRouter();
  window?.Telegram?.WebApp?.BackButton.onClick(() => router.back());

  return <div>CART</div>;
};

export default Cart;
