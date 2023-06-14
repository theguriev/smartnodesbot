"use client";
import { FC } from "react";
import classNames from "classnames";
import useTelegram from "../hooks/useTelegram";

const TabNavigation: FC<{
  onTabClick: (tab: string) => void;
  selectedTab: string;
}> = ({ onTabClick, selectedTab }) => {
  const handleClick = (tab: string) => {
    onTabClick(tab);
  };

  const telegram = useTelegram();
  const theme = telegram?.WebApp.colorScheme;

  return (
    <div className="flex justify-center mb-4 -ml-40">
      <button
        className={classNames(
          "flex w-20 h-10 items-center justify-center ",
          selectedTab === "projects" &&
            `border-b-2 ${
              theme === "light"
                ? "border-smart text-smart"
                : "border-funny text-funny"
            }`
        )}
        onClick={() => handleClick("projects")}
      >
        Nodes
      </button>
      <button
        className={classNames(
          "flex w-20 h-10 items-center justify-center ",
          selectedTab === "new" &&
            `border-b-2 ${
              theme === "light"
                ? "border-smart text-smart"
                : "border-funny text-funny"
            }`
        )}
        onClick={() => handleClick("new")}
      >
        Testnets
      </button>
    </div>
  );
};

export default TabNavigation;
