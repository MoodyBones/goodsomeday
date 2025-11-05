import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Goodsomeday - Your career story matters",
  description: "A platform for sharing career journey stories at every stage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
