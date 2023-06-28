"use client";
import { FC, useState, useEffect, ReactElement } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/app/types";

import { DiscordIcon } from "./DiscordIcon";
import { GithubIcon } from "./GithubIcon";
import { MediumIcon } from "./MediumIcon";
import { RedditIcon } from "./RedditIcon";
import { TelegramIcon } from "./TelegramIcon";
import { TwitterIcon } from "./TwitterIcon";

const ProjectItem: FC<{ project: Project }> = ({ project }) => {
  const [hasError, setHasError] = useState(!project.imageUrl);
  const handleImageError = () => {
    setHasError(true);
  };

  const telegram = window.Telegram;
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

  const renderIcons = () => {
    const icons: ReactElement[] = [];
    if (project.discord) {
      icons.push(
        <Link key="discord" href={project.discord}>
          <DiscordIcon />
        </Link>
      );
    }
    if (project.github) {
      icons.push(
        <Link key="github" href={project.github}>
          <GithubIcon />
        </Link>
      );
    }
    if (project.medium) {
      icons.push(
        <Link key="medium" href={project.medium}>
          <MediumIcon />
        </Link>
      );
    }
    if (project.reddit) {
      icons.push(
        <Link key="reddit" href={project.reddit}>
          <RedditIcon />
        </Link>
      );
    }
    if (project.telegram) {
      icons.push(
        <Link key="telegram" href={project.telegram}>
          <TelegramIcon />
        </Link>
      );
    }
    if (project.twitter) {
      icons.push(
        <Link key="twitter" href={project.twitter}>
          <TwitterIcon />
        </Link>
      );
    }

    return icons;
  };

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
        <div className="font-bold text-tg_text_color text-lg">
          {project.name}
        </div>
        <div>{project.monthlyPrice}$ / month</div>
        <div className="text-sm text-tg_hint_color">
          <Link href={project.url}>{project.url}</Link>
        </div>

        <div className="text-sm text-justify text-tg_text_color">
          {project.descriptionEn}
        </div>
        <div className="text-sm text-tg_hint_color flex flex-row gap-3 mt-3">
          {renderIcons()}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
