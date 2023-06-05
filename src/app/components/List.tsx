"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTelegram } from "../hooks/useTelegram";
import ListItem from "./ListItem";
import { CartItemType } from "../types";
import { fetchShopItems } from "../api/shopItems";

// const mockedShopItems = [
//   { img: "/lava.webp", title: "Lava", price: "240", id: uuidv4() },
//   { img: "/defund.webp", title: "DeFund", price: "230", id: uuidv4() },
//   { img: "/chainflip.webp", title: "Chainflip", price: "240", id: uuidv4() },
//   { img: "/shardeum.webp", title: "Shardeum", price: "240", id: uuidv4() },
//   { img: "/muon-network.webp", title: "Muon", price: "230", id: uuidv4() },
//   { img: "/massa.webp", title: "Massa", price: "240$", id: uuidv4() },
//   { img: "/elixir-finance.webp", title: "Elixir", price: "240", id: uuidv4() },
// ];

const List = () => {
  const [shopItems, setShopItems] = useState<CartItemType[]>([]);
  const [addedItems, setAddedItems] = useState<CartItemType[]>([]);
  const router = useRouter();
  const {
    WebApp: { MainButton, BackButton },
  } = useTelegram();
  const showMainButton = (items: Array<CartItemType>) => {
    if (items.length === 0) {
      MainButton.hide();
    } else {
      MainButton.setParams({
        text: "VIEW ORDER",
        color: "#33b445",
      });
      MainButton.show();
    }
  };
  
  BackButton.hide();
  MainButton.onClick(() => router.push("/cart"));

  const fetchedShopItems = async () => {
    try {
      const data = await fetchShopItems();
      setShopItems(data as CartItemType[]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchedShopItems();
  }, []);

  const onAdd = (product: CartItemType) => {
    let newItems: CartItemType[] = [...addedItems, product];
    setAddedItems(newItems);
    showMainButton(newItems);
  };

  const onRemove = (product: CartItemType) => {
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

  return (
    <>
      <div className="flex flex-wrap justify-start">
        {shopItems.map((shopItem) => (
          <ListItem
            key={shopItem.id}
            {...shopItem}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        ))}
      </div>
    </>
  );
};

export default List;
