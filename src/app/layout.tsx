import type { Metadata } from "next";
import {Overpass } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Menu } from "@/components/menu/Menu";
const inter = Overpass({ subsets: ["latin"] });
import { LeftMenu } from "@/components/leftMenu/LeftMenu";
import { ReactQueryProvader } from "./ReactQueryProvader";
export const metadata: Metadata = {
  title: "Кинопоиск. Все фильмы планеты.",
  icons: '/4831192.png'
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  return (
      <ReactQueryProvader>
    <html lang="ru">
      <body className={inter.className}>
      <NextTopLoader />
      <div className="flex justify-between">
        <Menu/>
        {children}
        <LeftMenu/>
      </div>
        </body>
    </html>
      </ReactQueryProvader>
  );
}
