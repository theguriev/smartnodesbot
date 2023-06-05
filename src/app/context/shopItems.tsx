"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { CartItemType, CountedCartItemType } from "../types";
import { fetchShopItems } from "../api/shopItems";

interface ContextValue {
  shopItems: CountedCartItemType[];
  setShopItems: Dispatch<SetStateAction<CountedCartItemType[]>>;
}

const ShopItemsContext = createContext<ContextValue>({
  shopItems: [],
  setShopItems: () => {},
});

export const ShopItemsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [shopItems, setShopItems] = useState<CountedCartItemType[]>([]);
  useEffect(() => {
    const fetchedShopItems = async () => {
      try {
        const data = await fetchShopItems();
        const typedData = data as CartItemType[];
        const countedItems = typedData.map((item) => ({
          ...item,
          amount: 0,
          totalPrice: 0,
        })) as CountedCartItemType[];
        setShopItems(countedItems);
      } catch (error) {
        console.error(error);
      }
    };

    fetchedShopItems();
  }, []);
  return (
    <ShopItemsContext.Provider value={{ shopItems, setShopItems }}>
      {children}
    </ShopItemsContext.Provider>
  );
};

export const useShopItemsContext = () => useContext(ShopItemsContext);
