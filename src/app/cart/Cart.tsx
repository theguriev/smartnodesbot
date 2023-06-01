"use client";
import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import { CartItem } from "../types";
// import useTelegram from "../useTelegram";

const Cart: FC = () => {
  const [total, setTotal] = useState(250);

  const MainButton = window.Telegram.WebApp.MainButton;
  MainButton.setParams({
    text: `PAY ${total} $`,
    color: "#33b445",
  });

  window.Telegram.WebApp.BackButton.show();
  const router = useRouter();
  window.Telegram.WebApp.BackButton.onClick(() => router.back());
  return <div className="flex justify-center">CART</div>;
};
export default Cart;
