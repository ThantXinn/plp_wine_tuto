/** @format */

import type { Metadata } from "next";
import CustomThemeProvider from "./components/CustomThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "PLP Wine Shop",
  description: "Generated by create wine web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <CustomThemeProvider>{children}</CustomThemeProvider>
      </body>
    </html>
  );
}
