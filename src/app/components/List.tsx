"use client";
import { useEffect, useCallback, FC } from "react";
import { useRouter } from "next/navigation";
import ListItem from "./ListItem";
import { Project } from "../types";
import { useStoreContext } from "../context/store";
import Skeleton from "@/app/components/Skeleton";
import { usePathname } from "next/navigation";

const List: FC<{ projects: Array<Project> }> = ({ projects }) => {
  const { store, add, remove } = useStoreContext();

  const pathname = usePathname();
  const router = useRouter();

  const handleMainButtonClick = useCallback(() => {
    router.push("/cart");
  }, [router]);

  useEffect(() => {
    window.Telegram.WebApp.BackButton.hide();
  }, []);

  useEffect(() => {
    window.Telegram.WebApp.MainButton.onClick(handleMainButtonClick);
    return () => {
      window.Telegram.WebApp.MainButton.offClick(handleMainButtonClick);
    };
  }, [handleMainButtonClick]);

  useEffect(() => {
    const total = Array.from(store.entries()).reduce(
      (sum, [_, amount]) => sum + amount,
      0
    );
    if (total === 0) {
      window.Telegram.WebApp.MainButton.hide();
      return;
    }
    window.Telegram.WebApp.MainButton.setParams({
      text: "VIEW ORDER",
      color: "#33b445",
    });
    window.Telegram.WebApp.MainButton.show();
  }, [store]);

  const handleItemClick = (id: number) => {
    if (pathname === "/") {
      router.push(`/${id}`);
    } else {
      router.push(`${pathname}/${id}`);
    }
  };

  return (
    <>
      <div className="flex flex-wrap justify-start">
        {projects ? (
          projects.map((project) => (
            <ListItem
              key={project.id}
              {...project}
              onAdd={add}
              onRemove={remove}
              amount={store.get(project.id) || 0}
              onItemClick={handleItemClick}
            />
          ))
        ) : (
          <div className="flex justify-center">
            <div className="max-w-[360px] flex justify-center">
              <Skeleton />
            </div>
          </div>
        )}
        <button
          className="absolute bottom-4 left-0 right-0"
          onClick={() => router.push("/cart")}
        >
          Only for debug purposes: go to cart
        </button>
      </div>
    </>
  );
};

export default List;
