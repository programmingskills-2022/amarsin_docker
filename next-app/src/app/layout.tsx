import "./globals.css";
import { Metadata } from "next";
import { DataProvider } from "@/app/contexts/LoginContext";
import MyThemeProvider from "@/app/general/MyThemeProvider";
import { ReduxProvider } from "@/features";

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
