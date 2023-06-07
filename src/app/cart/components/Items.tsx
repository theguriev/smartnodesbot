"use client";
import { FC, useEffect, useMemo, useState } from "react";
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
  const { store } = useStoreContext();
  const telegram = useTelegram();
  const router = useRouter();
  const [inputType, setInputType] = useState<"qr" | "wallet">("qr");

  const storeItems = useMemo(
    () =>
      Array.from(store.entries()).map(([id, amount]) => ({
        ...projectsMap[id],
        amount,
      })),
    [store, projectsMap]
  );

  useEffect(() => {
    telegram?.WebApp.BackButton.show();

    telegram?.WebApp.BackButton.onClick(router.back);

    return () => {
      telegram?.WebApp.BackButton.offClick(router.back);
    };
  }, [telegram, router]);

  useEffect(() => {
    const sum = storeItems.reduce(
      (sum, { amount, monthlyPrice }) => sum + amount * (monthlyPrice || 0),
      0
    );
    telegram?.WebApp.MainButton.setParams({
      text: `PAY ${sum}$`,
    });
  }, [storeItems, telegram]);

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
        <div className="flex space-x-4 mb-5 py-5 px-6">
          <span
            className="font-bold"
            style={{ color: telegram?.WebApp.themeParams?.text_color }}
          >
            Payment method:
          </span>
          <label className="flex items-center">
            <input
              type="radio"
              value="qr"
              className="form-radio h-4 w-4 text-blue-600"
              checked={inputType === "qr"}
              onChange={(e) => setInputType(e.target.value as "qr" | "wallet")}
            />
            <span
              className="ml-2"
              style={{ color: telegram?.WebApp.themeParams?.text_color }}
            >
              QR Code
            </span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="wallet"
              className="form-radio h-4 w-4 text-blue-600"
              checked={inputType === "wallet"}
              onChange={(e) => setInputType(e.target.value as "qr" | "wallet")}
            />
            <span
              className="ml-2"
              style={{ color: telegram?.WebApp.themeParams?.text_color }}
            >
              @wallet
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};
export default Items;
