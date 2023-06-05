"use client";
import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { CartItemType } from "../types";

interface ContextValue {
  addedItems: CartItemType[];
  setAddedItems: Dispatch<SetStateAction<CartItemType[]>>;
}

const AddedItemsContext = createContext<ContextValue>({
  addedItems: [],
  setAddedItems: () => {},
});

export const AddedItemsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [addedItems, setAddedItems] = useState<CartItemType[]>([]);

  return (
    <AddedItemsContext.Provider value={{ addedItems, setAddedItems }}>
      {children}
    </AddedItemsContext.Provider>
  );
};

export const useAddedItemsContext = () => useContext(AddedItemsContext);
