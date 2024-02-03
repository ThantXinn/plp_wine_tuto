/** @format */
"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode, useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./NavBar";
interface Props {
  children: ReactNode;
}
const CustomThemeProvider = ({ children }: Props) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <>
        <Navbar />
        <Footer />
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
      <Footer />
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
