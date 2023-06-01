"use client";
// import Script from "next/script";
// import { useState } from "react";
import { usePathname } from "next/navigation";
import List from "./List";
import Cart from "./cart/page";

// const Home = () => {
//   const [ready, setReady] = useState(false);
//   const handleReady = () => {
//     setReady(true);
//   };
//   const pathname = usePathname();
//   console.log()
//   return (
//     <>
//       <Script
//         src="https://telegram.org/js/telegram-web-app.js"
//         onReady={handleReady}
//       />
//       {ready && (
//         <div className="flex justify-center">
//           <div className="max-w-[360px] flex justify-center">
//           {/* {pathname === "/" ? <List /> : <Cart />} */}
//           <Cart />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Home;

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
