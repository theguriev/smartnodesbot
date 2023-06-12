import { FC } from "react";
import useTelegram from "../hooks/useTelegram";

const divs = Array(9).fill(null);

const Skeleton: FC = () => {
  const telegram = useTelegram();
  const theme = telegram?.WebApp.colorScheme;
  return (
    <div className="flex flex-wrap justify-start">
      {divs.map((_, index) => (
        <div
          key={index}
          className="relative font-sans w-[120px] h-[159px] flex flex-col items-center justify-center gap-2"
        >
          <div>
            <div className={`h-20 w-20 rounded-full animate-pulse ${theme === "light" ? "bg-gray-200" : "bg-gray-600"}`} />
          </div>
          <div className={`text-sm h-3 w-16 rounded animate-pulse ${theme === "light" ? "bg-gray-200" : "bg-gray-600"}`} />
          <div className={`bg-gray-200 w-20 h-8 rounded animate-pulse ${theme === "light" ? "bg-gray-200" : "bg-gray-600"}`} />
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
