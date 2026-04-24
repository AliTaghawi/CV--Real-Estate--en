import type { Metadata } from "next";
import Vazirmatn from "@/public/fonts/fonts";
import "./globals.css";
import Layout from "@/layout/Layout";
import ModeProvider from "@/providers/ModeProvider";

export const metadata: Metadata = {
  title: "Real Estate | CV project",
  description: "Real Estate fullstack project created with next.js (app router), node.js, mongoDB, tailwindcss and ... for resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${Vazirmatn.className} dark:bg-zinc-950 dark:text-zinc-100 h-full`}
      suppressHydrationWarning={true}
    >
      <body className="h-full flex flex-col items-start gap-1 justify-between">
        <ModeProvider>
          <Layout>{children}</Layout>
        </ModeProvider>
      </body>
    </html>
  );
}
