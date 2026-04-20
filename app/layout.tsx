import type { Metadata } from "next";
import Vazirmatn from "@/public/fonts/fonts";
import "./globals.css";
import Layout from "@/layout/Layout";

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
    <html lang="en" className={`${Vazirmatn.className}`}>
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
