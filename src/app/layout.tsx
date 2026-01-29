import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oolong - Clinical archive of career barriers and transformations",
  description: "Document what happened. Turn barriers into evidence. Build a profile that matches how you actually work.",
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
