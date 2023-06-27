import { Suspense } from "react";
import Testnets from "./components/Testnets";
import Skeleton from "../components/Skeleton";
import TabsNavigation from "../components/TabsNavigation";

const TestNets = () => (
  <>
    <TabsNavigation />
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
          <Testnets />
        </div>
      </div>
    </Suspense>
  </>
);

export default TestNets;
