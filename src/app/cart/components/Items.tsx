"use client";
import { FC, useEffect, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useTelegram from "../../hooks/useTelegram";
import { Project } from "../../types";
import { useStoreContext } from "../../context/store";
import Item from "./Item";

const Items: FC<{
  projects: Array<Project>;
  projectsMap: Record<number, Project>;
}> = ({ projectsMap }) => {
  const { store, add, remove } = useStoreContext();
  const telegram = useTelegram();
  const router = useRouter();

  const storeItems = useMemo(
    () =>
      Array.from(store.entries()).map(([id, amount]) => ({
        ...projectsMap[id],
        amount,
      })),
    [store, projectsMap]
  );

  const orderPrice = 0;

  useEffect(() => {
    telegram?.WebApp.MainButton.setParams({
      text: `PAY ${orderPrice}$`,
    });
    telegram?.WebApp.BackButton.show();

    telegram?.WebApp.BackButton.onClick(router.back);

    return () => {
      telegram?.WebApp.BackButton.offClick(router.back);
    };
  }, [telegram, router]);

  return (
    <div
      className="flex flex-col font-sans h-screen"
      style={{
        backgroundColor: telegram?.WebApp.themeParams.secondary_bg_color,
      }}
    >
      <div
        className="flex justify-between py-5 px-6"
        style={{ backgroundColor: telegram?.WebApp.themeParams?.bg_color }}
      >
        <span
          className="font-bold"
          style={{ color: telegram?.WebApp.themeParams?.text_color }}
        >
          YOUR ORDER
        </span>
        <span className=" text-active">
          <Link href="/" onClick={router.back}>
            Edit
          </Link>
        </span>
      </div>
      {storeItems.map(({ id, blockQuoteEn, monthlyPrice, amount, name }) => (
        <Item
          key={id}
          blockQuoteEn={blockQuoteEn}
          monthlyPrice={monthlyPrice}
          amount={amount}
          name={name}
        />
      ))}
      <div className="pt-3 flex flex-col h-full">
        <input
          className="px-6 py-3 text-base focus:outline-none"
          placeholder="Add comment..."
          style={{
            color: telegram?.WebApp.themeParams?.text_color,
            backgroundColor: telegram?.WebApp.themeParams?.bg_color,
          }}
        />
        <span
          className="px-6 pt-3 pb-6 text-sm"
          style={{ color: telegram?.WebApp.themeParams?.hint_color }}
        >
          Any special requests, details, final wishes etc.
        </span>
        <button onClick={() => router.back()}>to list</button>
      </div>
    </div>
  );
};
export default Items;
