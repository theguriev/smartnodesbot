"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTelegram } from "../hooks/useTelegram";
import ListItem from "./ListItem";
import { CartItemType } from "../types";
import { fetchShopItems } from "../api/shopItems";
import { useAddedItemsContext } from "../context/addedItems";

const List = () => {
  const [shopItems, setShopItems] = useState<CartItemType[]>([]);
  const { addedItems, setAddedItems } = useAddedItemsContext();
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
