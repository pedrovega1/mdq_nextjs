import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";

import { NavigationMenuDemo } from "./navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aceternity",
  description: "Example of using the Aceternity UI components",
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
          <NavigationMenuDemo />
        </header>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeSwitcher />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
