"use client";
import "./ListItemAnimation.css";
import { useState, FC, MouseEventHandler } from "react";
import Image from "next/image";
import Badge from "./Badge";
import Title from "./Title";
import ListItemButtons from "./ListItemButtons";
import { CartItem } from "../types";

const ListItem: FC<
  CartItem & {
    addToCart: (product: CartItem) => void;
    removeFromCart: (product: CartItem) => void;
  }
> = ({ img, title, price, id, addToCart, removeFromCart }) => {
  const [counter, setCounter] = useState(0);

  const handleAddClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    setCounter((prevCounter) => prevCounter + 1);
    addToCart({ img, title, price, id });
  };

  const handleRemoveClick = () => {
    setCounter((prevCounter) => prevCounter - 1);
    removeFromCart({ img, title, price, id });
  };

  return (
    <div className="relative font-sans w-[120px] h-[159px] flex flex-col items-center justify-center gap-2">
      <Badge counter={counter} />
      <div>
        <Image
          className="rounded-full"
          src={img}
          width={74}
          height={74}
          alt="failed to load"
        />
      </div>
      <Title price={price} title={title} />
      <ListItemButtons
        onAdd={handleAddClick}
        onRemove={handleRemoveClick}
        counter={counter}
      />
    </div>
  );
};

export default ListItem;
