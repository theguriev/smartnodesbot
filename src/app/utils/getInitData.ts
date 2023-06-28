import { InitDataObject } from "@/app/types";
import parseJSON from "./parseJSON";

type UserData = {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  language_code: string;
};

const getInitData = () => {
  const telegram = window.Telegram;
  const initData = telegram.Utils.urlParseQueryString<InitDataObject>(
    telegram!.Utils.urlSafeDecode(telegram!.WebApp.initData)
  );
  const userData = parseJSON<UserData, undefined>(initData.user, undefined);
  return {
    ...initData,
    userData,
  };
};

export default getInitData;
