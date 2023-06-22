import translations from "../translations";
import getInitData from "./getInitData";

const getLocale = (): keyof typeof translations => {
  const { userData } = getInitData();
  if (userData?.language_code && userData?.language_code in translations) {
    return userData.language_code as keyof typeof translations;
  }
  return "en";
};

export default getLocale;
