import { FC } from "react";
import { useRouter } from "next/navigation";
// import useTelegram from "../useTelegram";

const Cart: FC = () => {
    console.log(window.Telegram.WebApp, "cart")
  window.Telegram.WebApp.BackButton.show();
  const router = useRouter();
  window.Telegram.WebApp.BackButton.onClick(() => router.back());
  return <div className="flex justify-center">CART</div>;
};
export default Cart;
