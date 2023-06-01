"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import List from "./List";
import Cart from "./cart/page";

const Home = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-[360px] flex justify-center">
          {pathname === "/" ? <List /> : <Cart />}
        </div>
      </div>
    </>
  );
};

export default Home;
