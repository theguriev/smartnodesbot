"use client";
import "./ListItemAnimation.css";
import { FC, useState } from "react";
import Image from "next/image";
import Badge from "./Badge";
import Title from "./Title";
import ListItemButtons from "./ListItemButtons";
import { Project } from "../types";

const ListItem: FC<
  Project & {
    onAdd: (id: number) => void;
    onRemove: (id: number) => void;
    onItemClick: (id: number) => void;
    amount: number;
  }
> = ({
  onAdd,
  onRemove,
  onItemClick,
  amount,
  id,
  imageUrl,
  name,
  monthlyPrice,
}) => {
  const [hasError, setHasError] = useState(!imageUrl);
  const handleAddClick = () => {
    onAdd(id);
  };

  const handleRemoveClick = () => {
    onRemove(id);
  };

  const handleImageError = () => {
    setHasError(true);
  };

  const handleItemClick = () => {
    onItemClick(id);
  };

  return (
    <div className="relative w-[120px] h-[159px] flex flex-col items-center justify-center gap-2">
      <Badge amount={amount} name={name} />
      <div>
        {hasError && (
          <div
            className="h-20 w-20 rounded-full animate-pulse bg-tg_secondary_bg_color cursor-pointer"
            onClick={handleItemClick}
          />
        )}
        {!hasError && (
          <Image
            className="rounded-full cursor-pointer"
            src={imageUrl}
            width={74}
            height={74}
            onError={handleImageError}
            alt={name}
            onClick={handleItemClick}
          />
        )}
      </div>
      <Title price={monthlyPrice} title={name} onClick={handleItemClick} />
      <ListItemButtons
        onAdd={handleAddClick}
        onRemove={handleRemoveClick}
        amount={amount}
      />
    </div>
  );
};

export default ListItem;
