"use client";
import Script from "next/script";
import { useRouter } from "next/router";
import { useState } from "react";
import List from "./List";
import Cart from "./cart/page";

const Home = () => {
  const [ready, setReady] = useState(false);
  const handleReady = () => {
    setReady(true);
  };

  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <Script
        src="https://telegram.org/js/telegram-web-app.js"
        onReady={handleReady}
      />
      {ready && (
        <div className="flex justify-center">
          <div className="max-w-[360px] flex justify-center">
            {pathname === "/" ? <List /> : <Cart />}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
