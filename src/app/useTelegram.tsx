export const useTelegram = () => {
    let tg;
  
    if (typeof window !== "undefined") {
      tg = window?.Telegram?.WebApp;
    }
  
    return {
      tg,
    };
  };
  