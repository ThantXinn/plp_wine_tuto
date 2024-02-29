/** @format */
"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode, useEffect, useState } from "react";
import MobileNavBar from "./MobileNavBar";
import Navbar from "./NavBar";
interface Props {
  children: ReactNode;
}
const CustomThemeProvider = ({ children }: Props) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  if (!mounted) {
    return (
      <>
        <Navbar />
        <MobileNavBar />
      </>
    );
  }
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange>
      <Navbar />
      {children}
      <MobileNavBar />
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
