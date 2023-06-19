import { InitDataObject } from "@/app/types";
import useTelegram from "./useTelegram";
import parseJSON from "@/app/utils/parseJSON";

type UserData = {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  language_code: string;
};

const useInitData = () => {
  const telegram = useTelegram();
  const initData = telegram!.Utils.urlParseQueryString<InitDataObject>(
    telegram!.Utils.urlSafeDecode(telegram!.WebApp.initData)
  );
  const userData = parseJSON<UserData, undefined>(initData.user, undefined);
  return {
    ...initData,
    userData,
  };
};

export default useInitData;
