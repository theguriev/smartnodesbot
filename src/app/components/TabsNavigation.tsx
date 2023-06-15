"use client"
import { FC } from "react";
import Link from "next/link";


const TabsNavigation: FC<{path: string}> = ({path}) => {
  return (
    <div className="flex justify-center mb-4 border-b bg-tg_secondary_bg_color">
        <ul
          className="w-[320px] flex flex-wrap -mb-px text-sm font-medium text-center gap-4"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li className="mr-2" role="presentation">
            <Link
              href="/"
              className={`inline-block py-4 border-b-2 rounded-t-lg ${path === "/" ? "border-solid text-tg_button_color" : "text-tg_hint_color hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`}
            >
              Nodes
            </Link>
          </li>
          <li className="mr-2" role="presentation">
            <Link
              href="/testnets"
              className={`inline-block py-4 border-b-2 rounded-t-lg  ${path === "/testnets" ? "border-solid text-tg_button_color" : "text-tg_hint_color hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`}
            >
              Testnets
            </Link>
          </li>
        </ul>
      </div>
  );
};

export default TabsNavigation;
