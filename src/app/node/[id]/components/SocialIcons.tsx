"use client";
import { FC } from "react";
import { DiscordIcon } from "./DiscordIcon";
import { GithubIcon } from "./GithubIcon";
import { MediumIcon } from "./MediumIcon";
import { RedditIcon } from "./RedditIcon";
import { TelegramIcon } from "./TelegramIcon";
import { TwitterIcon } from "./TwitterIcon";

const SocialIcons: FC<{
  discord: string;
  github: string;
  medium: string;
  reddit: string;
  telegram: string;
  twitter: string;
}> = ({ discord, github, medium, reddit, telegram, twitter }) => {
  const createHandleIconClick = (path: string) => () => {
    window.Telegram.WebApp.openLink(path);
  };
  return (
    <>
      {discord && <DiscordIcon onClick={createHandleIconClick(discord)} />}
      {github && <GithubIcon onClick={createHandleIconClick(github)} />}
      {medium && <MediumIcon onClick={createHandleIconClick(medium)} />}
      {reddit && <RedditIcon onClick={createHandleIconClick(reddit)} />}
      {telegram && <TelegramIcon onClick={createHandleIconClick(telegram)} />}
      {twitter && <TwitterIcon onClick={createHandleIconClick(twitter)} />}
    </>
  );
};

export default SocialIcons;
