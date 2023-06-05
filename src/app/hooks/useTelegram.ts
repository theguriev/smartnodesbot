import { useEffect, useState } from "react";

const useTelegram = () => {
  const [tg, setTg] = useState<typeof window.Telegram>();
  useEffect(() => {
    setTg(window.Telegram);
  }, []);
  return tg;
};

export default useTelegram;
