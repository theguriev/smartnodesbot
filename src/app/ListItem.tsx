"use client";
import "./ListItemAnimation.css";
import { useState, FC } from "react";
import Image from "next/image";
import Badge from "./Badge";
import Title from "./Title";
import ListItemButtons from "./ListItemButtons";

const ListItem: FC<{ img: string; title: string; price: string }> = ({
  img,
  price,
  title,
}) => {
  const [counter, setCounter] = useState(0);

  const handleAddClick = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleRemoveClick = () => {
    setCounter((prevCounter) => prevCounter - 1);
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
