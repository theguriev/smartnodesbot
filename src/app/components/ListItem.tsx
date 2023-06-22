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
    onItemClick: (id: number) => void
    amount: number;
  }
> = ({ onAdd, onRemove, onItemClick, amount, ...project }) => {
  const [hasError, setHasError] = useState(!project.imageUrl);
  const handleAddClick = () => {
    onAdd(project.id);
  };

  const handleRemoveClick = () => {
    onRemove(project.id);
  };

  const handleImageError = () => {
    setHasError(true);
  };

  return (
    <div className="relative w-[120px] h-[159px] flex flex-col items-center justify-center gap-2">
      <Badge amount={amount} name={project.name} />
      <div>
        {hasError && (
          <div className="h-20 w-20 rounded-full animate-pulse bg-tg_secondary_bg_color cursor-pointer" onClick={() => onItemClick(project.id)}/>
        )}
        {!hasError && (
          <Image
            className="rounded-full cursor-pointer"
            src={project.imageUrl}
            width={74}
            height={74}
            onError={handleImageError}
            alt={project.name}
            onClick={() => onItemClick(project.id)}
          />
        )}
      </div>
      <Title price={project.monthlyPrice} title={project.name} onClick={() => onItemClick(project.id)} />
      <ListItemButtons
        onAdd={handleAddClick}
        onRemove={handleRemoveClick}
        amount={amount}
      />
    </div>
  );
};

export default ListItem;
