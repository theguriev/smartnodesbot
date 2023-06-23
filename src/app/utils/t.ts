import translations from "../translations";
import getLocale from "./getLocale";

const t = (key: keyof (typeof translations)["en"]) => {
  const locale = getLocale();
  return translations[locale][key];
};

export default t;
