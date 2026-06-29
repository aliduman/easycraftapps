import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EasyCraft Apps",
  description: "An app studio crafting quality experiences for Apple platforms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}