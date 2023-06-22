"use client";
import { FC } from "react";
import t from "@/app/utils/t";
import Tab from "./Tab";

const tabs = [
  {
    href: "/",
    label: t("Nodes"),
  },
  {
    href: "/testnets",
    label: t("Testnets"),
  },
];

const TabsNavigation: FC<{ path: string }> = ({ path }) => (
  <div className="flex justify-center mb-4 border-b bg-tg_secondary_bg_color">
    <ul
      className="w-[320px] flex flex-wrap -mb-px text-sm font-medium text-center gap-4"
      id="myTab"
      data-tabs-toggle="#myTabContent"
      role="tablist"
    >
      {tabs.map(({ href, label }) => (
        <Tab key={href} href={href} label={label} active={path === href} />
      ))}
    </ul>
  </div>
);

export default TabsNavigation;
