"use client";
import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import { useTelegram } from "../hooks/useTelegram";

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
      text: "BUY",
    });
    router.back();
  });
  return <div className="flex justify-center">CART</div>;
};
export default Cart;
