"use client";
import "./ListItemAnimation.css";
import { FC, MouseEventHandler } from "react";
import Image from "next/image";
import Badge from "./Badge";
import Title from "./Title";
import ListItemButtons from "./ListItemButtons";
import { CountedCartItemType } from "../types";

const ListItem: FC<
  CountedCartItemType & {
    onAdd: (product: CountedCartItemType) => void;
    onRemove: (product: CountedCartItemType) => void;
  }
> = ({ onAdd, onRemove, ...cartItemProps }) => {
  const handleAddClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    onAdd(cartItemProps);
  };

  const handleRemoveClick = () => {
    onRemove(cartItemProps);
  };

  return (
    <div className="relative font-sans w-[120px] h-[159px] flex flex-col items-center justify-center gap-2">
      <Badge amount={cartItemProps.amount} name={cartItemProps.name} />
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
        amount={cartItemProps.amount}
      />
    </div>
  );
};

export default ListItem;
