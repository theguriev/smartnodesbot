export const useTelegram = () => {
  if (typeof window !== "undefined") {
    let tg;
    return (tg = window?.Telegram?.WebApp);
  }
};
