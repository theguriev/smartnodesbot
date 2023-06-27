import { Suspense } from "react";
import Projects from "./components/Projects";
import Skeleton from "@/app/components/Skeleton";

const CartHome = () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center">
          <div className="max-w-[360px] flex justify-center">
            <Skeleton />
          </div>
        </div>
      }
    >
      <Projects />
    </Suspense>
  );
};
export default CartHome;
