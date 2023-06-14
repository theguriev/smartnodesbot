import "./globals.css";
import { StoreContextProvider } from "./context/store";
import TelegramScript from "./components/TelegramScript";

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
      <body className="font-sans">
        <TelegramScript />
        <StoreContextProvider>{children}</StoreContextProvider>
      </body>
    </html>
  );
}
