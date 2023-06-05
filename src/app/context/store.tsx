"use client";
import {
  createContext,
  FC,
  PropsWithChildren,
  useState,
  useContext,
} from "react";

const StoreContext = createContext<
  | {
      store: Map<number, number>;
      add: (id: number) => void;
      remove: (id: number) => void;
    }
  | undefined
>(undefined);

export const StoreContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [store, setStore] = useState(new Map<number, number>());

  const add = (id: number) => {
    const amount = store.get(id) || 0;
    setStore(new Map(store.set(id, amount + 1)));
  };

  const remove = (id: number) => {
    const amount = store.get(id) || 0;
    setStore(new Map(store.set(id, amount - 1)));
  };

  return (
    <StoreContext.Provider value={{ store, add, remove }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("Component must be used within a StoreContextProvider");
  }

  return context;
};
