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
  const [pulsingOut, setPulsingOut] = useState(false);
  const [pulsingIn, setPulsingIn] = useState(false);
  const [activeCounter, setActiveCounter] = useState(false);

  const handleAddClick = () => {
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
    setActiveCounter(true);
    setPulsingOut(true);
    setTimeout(() => {
      setPulsingOut(false);
    }, 110);
  };

  const handleRemoveClick = () => {
    setCounter((prevCounter) => {
      return prevCounter - 1;
    });
    setPulsingIn(true);
    setTimeout(() => {
      setPulsingIn(false);
    }, 110);
    if (counter === 1) {
      setActiveCounter(false);
    }
  };

  return (
    <div className="relative font-sans w-[120px] h-[159px] flex flex-col items-center justify-center gap-2">
      <Badge
        activeCounter={activeCounter}
        counter={counter}
        pulsingIn={pulsingIn}
        pulsingOut={pulsingOut}
      />
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
        activeCounter={activeCounter}
        counter={counter}
      />
    </div>
  );
};

export default ListItem;
