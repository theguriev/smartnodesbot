"use client";
import { FC, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTelegram } from "../hooks/useTelegram";
import { v4 as uuidv4 } from "uuid";
import CartItem from "./components/CartItem";
import { useShopItemsContext } from "../context/shopItems";

const Cart: FC = () => {
  const { shopItems } = useShopItemsContext();

  const orderPrice: number = shopItems.reduce((total, item) => {
    return total + item.totalPrice;
  }, 0);

  const {
    WebApp: { MainButton, BackButton, themeParams },
  } = useTelegram();

  MainButton.setParams({
    text: `PAY ${orderPrice}$`,
  });

  BackButton.show();
  const router = useRouter();
  BackButton.onClick(() => {
    MainButton.setParams({
      text: "VIEW ORDER",
    });
    router.back();
  });

  const handleEdit = () => {
    MainButton.setParams({
      text: "VIEW ORDER",
    });
  };
  return (
    <div
      className="flex flex-col font-sans h-screen"
      style={{
        backgroundColor: themeParams?.secondary_bg_color,
      }}
    >
      <div
        className="flex justify-between py-5 px-6"
        style={{ backgroundColor: themeParams?.bg_color }}
      >
        <span className="font-bold" style={{ color: themeParams?.text_color }}>
          YOUR ORDER
        </span>
        <span className=" text-active">
          <Link href="/" onClick={handleEdit}>
            Edit
          </Link>
        </span>
      </div>
      {shopItems
        .filter((cartItem) => cartItem.amount > 0)
        .map((cartItem) => (
          <CartItem key={cartItem.id} {...cartItem} />
        ))}
      <div className="pt-3 flex flex-col h-full">
        <input
          className="px-6 py-3 text-base focus:outline-none"
          placeholder="Add comment..."
          style={{
            color: themeParams?.text_color,
            backgroundColor: themeParams?.bg_color,
          }}
        />
        <span
          className="px-6 pt-3 pb-6 text-sm"
          style={{ color: themeParams?.hint_color }}
        >
          Any special requests, details, final wishes etc.
        </span>
        <button onClick={() => router.back()}>to list</button>
      </div>
    </div>
  );
};
export default Cart;
