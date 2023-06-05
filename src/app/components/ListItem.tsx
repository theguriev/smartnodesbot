"use client";
import "./ListItemAnimation.css";
import { useState, FC, MouseEventHandler } from "react";
import Image from "next/image";
import Badge from "./Badge";
import Title from "./Title";
import ListItemButtons from "./ListItemButtons";
import { CartItemType } from "../types";

const ListItem: FC<
  CartItemType & {
    onAdd: (product: CartItemType) => void;
    onRemove: (product: CartItemType) => void;
  }
> = ({ onAdd, onRemove, ...cartItemProps }) => {
  const [counter, setCounter] = useState(0);

  const handleAddClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    setCounter((prevCounter) => prevCounter + 1);
    onAdd(cartItemProps);
  };

  const handleRemoveClick = () => {
    setCounter((prevCounter) => prevCounter - 1);
    onRemove(cartItemProps);
  };

  return (
    <div className="relative font-sans w-[120px] h-[159px] flex flex-col items-center justify-center gap-2">
      <Badge counter={counter} />
      <div>
        <Image
          className="rounded-full"
          // src={cartItemProps.imageUrl}
          src="/lava.webp"
          width={74}
          height={74}
          alt="failed to load"
        />
      </div>
      <Title price={cartItemProps.monthlyPrice} title={cartItemProps.name} />
      <ListItemButtons
        onAdd={handleAddClick}
        onRemove={handleRemoveClick}
        counter={counter}
      />
    </div>
  );
};

export default ListItem;
