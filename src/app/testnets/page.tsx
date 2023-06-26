"use client";
import { Suspense, useEffect, useState } from "react";
import Testnets from "./components/Testnets";
import Skeleton from "../components/Skeleton";
import TabsNavigation from "../components/TabsNavigation";
import { usePathname } from "next/navigation";

const TestNets = () => {
  const pathname = usePathname();
  return (
    <>
      <TabsNavigation path={pathname} />
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
          <div className="w-[360px] flex">
            {/* @ts-expect-error Server Component */}
            <Testnets />
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default TestNets;
