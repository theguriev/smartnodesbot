import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
