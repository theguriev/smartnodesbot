import { Suspense } from "react";
import Testnets from "./components/Testnets";
import Skeleton from "../components/Skeleton";
import Tabs from "../components/Tabs";

const TestNets = () => {
  return (
    <>
      <Tabs />
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
            <Testnets />
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default TestNets;
