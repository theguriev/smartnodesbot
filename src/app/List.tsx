"use client";
import { useState } from "react";
import ListItem from "./ListItem";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import Script from "next/script";

const mockedShopItems = [
  { img: "/lava.webp", title: "Lava", price: "240$", id: uuidv4() },
  { img: "/defund.webp", title: "DeFund", price: "230$", id: uuidv4() },
  { img: "/chainflip.webp", title: "Chainflip", price: "240$", id: uuidv4() },
  { img: "/shardeum.webp", title: "Shardeum", price: "240$", id: uuidv4() },
  { img: "/muon-network.webp", title: "Muon", price: "230$", id: uuidv4() },
  { img: "/massa.webp", title: "Massa", price: "240$", id: uuidv4() },
  { img: "/elixir-finance.webp", title: "Elixir", price: "240$", id: uuidv4() },
];

const List = () => {
  console.log(window.Telegram);
  const [ready, setReady] = useState(false);
  const handleReady = () => {
    setReady(true);
  };
  interface CartItem {
    img: string;
    title: string;
    price: string;
    id: string;
  }

  const [addedItems, setAddedItems] = useState<CartItem[]>([]);
  const MainButton = window?.Telegram?.WebApp?.MainButton;
  const showMainButton = (items: Array<CartItem>) => {
    if (items.length === 0) {
      MainButton.hide();
    } else {
      MainButton.setParams({
        text: "BUY",
        color: "#33b445",
      });
      MainButton.show();
    }
  };

  const addToCart = (product: CartItem) => {
    let newItems: CartItem[] = [...addedItems, product];
    setAddedItems(newItems);
    showMainButton(newItems);
  };

  const removeFromCart = (product: CartItem) => {
    const indexToRemove = addedItems.findIndex(
      (item) => item.id === product.id
    );
    if (indexToRemove !== -1) {
      const newItems = [...addedItems];
      newItems.splice(indexToRemove, 1);
      setAddedItems(newItems);
      showMainButton(newItems);
    }
  };

  const router = useRouter();
  window?.Telegram?.WebApp?.MainButton.onClick(() => router.push("/cart"));

  return (
    <>
      <Script
        src="https://telegram.org/js/telegram-web-app.js"
        onReady={handleReady}
      />
      {ready && (
        <div className="flex flex-wrap justify-start">
          {mockedShopItems.map((shopItem) => (
            <ListItem
              key={shopItem.id}
              {...shopItem}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default List;
