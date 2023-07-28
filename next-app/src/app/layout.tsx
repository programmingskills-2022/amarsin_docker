import "./globals.css";
import { Metadata } from "next";
import { DataProvider } from "@/app/contexts/GeneralContext";
import MyThemeProvider from "@/app/general/MyThemeProvider";
import { ReduxProvider, persistor } from "@/app/redux";

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
    <html lang="en" className="font-vazir rtl box-border">
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
