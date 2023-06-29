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
import getLocale from "@/app/utils/getLocale";

const ProjectItem: FC<{ project: Project }> = ({ project }) => {
  const [hasError, setHasError] = useState(!project.imageUrl);
  const locale = getLocale();
  const handleImageError = () => {
    setHasError(true);
  };

  const telegram = window.Telegram;
  const router = useRouter();
  const pathname = usePathname();
  const backButtonClick = () => {
    const backPathname = pathname.replace(/\/[^/]+$/, "");
    if (backPathname === "") {
      router.push("/");
    } else {
      router.push(backPathname);
    }
  };

  useEffect(() => {
    telegram?.WebApp.BackButton.show();
    telegram?.WebApp.BackButton.onClick(backButtonClick);
    return () => {
      telegram?.WebApp.BackButton.offClick(router.back);
    };
  }, [telegram, router]);

  const handleIconClick = (path: string) => {
    telegram.WebApp.openLink(path);
  };

  const renderIcons = () => {
    const icons: ReactElement[] = [];
    if (project.discord) {
      icons.push(
        <DiscordIcon onClick={() => handleIconClick(project.discord)} />
      );
    }
    if (project.github) {
      icons.push(
        <GithubIcon onClick={() => handleIconClick(project.github)} />
      );
    }
    if (project.medium) {
      icons.push(
        <MediumIcon onClick={() => telegram.WebApp.openLink(project.medium)} />
      );
    }
    if (project.reddit) {
      icons.push(
        <RedditIcon onClick={() => handleIconClick(project.reddit)} />
      );
    }
    if (project.telegram) {
      icons.push(
        <TelegramIcon onClick={() => handleIconClick(project.telegram)} />
      );
    }
    if (project.twitter) {
      icons.push(
        <TwitterIcon onClick={() => handleIconClick(project.twitter)} />
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
        <div className="text-tg_text_color">
          {project.monthlyPrice}$ / month
        </div>
        <div className="text-sm text-tg_hint_color">
          <Link href={project.url}>{project.url}</Link>
        </div>

        <div className="text-sm text-justify text-tg_text_color mx-6">
          {locale === "ru" ? project.descriptionRu : project.descriptionEn}
        </div>
        <div className="text-sm text-tg_hint_color flex flex-row gap-3 mt-3 mb-6">
          {renderIcons()}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
