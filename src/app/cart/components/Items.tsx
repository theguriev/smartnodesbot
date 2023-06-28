"use client";
import { FC, useEffect, useMemo, useState, ChangeEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Project } from "@/app/types";
import { useStoreContext } from "@/app/context/store";
import validateEmail from "@/app/utils/validateEmail";
import postBulkPurchase from "@/app/api/postBulkPurchase";
import getInitData from "@/app/utils/getInitData";
import Item from "./Item";
import t from "@/app/utils/t";

const Items: FC<{
  projects: Array<Project>;
  projectsMap: Record<number, Project>;
}> = ({ projectsMap }) => {
  const { store } = useStoreContext();
  const telegram = window.Telegram;
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

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
    telegram?.WebApp.BackButton.onClick(() => router.push("/"));

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
      text: `${t("Pay").toUpperCase()} ${sum}$`,
    });

    const handleMainButtonClick = () => {
      postBulkPurchase({
        email,
        phone,
        shoppingCart: storeItems.map(({ id, amount }) => ({
          projectId: id,
          nodesCount: amount,
        })),
        firstName: getInitData().userData!.first_name,
        lastName: getInitData().userData!.last_name,
        telegram: getInitData().userData!.username,
      });
    };

    telegram!.WebApp.MainButton.onClick(handleMainButtonClick);
  }, [storeItems, telegram, email, phone]);

  useEffect(() => {
    telegram.WebApp.MainButton.setParams({
      is_visible: !!(validateEmail(email) && phone),
    });
  }, [email, phone, telegram]);

  const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePhoneInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  return (
    <div className="flex flex-col h-screen bg-tg_secondary_bg_color">
      <div className="flex justify-between py-5 px-6 bg-tg_bg_color">
        <span className="font-bold text-tg_text_color uppercase">
          {t("Your order")}
        </span>
        <span className=" text-active">
          <Link href="/" onClick={router.back}>
            {t("Edit")}
          </Link>
        </span>
      </div>
      {storeItems.map(
        ({ id, blockQuoteEn, blockQuoteRu, monthlyPrice, amount, name }) => (
          <Item
            key={id}
            blockQuoteEn={blockQuoteEn}
            blockQuoteRu={blockQuoteRu}
            monthlyPrice={monthlyPrice}
            amount={amount}
            name={name}
          />
        )
      )}
      <div className="pt-3 flex flex-col">
        <input
          className="px-6 py-3 text-base focus:outline-none text-tg_text_color bg-tg_bg_color"
          placeholder={`${t("Email address")}`}
          value={email}
          onChange={handleEmailInput}
        />
        <span className="px-6 pt-3 pb-6 text-sm text-tg_hint_color">
          {t("We will send you a receipt and a link to the payment")}
        </span>
      </div>
      <div className="pt-3 flex flex-col">
        <input
          className="px-6 py-3 text-base focus:outline-none text-tg_text_color bg-tg_bg_color"
          placeholder={`${t("Phone number")}...`}
          value={phone}
          onChange={handlePhoneInput}
        />
        <span className="px-6 pt-3 pb-6 text-sm text-tg_hint_color">
          {t("Contact phone number")}
        </span>
      </div>
    </div>
  );
};
export default Items;
