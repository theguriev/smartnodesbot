import "./globals.css";
import Script from "next/script";
import { StoreContextProvider } from "./context/store";

export const metadata = {
  title: "Smart Nodes Bot",
  description: "Smart Nodes Bot",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Script src="https://telegram.org/js/telegram-web-app.js" defer />
        <StoreContextProvider>{children}</StoreContextProvider>
      </body>
    </html>
  );
}
