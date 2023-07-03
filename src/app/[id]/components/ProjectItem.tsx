"use client";
import { FC, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/app/types";
import getLocale from "@/app/utils/getLocale";
import SocialIcons from "./SocialIcons";

const ProjectItem: FC<Project> = ({
  imageUrl,
  name,
  github,
  medium,
  telegram,
  twitter,
  reddit,
  url,
  descriptionEn,
  descriptionRu,
  monthlyPrice,
  discord,
}) => {
  const [hasError, setHasError] = useState(!imageUrl);
  const locale = getLocale();
  const handleImageError = () => {
    setHasError(true);
  };

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    window.Telegram.WebApp.BackButton.show();

    const handleBackButtonClick = () => {
      const backPathname = pathname.replace(/\/[^/]+$/, "");
      router.push(backPathname || "/");
    };

    window.Telegram.WebApp.BackButton.onClick(handleBackButtonClick);
    return () => {
      window.Telegram.WebApp.BackButton.offClick(handleBackButtonClick);
    };
  }, [telegram, router, pathname]);

  return (
    <div className="flex justify-center mt-4">
      <div className="max-w-[360px] flex flex-col items-center gap-2">
        <div>
          {hasError ? (
            <div className="h-20 w-20 rounded-full animate-pulse bg-tg_secondary_bg_color cursor-pointer" />
          ) : (
            <Image
              className="rounded-full cursor-pointer"
              src={imageUrl}
              width={74}
              height={74}
              onError={handleImageError}
              alt={name}
            />
          )}
        </div>
        <div className="font-bold text-tg_text_color text-lg">{name}</div>
        <div className="text-tg_text_color">{monthlyPrice}$ / month</div>
        <div className="text-sm text-tg_hint_color">
          <Link href={url}>{url}</Link>
        </div>

        <div className="text-sm text-justify text-tg_text_color mx-6">
          {locale === "ru" ? descriptionRu : descriptionEn}
        </div>
        <div className="text-sm text-tg_hint_color flex flex-row gap-3 mt-3 mb-6">
          <SocialIcons
            discord={discord}
            github={github}
            twitter={twitter}
            reddit={reddit}
            medium={medium}
            telegram={telegram}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
