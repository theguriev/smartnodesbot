"use client";
import "./ListItemAnimation.css";
import { FC } from "react";
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
  const handleAddClick = () => {
    onAdd(project.id);
  };

  const handleRemoveClick = () => {
    onRemove(project.id);
  };

  return (
    <div className="relative w-[120px] h-[159px] flex flex-col items-center justify-center gap-2">
      <Badge amount={amount} name={project.name} />
      <div>
        <Image
          className="rounded-full"
          src="/lava.webp"
          width={74}
          height={74}
          alt="failed to load"
        />
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
