import { Suspense } from "react";
import Projects from "./components/Projects";

const Home = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
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
