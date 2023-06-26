"use client";
import { FC, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/app/types";
import useTelegram from "@/app/hooks/useTelegram";

const ProjectItem: FC<{ project: Project }> = ({ project }) => {
  const [hasError, setHasError] = useState(!project.imageUrl);
  const handleImageError = () => {
    setHasError(true);
  };

  const telegram = useTelegram();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    telegram?.WebApp.BackButton.show();
    telegram?.WebApp.BackButton.onClick(() => {
      const backPathname = pathname.replace(/\/[^/]+$/, "");
      router.push(backPathname);
    });

    return () => {
      telegram?.WebApp.BackButton.offClick(router.back);
    };
  }, [telegram, router]);
  
  return (
    <div className="flex justify-center mt-4">
      <div className="max-w-[360px] flex flex-col items-center gap-2">
        <div>
          {hasError && (
            <div className="h-20 w-20 rounded-full animate-pulse bg-tg_secondary_bg_color cursor-pointer" />
          )}
          {!hasError && (
            <Image
              className="rounded-full cursor-pointer"
              src={project.imageUrl}
              width={74}
              height={74}
              onError={handleImageError}
              alt={project.name}
            />
          )}
        </div>
        <div className="font-bold text-tg_text_color">{project.name}</div>
        <div className="text-sm text-tg_hint_color">
          <Link href={project.url}>{project.url}</Link>
        </div>
        <div className="text-sm text-justify">{project.descriptionEn}</div>
        <div className="text-sm text-tg_hint_color">
          {project.discord} {project.twitter} {project.telegram}{" "}
          {project.reddit} {project.medium} {project.github}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
