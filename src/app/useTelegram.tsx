const tg = window.Telegram.WebApp;

export const useTelegram = () => {
  const MainButton = tg.MainButton;
  const BackButton = tg.BackButton;
  return {
    tg,
    MainButton,
    BackButton,
  };
};
