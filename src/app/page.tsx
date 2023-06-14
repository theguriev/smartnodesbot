"use client";
import { Suspense, useState } from "react";
import Projects from "./components/Projects";
import Skeleton from "./components/Skeleton";
import classNames from "classnames";
import useTelegram from "./hooks/useTelegram";
import Link from "next/link";

const Home = () => {
  const telegram = useTelegram();

  return (
    <>
      <div className="flex justify-center mb-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-red-950">
        <ul
          className="w-[320px] flex flex-wrap -mb-px text-sm font-medium text-center"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li className="mr-2" role="presentation">
            <Link
              href="/"
              className="inline-block p-4 border-b-2 rounded-t-lg border-solid"
            >
              Nodes
            </Link>
          </li>
          <li className="mr-2" role="presentation">
            <Link
              href="/testnets"
              className="inline-block p-4 border-solid border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >
              Testnets
            </Link>
          </li>
        </ul>
      </div>
      <Suspense
        fallback={
          <div className="flex justify-center">
            <div className="max-w-[360px] flex justify-center">
              <Skeleton />
            </div>
          </div>
        }
      >
        <div className="flex justify-center">
          <div className="max-w-[360px] flex justify-center">
            {/* @ts-expect-error Server Component */}
            <Projects />
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default Home;
