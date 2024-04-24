import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";

import { NavigationMenuDemo } from "./navigation";
import Navbar from "@/components/ui/Navbar";
import { FooterLinks } from "@/components/Footer/FooterLinks";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "@/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MDQ",
  description: "",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          {" "}
          {/* <Navbar /> */}
          {/* <NavigationMenuDemo /> */}
          {/* <NavBar /> */}
         <Navbar/>
        </header>
        <MantineProvider theme={theme}>{children}</MantineProvider>
        <FooterLinks />
      </body>
    </html>
  );
}
