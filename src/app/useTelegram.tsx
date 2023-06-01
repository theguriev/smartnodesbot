export const useTelegram = () => {
  if (typeof window === "undefined") {
    return {
      tg: undefined,
    };
  }

  const tg = window?.Telegram?.WebApp;

  return {
    tg,
  };
};
