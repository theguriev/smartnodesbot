"use client";
import { FC, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTelegram } from "../hooks/useTelegram";
import { v4 as uuidv4 } from "uuid";
import CartItem from "./components/CartItem";
import { CountedCartItemType } from "../types";

const mockedCartItems = [
  { img: "/lava.webp", title: "Lava", price: "240", id: uuidv4() },
  { img: "/defund.webp", title: "DeFund", price: "230", id: uuidv4() },
  { img: "/defund.webp", title: "DeFund", price: "230", id: uuidv4() },
  { img: "/defund.webp", title: "DeFund", price: "230", id: uuidv4() },
  { img: "/chainflip.webp", title: "Chainflip", price: "240", id: uuidv4() },
  { img: "/chainflip.webp", title: "Chainflip", price: "240", id: uuidv4() },
];

const totalCartItems: CountedCartItemType[] = mockedCartItems.reduce<CountedCartItemType[]>((acc, item) => {
    const existingItem = acc.find((cartItem) => cartItem.title === item.title);
    if (existingItem) {
      existingItem.amount++;
      existingItem.totalPrice = existingItem.amount * parseFloat(existingItem.price);
    } else {
      acc.push({ ...item, amount: 1, totalPrice: parseFloat(item.price) });
    }
    return acc;
  }, []);

const Cart: FC = () => {
  const {
    WebApp: { MainButton, BackButton, themeParams },
  } = useTelegram();
  const [total, setTotal] = useState(250);

  MainButton.setParams({
    text: `PAY ${total}$`,
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
      {totalCartItems.map((cartItem) => (
        <CartItem key={cartItem.id} {...cartItem} />
      ))}
      <div className=" pt-3 flex flex-col h-full">
        <input
          className="px-6 py-3 text-base focus:outline-none"
          placeholder="Add comment..."
          style={{ color: themeParams?.text_color }}
        />
        <span
          className="px-6 pt-3 pb-6 text-sm"
          style={{ color: themeParams?.hint_color }}
        >
          Any special requests, details, final wishes etc.
        </span>
      </div>
    </div>
  );
};
export default Cart;
