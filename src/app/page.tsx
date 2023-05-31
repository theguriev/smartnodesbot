"use client";
import Script from "next/script";
import { useState } from "react";
import List from "./List";

const Home = () => {
  const [ready, setReady] = useState(false);
  const handleReady = () => {
    setReady(true);
  };

  return (
    <>
      <Script
        src="https://telegram.org/js/telegram-web-app.js"
        onReady={handleReady}
      />
      {ready && (
        <div className="flex justify-center">
          <div className="max-w-[360px] flex justify-center">
            <List />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
