import { Suspense } from "react";
import Projects from "./components/Projects";
import Skeleton from "./components/Skeleton";

const Home = () => {
  return (
    <>
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
