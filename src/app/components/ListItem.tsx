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
    amount: number;
  }
> = ({ onAdd, onRemove, amount, ...project }) => {
  console.log("project.imageUrl", project.imageUrl);
  const [hasError, setHasError] = useState(project.imageUrl === null);
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
          <div className="h-20 w-20 rounded-full animate-pulse bg-tg_secondary_bg_color" />
        )}
        {!hasError && (
          <Image
            className="rounded-full"
            src={project.imageUrl}
            width={74}
            height={74}
            onError={handleImageError}
            alt={project.name}
          />
        )}
      </div>
      <Title price={project.monthlyPrice} title={project.name} />
      <ListItemButtons
        onAdd={handleAddClick}
        onRemove={handleRemoveClick}
        amount={amount}
      />
    </div>
  );
};

export default ListItem;
