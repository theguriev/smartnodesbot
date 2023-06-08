"use client";
import { Suspense, useState } from "react";
import Projects from "./components/Projects";
import Skeleton from "./components/Skeleton";
import TabNavigation from "./components/TabsNavigation";
import NewProjects from "./components/NewProjects";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState("projects");
  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <>
    <div className="flex justify-center">
      <TabNavigation onTabClick={handleTabClick} selectedTab={selectedTab} />
    </div>
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
            {selectedTab === "projects" && <Projects />}
            {selectedTab === "new" && <NewProjects />}
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default Home;
