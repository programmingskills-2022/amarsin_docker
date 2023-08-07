import "./globals.css";
import { Metadata } from "next";
import { DataProvider } from "@/app/contexts/GeneralContext";
import MyThemeProvider from "@/app/general/MyThemeProvider";
import { ReduxProvider, persistor } from "@/app/redux";

import localFont from "@next/font/local";

const vazir = localFont({
  src: [
    {
      path: "/fonts/Vazir-Medium-FD-WOL.ttf",
      weight: "400",
    },
  ],
  variable: "--font-vazir",
});

export const metadata: Metadata = {
  title: `آمارسین`,
  description: "نرم افزار مالی داتیس",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" className={`${vazir.variable} font-sans rtl box-border`}>
      <body>
        <MyThemeProvider>
          <DataProvider>
            <ReduxProvider>{children}</ReduxProvider>
          </DataProvider>
        </MyThemeProvider>
      </body>
    </html>
  );
}
