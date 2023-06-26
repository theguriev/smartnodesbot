"use client";
import { Suspense } from "react";
import Projects from "./components/Projects";
import Skeleton from "./components/Skeleton";
import TabsNavigation from "./components/TabsNavigation";
import { usePathname } from 'next/navigation'

const Home = () => {
    const pathname = usePathname()
    return (<>
        <TabsNavigation path={pathname}/>
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
                    {/* @ts-expect-error Server Component */} 
                    <Projects />
                </div>
            </div>
        </Suspense>
    </>)
}

export default Home