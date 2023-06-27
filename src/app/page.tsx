import { Suspense } from "react";
import Projects from "./components/Projects";
import Skeleton from "./components/Skeleton";
import TabsNavigation from "./components/TabsNavigation";

const Home = () => {
  return (
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
          <div className="w-[360px] flex justify-center">
            <Projects />
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default Home;
