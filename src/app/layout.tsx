import type { Metadata } from "next";
import {Overpass } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Menu } from "@/components/menu/Menu";
const inter = Overpass({ subsets: ["latin"] });
import { ChakraProvider } from '@chakra-ui/react'
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
      <ChakraProvider>
      <NextTopLoader />
      <div className="flex justify-between h-[100vh]">
        <Menu/>
        {children}
        <LeftMenu/>
      </div>
      </ChakraProvider>
        </body>
    </html>
      </ReactQueryProvader>
  );
}
