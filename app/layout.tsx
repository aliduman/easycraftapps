import type { Metadata } from "next";
import { LanguageProvider } from "../lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "EasyCraft Apps",
  description: "An app studio crafting quality experiences for Apple platforms",
  icons: {
    icon: "/favicon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "EasyCraft Apps",
    description:
      "An app studio crafting quality experiences for Apple platforms",
    images: ["/logo-full.png"],
  },
};

const themeInit = `try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
