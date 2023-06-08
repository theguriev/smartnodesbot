"use client"
import { FC} from "react";
import classNames from "classnames";
import useTelegram from "../hooks/useTelegram";

const TabNavigation: FC<{ onTabClick: (tab: string) => void;
    selectedTab: string }> = ({ onTabClick, selectedTab }) => {
  const handleClick = (tab: string) => {
    onTabClick(tab);
  };

  const telegram = useTelegram();


  return (
    <div className="flex font-sans justify-center mb-4">
      <button
      className={classNames(
        "flex w-20 h-10 items-center justify-center ",
        selectedTab === "projects" && "border-b-2 border-smart text-smart"
      )}
        onClick={() => handleClick("projects")}
      >
        projects
      </button>
      <button
      className={classNames(
        "flex w-20 h-10 items-center justify-center ",
        selectedTab === "new" && "border-b-2 border-smart text-smart"
      )}
        onClick={() => handleClick("new")}
      >
        projects
      </button>
    </div>
  );
};

export default TabNavigation;
