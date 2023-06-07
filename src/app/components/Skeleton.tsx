import { FC } from "react";

const divs = Array(9).fill(null);

const Skeleton: FC = () => {
  return (
    <div className="flex flex-wrap justify-start">
      {divs.map((_, index) => (
        <div
          key={index}
          className="relative font-sans w-[120px] h-[159px] flex flex-col items-center justify-center gap-2"
        >
          <div>
            <div className="h-20 w-20 bg-gray-200 rounded-full animate-pulse" />
          </div>
          <div className="text-sm bg-gray-200 h-3 w-16 rounded animate-pulse" />
          <div className="bg-gray-200 w-20 h-8 rounded animate-pulse" />
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
