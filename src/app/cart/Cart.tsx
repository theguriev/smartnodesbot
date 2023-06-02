"use client";
import { FC, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTelegram } from "../hooks/useTelegram";
import { v4 as uuidv4 } from "uuid";
import CartItem from "./components/CartItem";

const mockedCartItems = [
  { img: "/lava.webp", title: "Lava", price: "240", id: uuidv4() },
  { img: "/defund.webp", title: "DeFund", price: "230", id: uuidv4() },
  { img: "/defund.webp", title: "DeFund", price: "230", id: uuidv4() },
  { img: "/defund.webp", title: "DeFund", price: "230", id: uuidv4() },
  { img: "/chainflip.webp", title: "Chainflip", price: "240", id: uuidv4() },
  { img: "/chainflip.webp", title: "Chainflip", price: "240", id: uuidv4() },
];

const Cart: FC = () => {
  const {
    WebApp: { MainButton, BackButton },
  } = useTelegram();
  const [total, setTotal] = useState(250);

  MainButton.setParams({
    text: `PAY ${total} $`,
  });

  BackButton.show();
  const router = useRouter();
  BackButton.onClick(() => {
    MainButton.setParams({
      text: "VIEW ORDER",
    });
    router.back();
  });
  return (
    <div className="flex flex-col font-sans bg-calm h-screen">
      <div className="flex justify-between py-5 px-6 bg-lazy">
        <span
          className="font-bold"
          style={{ color: window?.Telegram?.WebApp?.themeParams?.text_color }}
        >
          YOUR ORDER
        </span>
        <span className=" text-active">
          <Link href="/">Edit</Link>
        </span>
      </div>
      <CartItem />
      <div className=" pt-3 flex flex-col h-full">
        <input className="px-6 py-3 text-base focus:outline-none" placeholder="Add comment..." />
        <span
          className="px-6 pt-3 pb-6 text-sm"
          style={{ color: window?.Telegram?.WebApp?.themeParams?.hint_color }}
        >
          Any special requests, details, final wishes etc.
        </span>
      </div>
    </div>
  );
};
export default Cart;
